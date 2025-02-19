<script type="ts">
    import type { Class, Method, Parameter } from "$lib/typings/rewrite_docs";

    import method_src from "$lib/resource/method.webp?url";
    import StyledItem from "$lib/content/sidebar/StyledItem.svelte";
    import {base} from "$app/paths";
    
    import Highlight from "$lib/highlighter/Highlight.svelte";
    import Code from "$lib/Code.svelte";
    import type { Hint } from "$lib/typings/examples_typings";
    import type DocsInterface from "$lib/docs/statistics";

    import { extractIdentifiers } from "../typePicker";
    import DescribeRoot from "../DescribeRoot.svelte";

    import TranslatableKey from "$lib/language/TranslatableKey.svelte";

    export let hostClass: Class;
    export let method: Method;

    export let classi: DocsInterface;

    export let forceSmall: boolean = false;
    export let setId: boolean = true;

    let shouldShowClass: boolean;
    let qualifiedName: string;

    $: shouldShowClass = hostClass.name !== "globals";
    $: qualifiedName = (shouldShowClass? hostClass.name + "." : "") + method.name;

    function processOverload(overload: Parameter[], returns: string): [string, Hint[]] {
        let ret = "";
        let hints: Hint[] = [];

        let shouldUseColon = !method.static;

        if (shouldShowClass) {
            ret += hostClass.name + (shouldUseColon ? ":" : ".");
        }

        ret += method.name;
        ret += "(";

        for (let i = 0; i < overload.length; i++) {
            ret += overload[i].name;
            ret += ": ";
            overload[i].type
            hints = hints.concat(extractIdentifiers(classi, overload[i].type, ret.length))
            ret += overload[i].type;

            if (i !== overload.length - 1) {
                ret += ", ";
            }
        }

        ret += "): "

        hints = hints.concat(extractIdentifiers(classi, returns, ret.length))

        ret += returns;

        return [ret, hints];
    }

    let superclass: string | null;

    $: superclass = classi.isFromSuperClass(hostClass, method);
    
    export let path: string;

    export let highlight: string[] = [];
</script>

<DescribeRoot example={method.example ?? null} classi={classi} forceSmall={forceSmall} id={qualifiedName} highlightTitle={highlight.includes("title")} path={path}>
    <svelte:fragment slot="title">
        <StyledItem src={method_src} href={base + path + qualifiedName} wrap="h1" color="dark" id={setId ? qualifiedName : null} style={superclass === null ? "" : "margin-bottom: 0px;"}>
            {qualifiedName}
        </StyledItem>
        {#if superclass !== null}
            <p style:margin-left="5px" style:padding-bottom="5px" style:margin-top="0" style:margin-bottom="25px">Inherited from <Code style="display: inline;"><Highlight path={path} code={superclass} hoverHighlight={[{range: [0, superclass.length], type: "docs", name: superclass}]}></Highlight></Code></p>
        {/if}
    </svelte:fragment>

    <div class:highlight={highlight.includes("description")}>
        <TranslatableKey key={method.description} warn focus/>
    </div>

    <div class="code-example filled" style:margin-top="50px">
        {#each method.parameters as overload, idx}
        {@const processed = processOverload(overload, method.returns[idx])}
            <Code>
                <Highlight path={path} code={processed[0]} hoverHighlight={processed[1]}></Highlight>
            </Code>
        {/each}
    </div>
</DescribeRoot>

<style lang="less">
    .code-example.filled {
        margin: 10px;
        padding: 10px;
        overflow: hidden;
    }

    @media only screen and (min-width: 1000px) {
        .code-example.filled:not(.force-small)  {
            margin: 0px;
            padding: 0px;
            grid-row: 1 / 3;
            grid-column: 2;
        }
    }

    @import "src/app";

    .highlight {
        .highlig();
    }
</style>
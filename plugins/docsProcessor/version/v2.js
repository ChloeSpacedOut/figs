import fs from "node:fs/promises";
import path from "node:path";

function removeChildrenTags(thing) {
    thing.methods.forEach(element => {
        delete element.children;
    });

    thing.fields.forEach(element => {
        delete element.children;
    });
}

export async function transform(json, folder) {
    let result = {
        types: {},
        lists: {}
    }

    json.lists.forEach(val => {
        result.lists[val.name] = val;
    })

    result.types.math = json.math;
    result.types.globals = json.globals;

    let globals = json.globals;


    globals.fields.forEach(field => {
        field.children.forEach(element => {
            result.types[element.name] = element;
            element.category = field.name

            removeChildrenTags(element);
        });
    });

    removeChildrenTags(globals);
    removeChildrenTags(json.math);

    let files = await fs.readdir(path.join(folder, "languages"));

    return {
        result: result,
        languages: files.map(v => v.split(".")[0])
    };
}

export async function language(json, language, folder) {
    let file = await fs.readFile(path.join(folder, "languages", language + ".json"), {encoding: "utf-8"});
    let j = JSON.parse(file);

    Object.keys(j).forEach(key => {
        if (!key.startsWith("figura.docs")) {
            delete j[key]
        }
    })

    return j
}
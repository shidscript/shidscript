import parser from "./parser"

export default function interpreter(code: string, options = {}) {
    let rawTree

    try {
        rawTree = parser.feed(code);
    }
    catch (e) {
        console.log(e);
    }
    return rawTree;
}
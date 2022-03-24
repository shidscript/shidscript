import moo from 'moo'

export default {
    comment: createRuleWithTransformer(/#.*/, (s: string) => s.slice(1)),
    mlComment: createRuleWithTransformer(/##.*##/, (s: string) => s.slice(2, -2), { lineBreaks: true }),
    string: createRuleWithTransformer(/['"].*?['"]/, (s: string) => s.slice(1, -1)),
    number: /\d*\.\d+|\d+/,
    fixedPointNumber: /(?:\d*\.\d+|\d+)f/,
    bigNumber: /\d+n/,
    boolean: /true|false/,
    // These keywords have no use, it's only here for the lexer to read correctly
    keyword: ["import", "export", "as", "default", "none", "empty", "from"] as const,
    importStatementType: ['package', 'type', 'module'] as const,
    classPropertyAttribute: ['private', 'readonly', 'public', 'static'] as const,
    classMethodAttribute: ['private', 'public', 'static'] as const,
    declarationKeyword: ['var', 'const', 'final'] as const,
    // Declaration keywords that requires a block to complete
    // func myFunction() {}, etc.
    declarationStatementKeyword: ['func'] as const,
    // Statement keywords that do not declare anything
    // for() {}, if() {} else {}, etc.
    statement: ['for', 'if', 'else'] as const,
    variable: /[a-zA-Z][a-zA-Z0-9]*/,
    operator: ['+', '-', '*', '/', '**'] as const,
    other: [":", "{", "}", "[", "]", "(", ")", "="] as const,
    space: /[\t ]+/,
    newLine: { match: /\r?\n/, lineBreaks: true },
    semiColon: [';']
}

export function createRuleWithTransformer(r: moo.Rule['match'], t: moo.Rule['value'], o: Omit<moo.Rule, 'match' | 'value'> = {}) {
    return { match: r, value: t, ...o };
}

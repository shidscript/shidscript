enum ASTType {
    None,
    Empty,
    
    StringLiteral,
    NumberLiteral,
    FixedPointNumberLiteral,
    BigNumberLiteral,
    BooleanLiteral,
    ObjectLiteral,
    ArrayLiteral,
    FunctionLiteral, // TODO: add this after other AST struct is finished

    Comment,
    MultiLineComment,
    
    Identifier,
    VariableDeclaration,
    Variable,
    ArrayPattern,
    ObjectPattern,

    BlockStatement,
    NewStatement,
    ForStatement,
    WhileStatement,

    ObjectProperty,
    ArrayElement,

    ImportDefault,
    ImportNamespace,
    Export,
    ExportFrom,
    ExportNamespace,
}

export default ASTType

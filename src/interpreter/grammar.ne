@{%
import lexer from './lexer'
// Requires edits after compile
%}

@lexer lexer

globalBlock -> blockContent

blockContent
    -> ___ content ___
     | ___ (content ____):* content ___

block -> "{" ___ blockContent ___ "}" {% ([,,block]: any[]) => block %}

content
    -> statement
     | expression

statement
    -> variableDeclaration {% id %}
     | importStatement

expression
    -> %string
     | %number
     | %variable

declarable
    -> %variable
     | deStructure

deStructure
    -> "{" (_ %variable (_ ":" _ %variable):? _ ("," _):* ):* "}"
     | "{" (_ %variable _ ":" _ deStructure _ ("," _):* ):* "}"
     | "[" (_ %variable _ ("," _):* ):* "]"
     | "[" (_ deStructure _ ("," _):* ):* "]"

variableDeclaration
    -> %declarationKeyword __ declarable _ "=" _ expression
     | declarable _ "=" _ expression

importStatement
    -> ("import" | "import*") __ %importStatementType __ %string "as" (%variable | deStructure)
     | "import" __ %importStatementType __ %string

# Optional spaces
_ -> %space:* {% id %}
# Required spaces
__ -> %space:+ {% id %}

# Optional statement ending characters
___ -> (%space | %newLine | %semiColon):* {% id %}
# Required statement ending characters
____ -> (%space | %newLine | %semiColon):+ {% id %}
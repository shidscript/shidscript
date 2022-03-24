import { ASTBase, ASTExpression } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'
import Identifier from './Identifier'

export default class ArrayPattern implements ASTBase {
    type = ASTType.ArrayPattern

    constructor(public properties: (Identifier | ASTExpression.Patterns)[], public location: LocationPoints) {}
}
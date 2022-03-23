import { ASTBase, ASTExpression } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'

export default class ArrayLiteral implements ASTBase {
    type = ASTType.ArrayLiteral

    constructor(public elements: ASTExpression.Any[], public location: LocationPoints) {}
}
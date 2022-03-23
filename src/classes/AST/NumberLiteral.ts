import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'

export default class NumberLiteral implements ASTBase {
    type = ASTType.NumberLiteral

    constructor(public value: number, public location: LocationPoints) {}
}
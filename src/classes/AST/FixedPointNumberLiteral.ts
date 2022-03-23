import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'

export default class FixedPointNumberLiteral implements ASTBase {
    type = ASTType.FixedPointNumberLiteral

    constructor(public value: BigUint64Array, public location: LocationPoints) {}
}
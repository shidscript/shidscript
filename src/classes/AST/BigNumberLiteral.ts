import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'

export default class BigNumberLiteral implements ASTBase {
    type = ASTType.BigNumberLiteral

    constructor(public value: bigint, public location: LocationPoints) {}
}
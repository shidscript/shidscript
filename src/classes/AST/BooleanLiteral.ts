import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'

export default class BooleanLiteral implements ASTBase {
    type = ASTType.BooleanLiteral

    constructor(public value: Uint8Array, public location: LocationPoints) {}
}
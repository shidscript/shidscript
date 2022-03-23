import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'

export default class StringLiteral implements ASTBase {
    type = ASTType.StringLiteral

    constructor(public value: string, public location: LocationPoints) {}
}
import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'

export default class Identifier implements ASTBase {
    type = ASTType.Identifier

    constructor(public name: string, public location: LocationPoints) {}
}
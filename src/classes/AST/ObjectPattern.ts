import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'
import ObjectProperty from './ObjectProperty'

export default class ObjectPattern implements ASTBase {
    type = ASTType.ObjectPattern

    constructor(public properties: ObjectProperty[], public location: LocationPoints) {}
}
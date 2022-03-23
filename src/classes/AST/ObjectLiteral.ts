import { ASTBase } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'
import ObjectProperty from './ObjectProperty'

export default class ObjectLiteral implements ASTBase {
    type = ASTType.ObjectLiteral

    constructor(public properties: ObjectProperty[], public location: LocationPoints) {}
}
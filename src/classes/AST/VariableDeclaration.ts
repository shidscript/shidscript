import { ASTBase } from '../../types/AST'
import { ASTType, ASTVariableDeclarationKind } from '../../constants/AST'
import LocationPoints from './LocationPoints'
import Variable from './Variable'

export default class VariableDeclaraction implements ASTBase {
    type = ASTType.VariableDeclaration

    constructor(public declarations: Variable[], public kind: ASTVariableDeclarationKind, public location: LocationPoints) {}
}
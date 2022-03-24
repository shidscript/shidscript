import { ASTBase, ASTExpression } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'
import Identifier from './Identifier'

export default class ObjectProperty<Computed extends boolean = boolean, Shorthand extends boolean = boolean> implements ASTBase {
    type = ASTType.ObjectProperty

    constructor(public key: Computed extends true ? ASTExpression.Any : Identifier, public value: Shorthand extends true ? Identifier | ASTExpression.Patterns : ASTExpression.Any, public location: LocationPoints) {}
}
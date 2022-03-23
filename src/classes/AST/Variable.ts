import { ASTBase, ASTExpression } from '../../types/AST'
import { ASTType } from '../../constants/AST'
import LocationPoints from './LocationPoints'
import Identifier from './Identifier'
import ObjectPattern from './ObjectPattern'
import ArrayPattern from './ArrayPattern'

export default class Variable implements ASTBase {
    type = ASTType.Variable

    constructor(public identifier: Identifier | ObjectPattern | ArrayPattern, public value: ASTExpression.Any, public location: LocationPoints) {}
}
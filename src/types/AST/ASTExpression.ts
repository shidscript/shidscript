import { StringLiteral, NumberLiteral, FixedPointNumberLiteral, BigNumberLiteral, BooleanLiteral, ObjectLiteral, ArrayLiteral, /* FunctionLiteral,*/ ObjectPattern, ArrayPattern } from '../../classes/AST'

export type Any = StringLiteral | NumberLiteral | FixedPointNumberLiteral | BigNumberLiteral | BooleanLiteral | ObjectLiteral | ArrayLiteral /*| FunctionLiteral*/
export type Numbers = NumberLiteral | FixedPointNumberLiteral | BooleanLiteral
export type Objects = ObjectLiteral | ArrayLiteral /*| FunctionLiteral*/
export type Patterns = ObjectPattern | ArrayPattern
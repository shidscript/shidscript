import { inspect } from 'node:util'
import interpreter from './src/interpreter'

console.log(inspect(interpreter(`
a = 10
b = 10`)
?.results, false, Infinity, true))
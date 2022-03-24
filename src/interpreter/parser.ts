import { Grammar, Parser} from 'nearley'
import grammar from './grammar'

export default new Parser(Grammar.fromCompiled(grammar))

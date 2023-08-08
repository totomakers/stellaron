import escape from 'pg-escape'
import handlebars from 'handlebars'
import { formatPath } from './stellaron/format-path'

handlebars.registerHelper('pg:escape', function (aString: string) {
  return escape.literal(aString)
})

handlebars.registerHelper('stellaron:path', function (aString: string) {
  return formatPath(aString)
})

import escape from 'pg-escape'
import handlebars from 'handlebars'

handlebars.registerHelper('pg:escape', function (aString: string) {
  return escape.literal(aString)
})

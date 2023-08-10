import escape from 'pg-escape'
import handlebars from 'handlebars'

handlebars.registerHelper('pg:escape', function (aString?: string) {
  return aString ? escape.literal(aString) : 'NULL'
})

const transformArray = (value: NestedArray) => {
  return `{${value
    .filter((v) => !Array.isArray(v))
    .map((v) => v)
    .join(',')}}`
}

type Atom = string | number
type NestedArray = (Atom | NestedArray)[]

const transformArrayOfArray = (value: NestedArray) => {
  const val = value
    .map((v) => {
      if (Array.isArray(v)) {
        return transformArray(v)
      }

      return v
    })
    .join(',')

  return `{${val}}`
}

handlebars.registerHelper('pg:array', function (value: NestedArray) {
  return transformArrayOfArray(value)
})

import escape from 'pg-escape'
import handlebars from 'handlebars'
import { formatPath } from './output/stellaron/format-path'
import { formatElement } from './output/stellaron/format-element'
import { formatSkillType } from './output/stellaron/format-skill-type'

handlebars.registerHelper('pg:escape', function (aString: string) {
  return escape.literal(aString)
})

handlebars.registerHelper('stellaron:path', function (aString: string) {
  return formatPath(aString)
})

handlebars.registerHelper('stellaron:element', function (aString: string) {
  return formatElement(aString)
})

handlebars.registerHelper('stellaron:skillType', function (aString: string) {
  return formatSkillType(aString)
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

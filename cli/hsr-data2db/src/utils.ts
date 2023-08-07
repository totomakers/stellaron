import fs from 'fs'
import { red } from 'kolorist'
import z from 'zod'

function makeSchemaOptional<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional()
}

export const readAndParse = <T extends z.ZodTypeAny>(
  path: string,
  schema: T
) => {
  const arg = makeSchemaOptional(schema)

  if (!fs.existsSync(path)) {
    throw new Error(red(`File not found ${path}`))
  }

  const file = fs.readFileSync(path)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const parsed = JSON.parse(file.toString())

  const result = arg.safeParse(parsed)

  if (!result.success) {
    console.log(red(`Fail parse and validate ${path};`))
    throw new Error(red(result.error.toString()))
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result.data
}

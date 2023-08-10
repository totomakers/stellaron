import { red } from 'kolorist'
import fs from 'node:fs'
import { z } from 'zod'

function makeSchemaOptional<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional()
}

function readFile(path: string) {
  if (!fs.existsSync(path)) {
    throw new Error(red(`File not found ${path}`))
  }

  return fs.readFileSync(path)
}

export const readAndParse = <T extends z.ZodTypeAny>(
  path: string,
  schema: T,
) => {
  const file = readFile(path)

  const arg = makeSchemaOptional(schema)

  const parsed = JSON.parse(file.toString()) as unknown
  const result = arg.safeParse(parsed)

  if (!result.success) {
    console.log(red(`Fail parse and validate ${path};`))
    throw new Error(red(result.error.toString()))
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return result.data
}

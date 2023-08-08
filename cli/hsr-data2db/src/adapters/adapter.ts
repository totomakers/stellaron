import fs from 'node:fs'
import { red } from 'kolorist'
import { z } from 'zod'

// ================
// Utils

// Used for transform zod schema for keeping infer
function makeSchemaOptional<T extends z.ZodTypeAny>(schema: T) {
  return schema.optional()
}

// Using for read file
function readFile(path: string) {
  if (!fs.existsSync(path)) {
    throw new Error(red(`File not found ${path}`))
  }

  return fs.readFileSync(path)
}

type AdapterConfig__ExtractSchema<
  T extends { schema: Zod.ZodTypeAny; path: string }
> = T extends { schema: infer U; path: string } ? U : never

//===================

// Adapter config
export type AdapterConfig = Record<
  string,
  {
    schema: Zod.ZodTypeAny
    path: string
  }
>

/**
 * Is not a reactHook but same pattern here
 * @param config pass me a config
 * @returns return validated file
 */
export const useAdapter = <T extends AdapterConfig>(config: T) => {
  type AdapterData = {
    [K in keyof T]: z.infer<AdapterConfig__ExtractSchema<T[K]>> | null
  }

  const readAndParse = <Schema extends Zod.ZodType>({
    schema,
    path,
  }: {
    schema: Schema
    path: string
  }) => {
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

  const load = () => {
    return Object.entries(config).reduce<Record<string, unknown>>(
      (acc, [key, { schema, path }]) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        const data = readAndParse({ schema, path })
        acc[key] = data
        return acc
      },
      {}
    ) as AdapterData
  }

  return { load }
}

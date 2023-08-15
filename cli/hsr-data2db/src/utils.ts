import fs from 'node:fs'
import prettier from 'prettier'
import path from 'node:path'

export const writeTsFile = async (dest: string, input: string) => {
  const formatted = await prettier.format(input, {
    parser: 'typescript',
    semi: false,
    singleQuote: true,
  })

  fs.writeFileSync(path.resolve(dest), formatted, {
    encoding: 'utf-8',
    flag: 'w',
  })
}

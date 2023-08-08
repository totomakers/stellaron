import hbs from 'handlebars'
import { parseCharacters } from '../../../adapters/StarRailRes/characters/characters'
import fs from 'node:fs'
import templateInput from './character.sql.hbs'
import { OUTPUT_DIR } from '../../../config'
import path from 'node:path'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

export const transformCharactersToSql = (
  data: ReturnType<typeof parseCharacters>
) => {
  const baseCharacters = Object.values(data.characters ?? []).filter(
    (c) => c.name !== '{NICKNAME}' && c.id !== '1213' // Not released it
  )

  const baseCharacterSkills = Object.values(data.characterSkills ?? [])
    .filter((cs) => cs.type !== 'MazeNormal')
    .map((cSkill) => ({ ...cSkill, characterId: cSkill.id.substring(0, 4) }))

  const characters = baseCharacters.map((c) => ({
    ...c,
    skills: baseCharacterSkills.filter((cs) => cs.characterId === c.id),
  }))

  const compiled = template({
    characters: characters,
  })

  const outputDir = path.join(OUTPUT_DIR)
  fs.mkdirSync(outputDir, {
    recursive: true,
  })

  fs.writeFileSync(path.join(outputDir, `character.sql`), compiled, {
    flag: 'w',
    encoding: 'utf-8',
  })
}

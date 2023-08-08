import { degitStarRailRes } from './adapters/StarRailRes/StarRailRes.fetch'
import { parseCharacters } from './adapters/StarRailRes/characters/characters'
import { parseItems } from './adapters/StarRailRes/items/items'
import { parseLightCones } from './adapters/StarRailRes/light-cones/light-cones'
import { parseRelics } from './adapters/StarRailRes/relics/relics'
import { transformCharactersToSql } from './output/stellaron/characters/characters'
import { transformLightConesToSql } from './output/stellaron/light-cones/light-cones'

export const jobs = ['light-cones', 'characters', 'items', 'relics'] as const
export type Job = (typeof jobs)[number]

export const doJobs = async (actions: Job[]) => {
  if (!Array.isArray(actions) || actions.length === 0) {
    return
  }

  await degitStarRailRes()

  if (actions.includes('light-cones')) {
    const lightCones = parseLightCones()
    transformLightConesToSql(lightCones)
  }

  if (actions.includes('characters')) {
    const characters = parseCharacters()
    transformCharactersToSql(characters)
  }

  if (actions.includes('items')) {
    parseItems()
  }

  if (actions.includes('relics')) {
    parseRelics()
  }
}

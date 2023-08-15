import { z } from 'zod'
import { readAndParse } from './loadData'
import { join } from 'node:path'
import { STAR_RAIL_DATA_DIR } from '../../adapters/StarRailData/config'

const basePath = join(STAR_RAIL_DATA_DIR, '/TextMap')

const loadData = () => {
  return {
    en: readAndParse(
      join(basePath, 'TextMapEN.json'),
      z.record(z.string(), z.string()),
    ),
  }
}

export const useText = () => {
  const data = loadData()

  const getText = (
    hash: { Hash: number },
    locale: keyof typeof data = 'en',
  ) => {
    const value = data?.[locale]?.[hash.Hash]

    if (!value) {
      // console.warn(yellow(`String not found with the hash ${hash.Hash}`))
      return null
    }

    return value
  }

  return { data, getText } as const
}

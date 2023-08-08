import degit from 'degit'
import fs from 'fs'
import { GITHUB_SOURCE, STAR_RAIL_RES_DIR } from './StarRailRes.config'

export const degitStarRailRes = async () => {
  fs.rmSync(STAR_RAIL_RES_DIR, { recursive: true, force: true }) // Clean

  const emitter = degit(GITHUB_SOURCE, {
    cache: false,
    force: true,
    verbose: true,
  })

  emitter.on('info', (info) => {
    console.log(info.message)
  })

  return emitter.clone(STAR_RAIL_RES_DIR)
}

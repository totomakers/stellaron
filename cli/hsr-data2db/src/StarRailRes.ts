import degit from 'degit'
import fs from 'fs'

export const GITHUB_SOURCE = 'https://github.com/Mar-7th/StarRailRes.git'
export const STAR_RAIL_RES_DIR = './temp/starRailRes'

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

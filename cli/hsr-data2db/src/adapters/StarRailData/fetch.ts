import degit from 'degit'
import fs from 'fs'
import { GITHUB_SOURCE, DEST_DIR } from './config'

export const degitStarRailData = async () => {
  fs.rmSync(DEST_DIR, { recursive: true, force: true }) // Clean

  const emitter = degit(GITHUB_SOURCE, {
    cache: false,
    force: true,
    verbose: true,
  })

  emitter.on('info', (info) => {
    console.log(info.message)
  })

  return emitter.clone(DEST_DIR)
}

import hbs from 'handlebars'
import { parseLightCones } from '../../../adapters/StarRailRes/light-cones/light-cones'
import fs from 'node:fs'
import templateInput from './light-cone.sql.hbs'
import { OUTPUT_DIR } from '../../../config'
import path from 'node:path'

const template = hbs.compile(templateInput, {
  noEscape: true,
})

export const transformLightConesToSql = (
  data: ReturnType<typeof parseLightCones>
) => {
  const compiled = template({
    lightCones: Object.values(data.lightCones ?? []),
  })

  const outputDir = path.join(OUTPUT_DIR)
  fs.mkdirSync(outputDir, {
    recursive: true,
  })

  fs.writeFileSync(path.join(outputDir, `light-cone.sql`), compiled, {
    flag: 'w',
    encoding: 'utf-8',
  })
}

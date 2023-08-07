import { z } from 'zod'

export const relicsSchema = z.object({
  id: z.string(),
  set_id: z.string(),
  name: z.string(),
  rarity: z.number(),
  type: z.string(),
  max_level: z.number(),
  main_affix_id: z.string(),
  sub_affix_id: z.string(),
  icon: z.string(),
})

export const relicMainAffixesSchema = z.object({
  id: z.string(),
  affixes: z.record(
    z.string(),
    z.object({
      affix_id: z.string(),
      property: z.string(),
      base: z.number(),
      step: z.number(),
    })
  ),
})

export const relicSubAffixesSchema = z.object({
  id: z.string(),
  affixes: z.record(
    z.string(),
    z.object({
      affix_id: z.string(),
      property: z.string(),
      base: z.number(),
      step: z.number(),
      step_num: z.number(),
    })
  ),
})

export const relicSetsSchema = z.object({
  id: z.string(),
  name: z.string(),
  desc: z.array(z.string()),
  properties: z.array(
    z.array(z.object({ type: z.string(), value: z.number() }))
  ),
})

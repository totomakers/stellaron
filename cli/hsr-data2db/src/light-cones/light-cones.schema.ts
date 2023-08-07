import z from 'zod'

// =============
//  light_cones.json
export const lightConeSchema = z.object({
  id: z.string(),
  name: z.string(),
  rarity: z.number().min(3).max(5),
  path: z.string(),
  desc: z.string(),
  icon: z.string(),
  preview: z.string(),
  portrait: z.string(),
})

// ======================
// light_cones_promotions

// Each stat representation
const lightConePromotionValueSchema = z.object({
  base: z.number(),
  step: z.number(),
})

// Each stat of the cone
const lightConePromotionValuesSchema = z.object({
  hp: lightConePromotionValueSchema,
  atk: lightConePromotionValueSchema,
  def: lightConePromotionValueSchema,
})

export const lightConePromotionsSchema = z.object({
  id: z.string(),
  values: z.array(lightConePromotionValuesSchema), // Each entry is for superposition
})

// ======================
// light_cones_ranks.json
export const lightConeRankSchema = z.object({
  id: z.string(),
  skill: z.string(),
  desc: z.string(),
  params: z.array(z.array(z.number())),
  properties: z.array(
    z.array(
      z.object({
        type: z.string(),
        value: z.number(),
      })
    )
  ),
})

import { z } from 'zod'

export const characterSchema = z.object({
  id: z.string(),
  name: z.string(),
  tag: z.string(),
  rarity: z.number().min(4).max(5),
  path: z.string(),
  element: z.string(),
  max_sp: z.number(),
  ranks: z.array(z.string()),
  skills: z.array(z.string()),
  skill_trees: z.array(z.string()),
  icon: z.string(),
  preview: z.string(),
  portrait: z.string(),
})

export const characterSkillSchema = z.object({
  id: z.string(),
  name: z.string(),
  max_level: z.number(),
  element: z.string(),
  type: z.string(),
  type_text: z.string(),
  effect: z.string(),
  effect_text: z.string(),
  simple_desc: z.string(),
  params: z.array(z.array(z.number())),
  icon: z.string(),
})

export const characterRankSchema = z.object({
  id: z.string(),
  name: z.string(),
  desc: z.string(),
  rank: z.number(),
  icon: z.string(),
  level_up_skills: z.array(z.object({ id: z.string(), num: z.number() })),
})

const characterPromotionValueSchema = z.object({
  base: z.number(),
  step: z.number(),
})

export const characterPromotionSchema = z.object({
  id: z.string(),
  values: z.array(
    z.object({
      hp: characterPromotionValueSchema,
      atk: characterPromotionValueSchema,
      def: characterPromotionValueSchema,
      spd: characterPromotionValueSchema,
      taunt: characterPromotionValueSchema,
      crit_rate: characterPromotionValueSchema,
      crit_dmg: characterPromotionValueSchema,
    })
  ),
})

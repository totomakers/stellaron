import * as z from 'zod'

export const MazeBuffRaritySchema = z.object({})
export type MazeBuffRarity = z.infer<typeof MazeBuffRaritySchema>

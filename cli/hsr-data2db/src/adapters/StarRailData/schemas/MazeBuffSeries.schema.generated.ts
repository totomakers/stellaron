import * as z from 'zod'

export const MazeBuffSeriesSchema = z.object({})
export type MazeBuffSeries = z.infer<typeof MazeBuffSeriesSchema>

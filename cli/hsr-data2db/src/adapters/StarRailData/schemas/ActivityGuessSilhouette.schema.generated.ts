import * as z from 'zod'

export const ActivityGuessSilhouetteSchema = z.object({})
export type ActivityGuessSilhouette = z.infer<
  typeof ActivityGuessSilhouetteSchema
>

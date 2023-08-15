import * as z from 'zod'

export const TrainPassengerConfigValueSchema = z.object({
  PassengerID: z.number(),
  BehaviorList: z.array(z.number()),
})
export type TrainPassengerConfigValue = z.infer<
  typeof TrainPassengerConfigValueSchema
>

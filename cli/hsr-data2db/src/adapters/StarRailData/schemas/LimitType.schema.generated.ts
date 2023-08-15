import * as z from 'zod'

export const LimitTypeDeDescSchema = z.object({
  Hash: z.number(),
})
export type LimitTypeDeDesc = z.infer<typeof LimitTypeDeDescSchema>

export const EventMissionSchema = z.object({
  LimitType: z.string(),
  LimitTypeDesc: LimitTypeDeDescSchema,
  LimitTypeDetailDesc: LimitTypeDeDescSchema,
})
export type EventMission = z.infer<typeof EventMissionSchema>

export const LimitTypeSchema = z.object({
  Level: EventMissionSchema,
  MainMission: EventMissionSchema,
  EventMission: EventMissionSchema,
  WorldLevel: EventMissionSchema,
  PreGoods: EventMissionSchema,
  HasNoRefreshGoods: EventMissionSchema,
})
export type LimitType = z.infer<typeof LimitTypeSchema>

import * as z from 'zod'

export const BoardShowTypeSchema = z.enum(['Orthographic'])
export type BoardShowType = z.infer<typeof BoardShowTypeSchema>

export const DamageTypeListSchema = z.enum(['Ice'])
export type DamageTypeList = z.infer<typeof DamageTypeListSchema>

export const ColorSchema = z.enum([
  '#b74a4a',
  '#bad4fe',
  '',
  '#ffc795',
  '#4b4b4b',
])
export type Color = z.infer<typeof ColorSchema>

export const PropStateListSchema = z.enum([
  'BridgeState1',
  'BridgeState2',
  'BridgeState3',
  'BridgeState4',
  'CheckPointDisable',
  'CheckPointEnable',
  'ChestClosed',
  'ChestLocked',
  'ChestUsed',
  'Closed',
  'CustomState01',
  'CustomState02',
  'CustomState03',
  'CustomState04',
  'CustomState05',
  'CustomState06',
  'Elevator1',
  'Elevator2',
  'Elevator3',
  'EventClose',
  'EventOpen',
  'Hidden',
  'Locked',
  'Open',
  'TeleportGate0',
  'TeleportGate1',
  'TeleportGate2',
  'TeleportGate3',
  'TriggerDisable',
  'TriggerEnable',
  'WaitActive',
])
export type PropStateList = z.infer<typeof PropStateListSchema>

export const PropIconPathSchema = z.enum([
  'SpriteOutput/TalkIcon/BoxIcon.png',
  'SpriteOutput/TalkIcon/ChatIcon.png',
  'SpriteOutput/TalkIcon/CheckIcon.png',
  'SpriteOutput/TalkIcon/PickUpIcon.png',
  'SpriteOutput/TalkIcon/TriggerProp.png',
])
export type PropIconPath = z.infer<typeof PropIconPathSchema>

export const PropTypeSchema = z.enum([
  'PROP_COCOON',
  'PROP_DESTRUCT',
  'PROP_ELEMENT',
  'PROP_ELEVATOR',
  'PROP_LIGHT',
  'PROP_MAZE_DECAL',
  'PROP_MAZE_PUZZLE',
  'PROP_NO_REWARD_DESTRUCT',
  'PROP_ORDINARY',
  'PROP_PERSPECTIVE_WALL',
  'PROP_PLATFORM',
  'PROP_RELIC',
  'PROP_ROGUE_CHEST',
  'PROP_ROGUE_DOOR',
  'PROP_ROGUE_OBJECT',
  'PROP_ROGUE_REWARD_OBJECT',
  'PROP_SPRING',
  'PROP_SUMMON',
  'PROP_TREASURE_CHEST',
])
export type PropType = z.infer<typeof PropTypeSchema>

export const PropTypeIconPathSchema = z.enum([
  '',
  'SpriteOutput/MapPics/NaviIcons/IconPointBoss.png',
])
export type PropTypeIconPath = z.infer<typeof PropTypeIconPathSchema>

export const PropSchema = z.object({
  Hash: z.number(),
})
export type Prop = z.infer<typeof PropSchema>

export const MiniMapStateIconSchema = z.object({
  State: z.union([PropStateListSchema, z.null()]).optional(),
  IconID: z.number(),
  Color: ColorSchema,
})
export type MiniMapStateIcon = z.infer<typeof MiniMapStateIconSchema>

export const MazePropValueSchema = z.object({
  ID: z.number(),
  PropType: PropTypeSchema,
  PropName: PropSchema,
  PropTitle: PropSchema,
  PropTypeIconPath: PropTypeIconPathSchema,
  PropIconPath: PropIconPathSchema,
  BoardShowList: z.array(z.number()),
  PrefabPath: z.string(),
  ConfigEntityPath: z.string(),
  DamageTypeList: z.array(DamageTypeListSchema),
  MiniMapStateIcons: z.array(MiniMapStateIconSchema),
  JsonPath: z.string(),
  PropStateList: z.array(PropStateListSchema),
  PerformanceType: z.string(),
  BoardShowType: z.union([BoardShowTypeSchema, z.null()]).optional(),
  MiniMapIconType: z.union([z.number(), z.null()]).optional(),
  HasRendererComponent: z.union([z.boolean(), z.null()]).optional(),
  LodPriority: z.union([z.number(), z.null()]).optional(),
  IsMapContent: z.union([z.boolean(), z.null()]).optional(),
})
export type MazePropValue = z.infer<typeof MazePropValueSchema>

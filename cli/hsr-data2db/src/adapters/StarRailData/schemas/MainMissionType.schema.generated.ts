import * as z from 'zod'

export const TypeNameSchema = z.object({
  Hash: z.number(),
})
export type TypeName = z.infer<typeof TypeNameSchema>

export const BranchSchema = z.object({
  Type: z.string(),
  TypeName: TypeNameSchema,
  TypePriority: z.number(),
  TypeIcon: z.string(),
  TypeIconMini: z.string(),
  MenuItemIcon: z.string(),
  TypeColor: z.string(),
  TypeChapterColor: z.string(),
  WaypointIconType: z.union([z.number(), z.null()]).optional(),
})
export type Branch = z.infer<typeof BranchSchema>

export const MainMissionTypeSchema = z.object({
  None: BranchSchema,
  Main: BranchSchema,
  Companion: BranchSchema,
  Daily: BranchSchema,
  Branch: BranchSchema,
})
export type MainMissionType = z.infer<typeof MainMissionTypeSchema>

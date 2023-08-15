import * as z from "zod";

export const RogueRoomTypeTextmapIdSchema = z.object({
  Hash: z.number(),
});
export type RogueRoomTypeTextmapId = z.infer<
  typeof RogueRoomTypeTextmapIdSchema
>;

export const RogueRoomTypeValueSchema = z.object({
  RogueRoomType: z.number(),
  RogueRoomTypeTextmapID: RogueRoomTypeTextmapIdSchema,
  RoomTypeDescTextmapID: RogueRoomTypeTextmapIdSchema,
  RoomTypeDescTextmapID2: RogueRoomTypeTextmapIdSchema,
  RogueRoomTypeIcon: z.string(),
  MapShowType: z.boolean(),
  RoomIconEffect: z.string(),
  IsSuper: z.union([z.boolean(), z.null()]).optional(),
});
export type RogueRoomTypeValue = z.infer<typeof RogueRoomTypeValueSchema>;

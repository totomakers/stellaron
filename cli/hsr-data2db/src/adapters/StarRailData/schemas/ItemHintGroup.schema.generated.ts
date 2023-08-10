import * as z from "zod";

export const ChatBubbleSchema = z.object({
  HFGKLIHLPFJ: z.string(),
  LGBBGJBLPNG: z.string(),
});
export type ChatBubble = z.infer<typeof ChatBubbleSchema>;

export const ItemHintGroupSchema = z.object({
  Mission: ChatBubbleSchema,
  Equipment: ChatBubbleSchema,
  Relic: ChatBubbleSchema,
  HeadIcon: ChatBubbleSchema,
  MusicAlbum: ChatBubbleSchema,
  ChatBubble: ChatBubbleSchema,
});
export type ItemHintGroup = z.infer<typeof ItemHintGroupSchema>;

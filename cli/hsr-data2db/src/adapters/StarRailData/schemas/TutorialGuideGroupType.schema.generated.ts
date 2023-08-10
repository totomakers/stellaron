import * as z from "zod";

export const MessageTitleSchema = z.object({
  Hash: z.number(),
});
export type MessageTitle = z.infer<typeof MessageTitleSchema>;

export const TutorialGuideGroupTypeValueSchema = z.object({
  TutorialType: z.number(),
  MessageIconPath: z.string(),
  MessageTitle: MessageTitleSchema,
});
export type TutorialGuideGroupTypeValue = z.infer<
  typeof TutorialGuideGroupTypeValueSchema
>;

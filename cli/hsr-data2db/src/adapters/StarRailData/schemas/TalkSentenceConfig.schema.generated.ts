import * as z from "zod";

export const TalkSentenceTextSchema = z.object({
  Hash: z.number(),
});
export type TalkSentenceText = z.infer<typeof TalkSentenceTextSchema>;

export const TalkSentenceConfigValueSchema = z.object({
  TalkSentenceID: z.number(),
  TextmapTalkSentenceName: TalkSentenceTextSchema,
  TalkSentenceText: TalkSentenceTextSchema,
  VoiceID: z.union([z.number(), z.null()]).optional(),
});
export type TalkSentenceConfigValue = z.infer<
  typeof TalkSentenceConfigValueSchema
>;

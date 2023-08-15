import * as z from "zod";

export const FriendChatSchema = z.object({
  LittleWheelFuncID: z.string(),
  IconPath: z.string(),
});
export type FriendChat = z.infer<typeof FriendChatSchema>;

export const LittleWheelFuncConfigSchema = z.object({
  Message: FriendChatSchema,
  TeamBuff: FriendChatSchema,
  RogueBuff: FriendChatSchema,
  Tutorial: FriendChatSchema,
  FriendChat: FriendChatSchema,
});
export type LittleWheelFuncConfig = z.infer<typeof LittleWheelFuncConfigSchema>;

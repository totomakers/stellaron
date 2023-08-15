import * as z from "zod";

export const GameplayTutoGuideSchema = z.object({});
export type GameplayTutoGuide = z.infer<typeof GameplayTutoGuideSchema>;

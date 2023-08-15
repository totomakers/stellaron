import * as z from "zod";

export const BeikjmmmoeiSchema = z.enum(["Eye_WinkA", "Eye_WinkB"]);
export type Beikjmmmoei = z.infer<typeof BeikjmmmoeiSchema>;

export const ArtNpcFaceValueSchema = z.object({
  BDCIKEODEFA: z.string(),
  KIDMBNFJPAD: z.number(),
  HHKJHIHPNBL: z.number(),
  AHCBIBMGKGH: z.number(),
  JLIIFMAAOIA: z.number(),
  FDDJLHMLDMB: z.array(BeikjmmmoeiSchema),
  BEIKJMMMOEI: z.array(BeikjmmmoeiSchema),
  LOJAKIOCLHK: z.array(z.number()),
  HJCLKGADJOP: z.string(),
  OJHKCBFFCBJ: z.union([z.number(), z.null()]).optional(),
});
export type ArtNpcFaceValue = z.infer<typeof ArtNpcFaceValueSchema>;

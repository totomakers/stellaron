import * as z from 'zod'

export const AnswerSchema = z.object({
  Hash: z.number(),
})
export type Answer = z.infer<typeof AnswerSchema>

export const ActivityQuestionValueSchema = z.object({
  QuestionID: z.number(),
  MonsterID: z.number(),
  Name: AnswerSchema,
  Question: AnswerSchema,
  Answer: AnswerSchema,
  ImgPath: z.string(),
})
export type ActivityQuestionValue = z.infer<typeof ActivityQuestionValueSchema>

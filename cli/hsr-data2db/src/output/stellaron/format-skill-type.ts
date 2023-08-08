const mapRecord = new Map([
  ['Normal', 'basic-atk'],
  ['Ultra', 'ultimate'],
  ['Maze', 'technique'],
  ['Talent', 'talent'],
  ['BPSkill', 'skill'],
])

export const formatSkillType = (value: string) => {
  const existingMap = mapRecord.has(value)

  if (!existingMap) {
    throw new Error(`Missing skillType map for (${value})`)
  }

  return mapRecord.get(value)
}

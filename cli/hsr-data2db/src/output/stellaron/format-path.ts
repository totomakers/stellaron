const mapRecord = new Map([
  ['Warrior', 'destruction'],
  ['Rogue', 'hunt'],
  ['Mage', 'mage'],
  ['Shaman', 'harmony'],
  ['Warlock', 'nihility'],
  ['Knight', 'preservation'],
  ['Priest', 'abundance'],
  ['Unknown', 'unknown'],
])

export const formatPath = (value: string) => {
  const existingMap = mapRecord.has(value)

  if (!existingMap) {
    throw new Error(`Missing path mapping for (${value})`)
  }

  return mapRecord.get(value)
}

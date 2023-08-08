const mapRecord = new Map([
  ['Physical', 'physical'],
  ['Fire', 'fire'],
  ['Ice', 'ice'],
  ['Thunder', 'thunder'],
  ['Wind', 'wind'],
  ['Quantum', 'quantum'],
  ['Imaginary', 'imaginary'],
  ['Lightning', 'lightning'],
])

export const formatElement = (value: string) => {
  if (value === '') return null

  const existingMap = mapRecord.has(value)

  if (!existingMap) {
    throw new Error(`Missing element map for (${value})`)
  }

  return mapRecord.get(value)
}

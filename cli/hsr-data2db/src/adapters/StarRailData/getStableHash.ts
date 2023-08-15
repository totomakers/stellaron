// What you should except
// SkillPointName_1001101 = 2078331665
// 371857150 = '' (empty string)
export const getStableHash = (str: string) => {
  let hash1 = 5381n
  let hash2 = 5381n

  for (let i = 0; i < str.length; i += 2) {
    hash1 = ((hash1 << 5n) + hash1) ^ BigInt(str.charCodeAt(i))

    if (i == str.length - 1) break

    hash2 = ((hash2 << 5n) + hash2) ^ BigInt(str.charCodeAt(i + 1))
  }

  return Number(BigInt.asIntN(32, hash1 + hash2 * 1566083941n) | 0n)
}

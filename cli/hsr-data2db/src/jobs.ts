import { degitStarRailData } from './adapters/StarRailData/fetch'

export const jobs = ['light-cones', 'characters', 'items', 'relics'] as const
export type Job = (typeof jobs)[number]

export const doJobs = async (actions: Job[]) => {
  if (!Array.isArray(actions) || actions.length === 0) {
    return
  }

  await degitStarRailData()
}

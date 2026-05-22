import type { Methodology } from '../types'
import { csAi } from './cs-ai'
import { educational } from './educational'
import { health } from './health'

/** All methodologies, in catalogue order. Add a new guide by importing it here. */
export const METHODOLOGIES: Methodology[] = [csAi, educational, health]

export function getMethodology(id: string | undefined): Methodology | undefined {
  return METHODOLOGIES.find((m) => m.id === id)
}

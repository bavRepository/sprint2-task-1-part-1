import type { CounterProps } from './counter-reducer.ts'
import type { RootState } from '../app/store.ts'

export const counterSelector = (state: RootState): CounterProps => state.counter

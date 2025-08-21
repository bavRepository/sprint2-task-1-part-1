

////////////////  CONTENT 18+  //////////////////////
/////

import type { CounterProps } from '../../model/counter-reducer.ts'

// [Controller logic]
export const getStateOfSetBtn = (startValue: CounterProps['startValue'], endValue: CounterProps['endValue']) => {
  return startValue < 0 || endValue < 0 || startValue >= endValue
}

// [Counter logic]
export const getCounterLogicObj = ({ count, startValue, endValue, isEdit }: CounterProps) => {
  const message = { ok: 'to start click Set', isError: 'invalid value!' }

  // isError & Restriction state
  const isError = startValue >= endValue || startValue < 0 || endValue < 0
  const isLimit = count === endValue

  const content = isError ? message.isError : isEdit ? message.ok : count
  return { isError, isLimit, content }
}

import { createAction, createReducer } from '@reduxjs/toolkit'
import { getCounterFromLS } from '../common/localStorage/localStorage.ts'

export type CounterProps = {
  count: number
  startValue: number
  endValue: number
  isEdit: boolean
}

const initialObjState: CounterProps = {
  count: 0,
  startValue: 0,
  endValue: 5,
  isEdit: false,
}

const initialCounterData = getCounterFromLS(initialObjState)

export const setStartValueAC = createAction<{ startValue: number }>('counter/setCounterValues')
export const changeStartEndValuesAC = createAction<{ inputId: 'startValue' | 'endValue'; newCount: number }>(
  'counter/changeStartEndValues',
)
export const setNewIncrementValueAC = createAction('counter/setNewIncrementValue')
export const resetCountToDefaultAC = createAction('counter/resetCountToDefault')

export const counterReducer = createReducer(initialCounterData, (builder) => {
  builder
    .addCase(setStartValueAC, (state, action) => {
      state.count = action.payload.startValue
      state.isEdit = false
    })
    .addCase(changeStartEndValuesAC, (state, action) => {
      state[action.payload.inputId] = action.payload.newCount
      state.isEdit = true
    })
    .addCase(setNewIncrementValueAC, (state) => {
      state.count = state.count + 1
    })
    .addCase(resetCountToDefaultAC, (state) => {
      state.count = state.startValue
    })
})

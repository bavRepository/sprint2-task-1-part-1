import { S } from './Counter_Styles.ts'
import { Button } from '../common/button/Button.ts'
import { useAppDispatch } from '../../common/hooks/useAppDispatch.ts'
import { useAppSelector } from '../../common/hooks/useAppSelector.ts'
import { counterSelector } from '../../model/counter-selector.ts'
import { resetCountToDefaultAC, setNewIncrementValueAC } from '../../model/counter-reducer.ts'
import { getCounterLogicObj } from '../../common/hooks/useCounterHandler.tsx'
import { updateLSCounterData } from '../../common/localStorage/localStorage.ts'
import { useEffect } from 'react'

export const Counter = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(counterSelector)

  const { count, startValue, isEdit } = counter

  useEffect(() => {
    updateLSCounterData(counter)
  }, [count])

  const setNewIncrementValue = () => {
    dispatch(setNewIncrementValueAC())
    updateLSCounterData(counter)
  }

  const resetCountToDefault = () => {
    dispatch(resetCountToDefaultAC())
    updateLSCounterData(counter)
  }

  //Logic
  const { isError, isLimit, content } = getCounterLogicObj(counter)

  return (
    <S.ContentWrapper>
      <S.Display>
        <S.Count $isLimit={isLimit} $isRegularInfo={isEdit && !isError} $isisError={isError}>
          {content}
        </S.Count>
      </S.Display>
      <S.ControlMenuWrapper>
        <Button key={'inc'} disabled={isEdit || isLimit} onClick={setNewIncrementValue}>
          Inc
        </Button>
        <Button key={'reset'} disabled={isEdit || startValue === count} onClick={resetCountToDefault}>
          Reset
        </Button>
      </S.ControlMenuWrapper>
    </S.ContentWrapper>
  )
}

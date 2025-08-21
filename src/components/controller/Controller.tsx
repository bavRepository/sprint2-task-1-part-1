import { S } from '../counter/Counter_Styles.ts'
import { Button } from '../common/button/Button.ts'
import { type ChangeEvent } from 'react'
import { useAppDispatch } from '../../common/hooks/useAppDispatch.ts'
import { useAppSelector } from '../../common/hooks/useAppSelector.ts'
import { counterSelector } from '../../model/counter-selector.ts'
import { changeStartEndValuesAC, setStartValueAC } from '../../model/counter-reducer.ts'
import { getStateOfSetBtn } from '../../common/utils/renderLogicComponents.tsx'
import { updateLSCounterData } from '../../common/localStorage/localStorage.ts'

type changeValuesHandlerType = (e: ChangeEvent<HTMLInputElement>) => void

export const Controller = () => {
  const dispatch = useAppDispatch()
  const counter = useAppSelector(counterSelector)

  const { startValue, endValue } = counter

  const setUserValuesOnBtn = () => {
    dispatch(setStartValueAC({ startValue }))
    updateLSCounterData({ ...counter, startValue, endValue, isEdit: false })
  }

  const changeValuesHandler: changeValuesHandlerType = (e) => {
    const inputId = e.currentTarget.dataset.inpname as 'startValue' | 'endValue',
      newCount = Number(e.currentTarget.value)
    dispatch(changeStartEndValuesAC({ inputId, newCount }))
  }

  // Logic
  const setBtnState = getStateOfSetBtn(startValue, endValue)

  return (
    <S.ContentWrapper>
      <S.Display>
        <S.InputBlockWrapper key={'endValue'}>
          <label htmlFor={'endValue'}>Max value</label>
          <input type={'number'} data-inpname={'endValue'} onChange={changeValuesHandler} value={endValue} />
        </S.InputBlockWrapper>
        <S.InputBlockWrapper key={'startValue'}>
          <label htmlFor={'startValue'}>Start value</label>
          <input type={'number'} data-inpname={'startValue'} onChange={changeValuesHandler} value={startValue} />
        </S.InputBlockWrapper>
      </S.Display>
      <S.ControlMenuWrapper>
        <Button disabled={setBtnState} onClick={setUserValuesOnBtn}>
          Set
        </Button>
      </S.ControlMenuWrapper>
    </S.ContentWrapper>
  )
}

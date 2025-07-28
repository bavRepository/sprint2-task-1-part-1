import {type ChangeEvent, useState} from "react"

export type changingStartOrEndValueType = (e: ChangeEvent<HTMLInputElement>) => void;

export type counterProps = {
    count: number;
    startValue: number;
    endValue: number;
    isEdit: boolean;
}

export const useCounterHandler = () => {

    const [counter, setCounter] = useState<counterProps>({
        count: 0,
        startValue: 0,
        endValue: 5,
        isEdit: false,
    })

    const {count, startValue, endValue, isEdit} = counter


    ////////////////  Controller handle  //////////////////////
    /////

    const setStartAndEndValue = () => {
        setCounter({
            ...counter, count: counter.startValue,isEdit: false,
        })
    }

    const changingStartOrEndValue: changingStartOrEndValueType = (e) => {
        setCounter({...counter, [e.currentTarget.id]: Number(e.currentTarget.value), isEdit: true,})
    }

    ////////////////  Counter handle  //////////////////////
    /////

    const setNewIncrementValue = () => {
        setCounter((prev) => {
            return {...counter, count: prev?.count + 1}
        })
    }

    const resetCountToDefault = () => {
        setCounter({...counter, count: counter.startValue});
    }

    ////////////////  CONTENT 18+  //////////////////////
    /////

    // [Controller logic]
    const isSetBtnDisabled = (startValue < 0 || endValue < 0) || (startValue >= endValue)


    // [Counter logic]
    // If Our text ok or isError inside the Counter
    const message = {ok: 'to start click Set', isError: 'invalid value!'}

    // isError & Restriction state
    const isError = (startValue >= endValue) || (startValue < 0 || endValue < 0);
    const isLimit = count === endValue

    const content = isError ? message.isError : isEdit ? message.ok : count;

    return { setStartAndEndValue, changingStartOrEndValue, setNewIncrementValue, resetCountToDefault, isSetBtnDisabled, message, isError, isLimit, content, startValue, count, isEdit, endValue }
}

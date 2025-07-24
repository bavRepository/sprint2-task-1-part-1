import {type ChangeEvent, useState} from "react"

export type onInputChangeHandlerType = (e: ChangeEvent<HTMLInputElement>) => void;

export type counterProps = {
    count: number;
    startValue: number;
    endValue: number;
    isEdit: boolean;
}

export const useCounterStorage = () => {

    const [counter, setCounter] = useState<counterProps>({
        count: 0,
        startValue: 0,
        endValue: 5,
        isEdit: false,
    })

    const {count, startValue, endValue, isEdit} = counter


    ////////////////  Controller handle  //////////////////////
    /////

    const onSetBtnHandler = () => {
        setCounter({
            ...counter, count: counter.startValue,
            isEdit: false,
        })
    }

    const onInputChangeHandler: onInputChangeHandlerType = (e) => {
        const target = e.currentTarget
        setCounter({...counter, [target.id]: Number(target.value), isEdit: true,})
    }

    ////////////////  Counter handle  //////////////////////
    /////

    const onIncBtnHandler = () => {
        setCounter({...counter, count: count + 1})
    }

    const onResetBtnHandler = () => {
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

    return { onSetBtnHandler, onInputChangeHandler, onIncBtnHandler, onResetBtnHandler, isSetBtnDisabled, message, isError, isLimit, content, startValue, count, isEdit, endValue }
}

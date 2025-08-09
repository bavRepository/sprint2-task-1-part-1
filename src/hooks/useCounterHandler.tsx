import {type ChangeEvent, useEffect, useState} from "react"

type counterProps = {
    count: number
    startValue: number
    endValue: number
    isEdit: boolean
}

const updateLSCounterData = (key:string, dataCounterObj:counterProps) => {
    localStorage.setItem(key, JSON.stringify(dataCounterObj))
}

export type changingStartOrEndValueType = (e: ChangeEvent<HTMLInputElement>) => void;

const LOCAL_STORAGE_KEY = 'counter'


const getCounterFromLS = (initialData: counterProps): counterProps => {
    let initialCounterData: counterProps = initialData
    const storedCounter = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (storedCounter) {
        const parsedCounter: counterProps = JSON.parse(storedCounter)
        initialCounterData = { ...parsedCounter }
    }else {
        updateLSCounterData(LOCAL_STORAGE_KEY, initialData)
    }
    return initialCounterData
}

const initialObj: counterProps = {
    count: 0,
    startValue: 0,
    endValue: 5,
    isEdit: false,
}
const initialCounterData = getCounterFromLS(initialObj)

export const useCounterHandler = () => {
    const [counter, setCounter] = useState<counterProps>(initialCounterData)

    useEffect(() => {
        updateLSCounterData(LOCAL_STORAGE_KEY, counter)
    }, [counter])

    const { count, startValue, endValue, isEdit } = counter



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

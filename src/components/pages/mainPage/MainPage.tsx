import {type ChangeEvent, useState} from 'react';
import {MainPageStyled} from './MainPage_styles.ts';
import {Counter} from "../../counter/Counter.tsx";
import {Controller} from "../../controller/Controller.tsx";

export type counterProps = {
    count: number;
    startValue: number;
    endValue: number;
    isEdit: boolean;
}
export type onInputChangeHandlerType = (e: ChangeEvent<HTMLInputElement>) => void;
export const MainPage = () => {

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
    // Our text if ok or isError inside the Counter
    const message = {ok: 'to start click Set', isError: 'invalid value!'}

    // isError & Restriction state
    const isError = (startValue >= endValue) || (startValue < 0 || endValue < 0);
    const isLimit = count === endValue

    const content = isError ? message.isError : isEdit ? message.ok : count;

    ////////////////  COUNTER & CONTROLLER PROPS  //////////////////////
    /////

    const ControllerPropsObj = {
        onInputChangeHandler,
        onSetBtnHandler,
        isSetBtnDisabled,
        startValue,
        endValue
    }

    const CounterPropsObj = {
        endValue,
        startValue,
        count,
        isEdit,
        isError,
        isLimit,
        content,
        onIncBtnHandler,
        onResetBtnHandler
    }

    return (
        <MainPageStyled>
            <Controller {...ControllerPropsObj}/>
            <Counter {...CounterPropsObj}/>
        </MainPageStyled>
    );
};


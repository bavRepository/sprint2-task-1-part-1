import {MainPageStyled} from './MainPage_styles.ts';
import {Counter} from "../../counter/Counter.tsx";
import {Controller} from "../../controller/Controller.tsx";
import {useCounterHandler} from "../../../hooks/useCounterHandler.tsx";

export const MainPage = () => {

    // IMPORT COUNTER & CONTROLLER DATA FROM CUSTOM HOOK
    const {
        startValue,
        endValue,
        count,
        isEdit,
        setNewIncrementValue,
        changingStartOrEndValue,
        setStartAndEndValue,
        isSetBtnDisabled,
        resetCountToDefault,
        isError,
        isLimit,
        content
    } = useCounterHandler()

    ////////////////  COUNTER & CONTROLLER PROPS  //////////////////////
    /////

    const ControllerPropsObj = {
        changingStartOrEndValue,
        setStartAndEndValue,
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
        setNewIncrementValue,
        resetCountToDefault
    }

    return (
        <MainPageStyled>
            <Controller {...ControllerPropsObj}/>
            <Counter {...CounterPropsObj}/>
        </MainPageStyled>
    );
};


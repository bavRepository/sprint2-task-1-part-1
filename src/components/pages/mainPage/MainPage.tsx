import {MainPageStyled} from './MainPage_styles.ts';
import {Counter} from "../../counter/Counter.tsx";
import {Controller} from "../../controller/Controller.tsx";
import {useCounterStorage} from "../../../hooks/useCounterStorage.tsx";

export const MainPage = () => {

    // IMPORT COUNTER & CONTROLLER DATA FROM CUSTOM HOOK
    const {
        startValue,
        endValue,
        count,
        isEdit,
        onIncBtnHandler,
        onInputChangeHandler,
        onSetBtnHandler,
        isSetBtnDisabled,
        onResetBtnHandler,
        isError,
        isLimit,
        content
    } = useCounterStorage()

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


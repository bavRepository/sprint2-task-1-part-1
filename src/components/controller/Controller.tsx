import {S} from "../counter/Counter_Styles.ts";
import {Button} from "../commom/button/Button.ts";
import {type ChangeEvent} from "react";
import type {counterProps} from "../pages/mainPage/MainPage.tsx";

type ContainerPropsType = {
    counter: counterProps;
    setCounter: (prop: counterProps) => void;
}

export const Controller = (props: ContainerPropsType) => {

    const {counter, setCounter} = props
    const {startValue, endValue} = counter
    /*error*/
    const onInputChangeEventHandler: (e: ChangeEvent<HTMLInputElement>) => void = (e) => {
        const target = e.currentTarget

        let newStateObj = {}
        if ((startValue < 0 || endValue < 0) || (startValue >= endValue)) {
            newStateObj = {
                // isSetClicked: false,
                // btnIncDisabled: true,
                // btnResetDisabled: true,
                [target.id]: Number(e.target.value),
                // error: true
            }
        } else if (endValue >= startValue) {
            newStateObj = {
                // isSetClicked: false,
                // btnIncDisabled: true,
                // btnResetDisabled: true,
                [target.id]: Number(e.target.value),
                // error: false
            }
        } else {
            newStateObj = {
                // isSetClicked: false,
                // btnIncDisabled: true,
                // btnResetDisabled: true,
                [target.id]: Number(e.target.value),
                // error: false
            }
        }
        setCounter({...counter, ...newStateObj})
    }

    const onClickHandler = () => {
        let newStateObj = {}
        newStateObj = {
            // isSetClicked: true,
            count: counter.startValue,
            // isLimit: false,
            // btnIncDisabled: false,
        }
        setCounter({...counter, ...newStateObj})
    }

    return (
        <S.ContentWrapper>
            <S.Display>
                <S.InputBlockWrapper key={'endValue'}>
                    <label htmlFor={'endValue'}>Max value</label>
                    <input type={'number'} id={'endValue'} onChange={onInputChangeEventHandler}
                           value={counter.endValue}/>
                </S.InputBlockWrapper>
                <S.InputBlockWrapper key={'startValue'}>
                    <label htmlFor={'startValue'}>Start value</label>
                    <input type={'number'} id={'startValue'} onChange={onInputChangeEventHandler}
                           value={counter.startValue}/>
                </S.InputBlockWrapper>
            </S.Display>
            <S.ControlMenuWrapper>
                <Button disabled={(startValue < 0 || endValue < 0) || (startValue >= endValue)}
                        onClick={onClickHandler}>Set</Button>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

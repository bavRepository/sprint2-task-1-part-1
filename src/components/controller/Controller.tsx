import {S} from "../counter/Counter_Styles.ts";
import {Button} from "../commom/button/Button.ts";
import {type ChangeEvent} from "react";

type ControllerPropsType = {
    changingStartOrEndValue: (e: ChangeEvent<HTMLInputElement>) => void;
    setStartAndEndValue: () => void;
    isSetBtnDisabled: boolean
    startValue: number
    endValue: number
}


export const Controller = (props: ControllerPropsType) => {

    const {changingStartOrEndValue, setStartAndEndValue, isSetBtnDisabled, startValue, endValue} = props


    return (
        <S.ContentWrapper>
            <S.Display>
                <S.InputBlockWrapper key={'endValue'}>
                    <label htmlFor={'endValue'}>Max value</label>
                    <input type={'number'} id={'endValue'} onChange={changingStartOrEndValue}
                           value={endValue}/>
                </S.InputBlockWrapper>
                <S.InputBlockWrapper key={'startValue'}>
                    <label htmlFor={'startValue'}>Start value</label>
                    <input type={'number'} id={'startValue'} onChange={changingStartOrEndValue}
                           value={startValue}/>
                </S.InputBlockWrapper>
            </S.Display>
            <S.ControlMenuWrapper>
                <Button disabled={isSetBtnDisabled}
                        onClick={setStartAndEndValue}>Set</Button>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

import {S} from './Counter_Styles.ts';
import {Button} from "../commom/button/Button.ts";

type useStateProps = {
    endValue: number
    startValue: number
    count: number
    isEdit: boolean
    isError: boolean
    isLimit: boolean
    content: string | number
    setNewIncrementValue:()=>void
    resetCountToDefault:()=>void
}

export const Counter = (props: useStateProps) => {

    const {
        startValue,
        count,
        isEdit,
        setNewIncrementValue,
        resetCountToDefault,
        isError,
        isLimit,
        content
    } = props

    return (
        <S.ContentWrapper>
            <S.Display>
                <S.Count $isLimit={isLimit} $isRegularInfo={isEdit && !isError} $isisError={isError}>
                    {content}
                </S.Count>
            </S.Display>
            <S.ControlMenuWrapper>
                <Button key={'inc'} disabled={isEdit || isLimit} onClick={setNewIncrementValue}>Inc</Button>
                <Button key={'reset'} disabled={isEdit || startValue === count}
                        onClick={resetCountToDefault}>Reset</Button>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

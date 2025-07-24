import {S} from './Counter_Styles.ts';
import {Button} from "../commom/button/Button.ts";
import type {counterProps} from "../pages/mainPage/MainPage.tsx";
import {useEffect} from "react";

type useStateProps = {
    counter: counterProps;
    setCounter: (props: counterProps) => void
}

export const Counter = ({counter, setCounter}: useStateProps) => {

    const {
        endValue,
        startValue,
        // message,
        // btnIncDisabled,
        // btnResetDisabled,
        count,
        // isLimit,
        // isSetClicked,
        // error
    } = counter

    useEffect(() => {
        setCounter({
            ...counter,
            // isSetClicked: true,
            // btnResetDisabled: !(count > 0)
        });
    }, []);

    useEffect(() => {
        if (count === endValue) {
            setCounter({
                ...counter,
                // btnResetDisabled: count === startValue,
                // btnIncDisabled: true,
                // btnResetDisabled: false,
                // isLimit: true
            })
        }
    }, [count]);


    const handleIncOnClick = () => {
        // let newStateObj = {}
        // if (count === endValue) {
        //     newStateObj = {btnIncDisabled: true, btnResetDisabled: false, isLimit: true}
        // } else {
        //     newStateObj = {btnIncDisabled: false, btnResetDisabled: false, count: count + 1}
        // }
        // setCounter({...counter, ...newStateObj})
    }
    const handleResetOnClick = () => {
        // setCounter({
        //     ...counter,
        //     isLimit: startValue >= endValue,
        //     count: counter.startValue,
        //     btnResetDisabled: true,
        //     btnIncDisabled: false,
        // });
    }

    // const content = error ? message.error : isSetClicked ? count : message.ok;
    const content = count

    return (
        <S.ContentWrapper>
            <S.Display>
                {/*$isRegularInfo={!error && !isSetClicked && btnIncDisabled}*/}
                <S.Count $isLimit={false} $isError={false} $isRegularInfo={true}>
                    {content}
                </S.Count>
            </S.Display>
            <S.ControlMenuWrapper>
                <Button key={'inc'} disabled={false} onClick={handleIncOnClick}>Inc</Button>
                <Button key={'reset'} disabled={false} onClick={handleResetOnClick}>Reset</Button>
            </S.ControlMenuWrapper>
        </S.ContentWrapper>
    );
};

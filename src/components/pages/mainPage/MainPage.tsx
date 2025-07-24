import {useState} from 'react';
import {MainPageStyled} from './MainPage_styles.ts';
import {Counter} from "../../counter/Counter.tsx";
import {Controller} from "../../controller/Controller.tsx";

// type MessageObjProp = {
//     ok: string
//     error: string
// }

export type counterProps = {
    count: number;
    startValue: number;
    endValue: number;
    // message: MessageObjProp;
    // isLimit: boolean;
    // error: boolean;
    // isSetClicked: boolean;
    // btnIncDisabled: boolean;
    // btnResetDisabled: boolean;
    // btnSetDisabled: boolean;
    // initialState: boolean
}

export const MainPage = () => {

    const [counter, setCounter] = useState<counterProps>({
        count: 0,
        startValue: 0,
        endValue: 5,
        //
        // isLimit: false,
        // error: false,
        // isSetClicked: false,
        // btnIncDisabled: false,
        // btnResetDisabled: false,
        // btnSetDisabled: false,
        // initialState: true
    })

    return (
        <MainPageStyled>
            <Controller counter={counter} setCounter={setCounter}/>
            <Counter counter={counter} setCounter={setCounter}/>
        </MainPageStyled>
    );
};


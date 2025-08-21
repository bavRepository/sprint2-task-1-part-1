import styled, {keyframes} from "styled-components";
import {theme} from "../../../styles/Theme.ts";

const BtnHover = keyframes`
50% {transform: scale(0.95) translateY(2px); opacity: 0.6}
`
export const Button = styled.button`
    background-color: ${theme.colors.mainBrightColor};
    padding: 5px 20px;
    border: 4px solid rgba(0,0,0,0.8);
    border-radius: 1rem;
    font-size: 40px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;
    &:hover {
        animation: ${BtnHover} .5s linear infinite;
    }
    &:disabled {
        background-color: #457586;
        filter: grayscale(50%);
        cursor: auto;
    }
    &:hover:disabled {
        animation: none;
    }
`


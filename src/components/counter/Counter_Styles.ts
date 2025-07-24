import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme.ts";

const ContentWrapper = styled.div`
    margin-top: 15vh;
    width: 440px;
    height: 400px;
    border: 4px solid ${theme.colors.mainBrightColor};
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: ${theme.colors.mainDarkColor};
    border-radius: 1rem;
`
const Display = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.mainDarkColor};
    min-height: 250px;
    border: 4px solid ${theme.colors.mainBrightColor};
    border-radius: 1rem;
    gap: 40px;
   

`

const ControlMenuWrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: center;
    gap: 30px;
`
const InputBlockWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    
    
    label {
        font-size: 32px;
        font-weight: 700;
        color: white;
        min-width: 200px;
    }
    input {
        max-width: 120px;
        padding: 5px 10px;
        border: 4px solid ${theme.colors.mainBrightColor};
        border-radius: 10px;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
    }
    
`

const Count = styled.p<{ $isisError?:boolean, $isLimit?:boolean, $isRegularInfo?:boolean}>`
    font-size: 100px;
    font-weight: 700;
    color: ${theme.colors.mainBrightColor};
    text-shadow: 0 0 3px rgba(255,255,255,0.8);
    ${props=>props.$isisError && css<{ $isisError?:boolean}>`
        color: rgba(234, 0, 0, 0.9);
        font-size: 40px;
    `}
    ${props=>props.$isLimit && css<{ $isLimit?:boolean}>`
        color: rgba(234, 0, 0, 0.9);
    `}
    ${props=>props.$isRegularInfo && css<{ $isRegularInfo?:boolean}>`
        color: ${theme.colors.mainBrightColor};
        font-size: 30px;
    `}
   
    
`

export const S = {ContentWrapper, Display, ControlMenuWrapper,InputBlockWrapper,Count}

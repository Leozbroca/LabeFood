import styled from "styled-components";

export const ScreenContainer =styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivContainer = styled.div`
    margin-bottom: 65px;
`

//Profile

export const ContainerProfile = styled.div`
    display: flex;
    justify-content: space-between;
    width: 340px;
    height: 102px;
    padding: 5px 10px;
`
export const DivText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const DivIcon = styled.div`
    display: flex;
    justify-content: flex-start;
    padding-top:20px;
`

//Address

export const ContainerAddress = styled.div`
    background-color: #eeeeee;
    width: 340px;
    height: 76px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`
export const DivTextAdd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const DivIconAdd = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const DivCardHist = styled.div`
    width: 328px;
    height: 102px;
    margin: 7px 0 0;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4{
        color: #5cb646;
    }
`
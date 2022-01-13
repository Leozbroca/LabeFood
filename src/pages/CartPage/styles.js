import styled from "styled-components";

export const ContainerCart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerCard = styled.div`
    width: 328px;
    height: 112px;
    margin: 7px 0 0;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
    display: flex;
    align-items: center;
`

export const DivButton = styled.div`
    height: 114px;
    width: 90px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    /* border: 1px solid black; */
    position: absolute;
    margin-left: 239px;

button{
    width: 90px;
    height: 31px;
    margin: 7px 0 0 0px;
    padding: 8px 20.5px 9px 21.5px;
    border-radius: 8px 0px 8px 0px;
    border: solid 1px red;
    background-color: white;
    color: red;
}
    
`

export const DivImg = styled.div`
    display: flex;
    align-items: center;
    img{
    border-radius: 8px 0 0 8px;
    width: 96px;
    height: 112px;
    margin: 0 16px 0 0;
    object-fit: auto;
}
`

export const DivText = styled.div`
/* border: 1px solid black; */

p{
    width: 200px;
}
`

export const DivQuant = styled.div`
    height: 146px;
    width: 10px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    /* border: 1px solid black; */
    position: absolute;
    margin-left: 294px;
    p{
        border: 1px solid #5cb646;
        border-radius: 0px 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 33px;
        height: 33px;
    }
`
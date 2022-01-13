import styled from "styled-components"
import { secondaryColor } from "../../constants/colors"

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
  border: solid 1px ${secondaryColor};
  background-color: white;
  color: ${secondaryColor};
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
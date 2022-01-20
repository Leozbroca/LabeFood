import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const ContainerScreen = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor};
  height: 100vh;
img{
    width: 126px;
  height: 65px;
  object-fit: contain;
}
`
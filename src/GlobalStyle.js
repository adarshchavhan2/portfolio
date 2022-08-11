import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => theme.textColor};
  transition: .3s ease-in-out;
}
html{
  background: ${({ theme }) => theme.bgColor};
  scroll-behavior: smooth;
}
/* body{
  overflow-x: hidden;
} */
a{
  text-decoration: none;
  cursor: pointer;
}
li{
  list-style: none;
}

section{
  --bs-gutter-x: 1.5rem;
  --bs-gutter-y: 0;
  width: calc(100% - 0.75);
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 568px;
  }
  @media (min-width: 960px) {
    max-width: 780px;
  }
  @media (min-width: 1200px) {
    max-width: 960px;
  }
  @media (min-width: 1400px) {
    max-width: 1040px;
  }
}
button{
  padding: 15px 50px;
  color: ${({ theme }) => theme.baseColor};
  background: transparent;
  font-size: 16px;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.baseColor};
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  top: 5px;
  &:hover{
    top: 0px;
    box-shadow: 0px 5px 15px ${({ theme }) => theme.shadowColor};
  }
}
h2{
  font-size: 22px;
  text-align: start;
  letter-spacing: 2px;
  position: relative;
  color: ${({ theme }) => theme.textColor1};
  width: fit-content;
  &::after{
    width: 300px;
    height: .5px;
    background: ${({ theme }) => theme.textColor};
    content: "";
    position: absolute;
    right: -310px;
    top: 50%;
    @media(max-width:968px){
      width: 150px;
      right: -160px;
    }
    @media(max-width:568px){
      width: 0px;
    }
  }
  span{
    padding-right: 10px;
    font-family: 'fira code';
    font-weight: 600;
    color: ${({ theme }) => theme.baseColor};
  }
}
`;

export default GlobalStyle;

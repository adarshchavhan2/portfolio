import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Social() {

  useEffect(()=>{
    Aos.init({
      duration: 800,
      easing: 'ease',
      delay: 100,
      anchorPlacement: 'top-bottom'
    })
  },[])

  return (
    <>
      <Left data-aos="fade-up">
          <a href="https://github.com/adarshchavhan2">
            <span className="iconify" data-icon="eva:github-outline"></span>
          </a>
          <a href="https://www.linkedin.com/in/adarshchavhan2/">
          <span className="iconify" data-icon="ri:linkedin-fill"></span>
          </a>
          <a href="mailto: adarshchavhan2@gmail.com">
          <span className="iconify" data-icon="ci:mail-open"></span>
          </a>
      </Left>

      <Right data-aos="fade-up">
          <a href="mailto: adarshchavhan2@gmail.com">
            adarshchavhan2@gmail.com
          </a>
      </Right>
    </>
  )
}

const Left = styled.div`
  position: fixed;
  left: 50px;
  bottom: 200px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  a {
    &:hover * {
      color: ${({ theme }) => theme.baseColor};
    }
  }
  &::after {
    width: 1px;
    height: 200px;
    background-color: ${({ theme }) => theme.textColor};
    content: "";
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
  }

  @media (max-width: 1200px) {
    left: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Right = styled.div`
  font-size: 12px;
  font-family: "Fira Code", monospace;
  letter-spacing: 2px;
  position: fixed;
  right: 50px;
  bottom: 200px;
  writing-mode: vertical-lr;
  a {
    &:hover {
      color: ${({ theme }) => theme.baseColor};
    }
  }
  &::after {
    width: 1px;
    height: 200px;
    background-color: ${({ theme }) => theme.textColor};
    content: "";
    position: absolute;
    top: calc(100% + 20px);
    left: 50%;
  }
  @media (max-width: 1200px) {
    right: 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
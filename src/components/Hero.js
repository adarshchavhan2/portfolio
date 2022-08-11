import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Hero() {

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      delay: 300,
      easing: 'ease',
      anchorPlacement: 'top-bottom'
    })
  },[])

  return (
    <section id='hero'>
      <SHero>
        <h3 data-aos="fade-up">Hi there, my name is</h3>
        <h1 data-aos="fade-up" data-aos-delay="300"><span className='name'>Adarsh Chavhan.</span>
          <br/>I'm front end developer.</h1>
          <p data-aos="fade-up" data-aos-delay="600">I enjoy developing websites and web applications. Love to have conversations about anything and everything.</p>
          <button data-aos="fade-up" data-aos-delay="900">Resume</button>
      </SHero>
    </section>
  )
}

const SHero = styled.div`
  height: calc(100vh - 60px);
  max-height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  * {
    width: 570px;
  }
  h3 {
    font-family: "Fira code";
    font-size: 18px;
    font-weight: 400;
    color: ${({ theme }) => theme.baseColor};
  }
  h1 {
    font-size: 65px;
    line-height: 1.2;
    .name {
      color: ${({ theme }) => theme.textColor1};
    }
  }
  p {
    line-height: 1.8;
    font-weight: 500;
    word-spacing: 5px;
    font-size: ${({ theme }) => theme.pSize};
  }
  button {
    width: auto;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    justify-content: center;
    position: relative;
    top: -50px;
    * {
      max-width: 100%;
    }
    h3 {
      font-size: 18px;
    }
    h1 {
      font-size: 46px;
    }
  }

  @media (max-width: 568px) {
    padding: 10px;
    h1 {
      font-size: 37px;
      line-height: 1.3;
    }
  }
`;
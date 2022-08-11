import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Contact() {

  useEffect(()=>{
    Aos.init({
      duration: 800,
      easing: 'ease',
      delay: 100,
      anchorPlacement: 'top-bottom'
    })
  },[])

  return (
    <section id='contact'>
      <SContact>
          <h2 data-aos="fade-right"><span>04.</span>Let's Talk</h2>
          <div className="box">
            <p data-aos="fade-up">
            One of my favorite things about developing web applications is the variety in projects. So if you want to collaborate or have some work for me , get in touch and tell me what you have in mind. — I can’t wait to hear all about it!
            </p>
            <a href="mailto: adarshchavhan2@gmail.com">
            <button data-aos="fade-up">
              Let's Talk
            </button>
            </a>
            <div className='social' data-aos="fade-up">
                <a href="https://github.com/adarshchavhan2">
                  <span className="iconify" data-icon="eva:github-outline"></span>
                </a>
                <a href="https://www.linkedin.com/in/adarshchavhan2/">
                <span className="iconify" data-icon="ri:linkedin-fill"></span>
                </a>
                <a href="mailto: adarshchavhan2@gmail.com">
                <span className="iconify" data-icon="ci:mail-open"></span>
                </a>
            </div>
          </div>
      </SContact>
    </section>
  )
}

const SContact = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .box {
    padding: 100px 20px;
    p {
      margin: auto;
      max-width: 600px;
      line-height: 2;
      word-spacing: 5px;
      font-size: ${({ theme }) => theme.pSize};
      
    }
    button {
      margin: 50px 0;
    }
    .social{
      display: none;
      justify-content: center;
      gap: 20px;
      @media (max-width:768px) {
       display: flex ;
      }
      * &:hover{
        color: red;
      }
    }
  }
`;
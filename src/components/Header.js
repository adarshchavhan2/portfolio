import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"

export default function Header({toggleTheme}) {

  useEffect(()=>{
    Aos.init({
      throttleDelay: 99,
      offset: 120,
      duration: 500,
      easing: 'ease',
      anchorPlacement: 'top-bottom'
    })
  },[])

  return (
    <span id='home'>
      <Head>
        <section>
            <div className="logo" data-aos="zoom-in">
                <img src='./logo.svg' alt='logo'/>
            </div>

            <div className='right'>
               <button onClick={() => toggleTheme()}>
                <span className="iconify" data-icon="fluent:dark-theme-24-regular"></span> 
              </button>

                <label htmlFor="sb-input" className='sb-btn'>
                  <span className="iconify" data-icon="heroicons-outline:menu-alt-3"></span>
                </label>
                <input type="checkbox" id='sb-input'/>
                <nav data-aos="fade-down" id='main-nav'>
                  <label className='sb-close' htmlFor="sb-input">
                  <span className="iconify" data-icon="ci:close-big"></span>
                  </label>
                  <a href="#home">
                      <span className='no'>01.</span>
                      <span className='text'>Home</span>  
                  </a>
                  <a href="#skills">
                    <span className='no'>02.</span>
                    <span className='text'>Skills</span>
                  </a>
                  <a href="#projects">
                    <span className='no'>03.</span>
                    <span className='text'>Projects</span>
                  </a>
                  <a href="#contact">
                    <span className='no'>04.</span>
                    <span className='text'>Contact</span>
                  </a>
                </nav>
            </div>
        </section>
      </Head>
    </span>
  )
}
const Head = styled.header`
  section {
    height: 70px;
    max-width: 1350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      img {
        width: 35px;
      }
    }
    .right{
      width: fit-content;
      display: flex;
      align-items: center;
      button{
        border: 0;
        padding: 10px;
        overflow: hidden;
        top: 0px;
        z-index: 2;
        &:hover,
        &:active{
          box-shadow: 0 0 0;
        }
      }
    }
    .sb-btn {
      border: 0;
      padding: 10px 15px;
      display: none;
      * {
        color: ${({ theme }) => theme.baseColor};
        font-size: 28px;
      }
      &:hover {
        box-shadow: 0px 0px 0px;
      }
      @media (max-width: 768px) {
        display: block;
        z-index: 2;
      }
    }
    #sb-input {
      display: none;
    }
    #sb-input:checked ~ #main-nav {
      right: 0;
      @media (max-width: 768px) {
        &::before{
            content: "";
            width: 100%;
            height: 100vh;
            backdrop-filter: blur(3px);
            position: absolute;
            top: 0;
            left: -100%;
          }
          box-shadow: 0px 0px 5px gray;
      }
    }
    nav {
      transition: 1s ease-in-out;
      .sb-close{
        position:absolute;
        top: 10px;
        right: 10px;
        padding: 10px;
        display: none;
        @media (max-width: 768px) {
          display: block;
        }
        *{
        color: ${({theme})=> theme.baseColor};
        }
        .iconify{
          font-size: 24px;
        }
      }
      a {
        padding: 20px 20px;
        font-size: 14px;
        .no {
          color: ${({ theme }) => theme.baseColor};
          font-family: "Fira Code";
          padding-right: 5px;
        }
        .text {
          font-family: "Fira code";
          color: ${({ theme }) => theme.textColor1};
        }
        &:hover {
          .text {
            color: ${({ theme }) => theme.baseColor};
          }
        }
      }
      @media (max-width: 768px) {
        padding: 20px;
        padding-top: 60px;
        background: ${({ theme }) => theme.bgColor};
        box-shadow: 0px 0px 10px ${({ theme }) => theme.shadowColor};
        z-index: 1;
        height: 100vh;
        width: 50vw;
        display: flex;
        flex-direction: column;
        top: 0px;
        right: -65vw;
        z-index: 2;
        position: fixed;
      }
    }
  }
`;
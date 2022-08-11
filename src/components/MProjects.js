import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"
import Api from '../api/MProjectsAPI.js'

export default function MProjects() {

  useEffect(()=>{
    Aos.init({
      duration: 1000,
      easing: 'ease',
      delay: 200,
      anchorPlacement: 'top-bottom'
    })
  },[])

  return (
    <section id='projects'>
      <SProjects>
        <h2 data-aos="fade-right"><span>03.</span>Other Noteworthy Projects</h2>
        <div className="project-list">
        { Api.map((curElem) => {
          const { id, title, description, skills, github, url } = curElem;
            return(
              <li className="project" data-aos="fade-up" key={`${id}`}>
               <div className="left" >
                  <div className='btn-wrapper'>
                    <a className="btn" href={`${github}`}>
                      <span className="iconify" data-icon="iconoir:github" data-width="20px"></span>
                    </a>
                    <a className="btn" href={`${url}`}>
                       <span className="iconify" data-icon="akar-icons:link-out" data-width="20px"></span>
                    </a>
                  </div>
               </div>
               <div className="right">
                  <div className="top">
                    <span className="iconify" data-icon="akar-icons:folder" data-width="32"></span>
                    <a href={`${url}`} className='name'>{title}</a>
                  </div>
                  <div className='box'>
                    <p className='desc'>{description}</p>
                    <ul>
                      { skills.map( li => <li key={li}>{li}</li> )}
                    </ul>
                  </div>
               </div>
            </li>
            )
          })
        }
        </div>
      </SProjects>
    </section>
  )
}

const SProjects = styled.div`
  .project-list {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
    .project {
      padding: 20px;
      background: ${({ theme }) => theme.bgColor1};
      border-radius: 5px;
      box-shadow: 0px 0px 2px ${({ theme }) => theme.shadowColor1};
      transition: 0.2s ease-in-out;
      position: relative;
      top: 0;
      .left {
        display: flex;
        justify-content: end;
        position: relative;
        .btn-wrapper {
          .btn {
            padding: 0 10px;
            &:hover * {
              color: ${({ theme }) => theme.baseColor};
            }
          }
        }
      }
      .right {
        .top {
          padding: 10px 0;
          display: grid;
          grid-template-columns: 45px 1fr;
          * {
            color: ${({ theme }) => theme.baseColor};
          }
          .name {
            color: ${({ theme }) => theme.textColor1};
            font-size: 20px;
            font-weight: 700;
            padding: 5px 0;
            @media (max-width:568px) {
              font-size: 18px;
            }
          }
        }
        .box {
          padding-bottom: 20px;
          p {
            font-weight: 500;
            font-size: ${({ theme }) => theme.pSize};
            line-height: 1.8;
            word-spacing: 3px;
            padding-bottom: 20px;
          }
          ul {
            display: flex;
            gap: 10px;
            padding: 10px 0;
            position: absolute;
            bottom: 10px;
            li {
              font-size: 13px;
              font-weight: 400;
              font-family: "fira code";
              padding: 2px 5px;
              border-radius: 5px;
              &:hover {
                color: ${({ theme }) => theme.baseColor};
              }
            }
          }
        }
      }
      &:hover {
        top: -5px;
        box-shadow: 0px 5px 20px ${({ theme }) => theme.shadowColor1};
      }
    }

    @media (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 568px) {
      grid-template-columns: 1fr;
      padding: 50px 10px;
      .project {
        max-width: 330px;
        margin: auto;
        border-radius: 5px;
        
      }
    }
  }
`;
import React, {useEffect} from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import "aos/dist/aos.css"
import Api from '../api/ProjectsAPI.js'

export default function Projects() {

  useEffect(()=>{
    Aos.init({
      duration: 800,
      easing: 'ease',
      delay: 100,
      anchorPlacement: 'top-bottom'
    })
  },[])

  return (
    <section id='projects'>
      <SProjects>
        <h2 data-aos="fade-right"><span>03.</span>Some things I've Built</h2>
        <div className="project-list">
          { Api.map((curElem) => {
            const { id, title, image, description, skills, github, url } = curElem;
              return(
                <li className="project" data-aos="fade-up" key={`${id}`}>
                  <div className="left" >
                    <img className='img' src={image} alt="imgxcls" />
                  </div>
                  <div className="right">
                    <div className="top">
                      <a href={url} className='name'>{title}</a>
                    </div>
                    <div className='box'>
                      <p className='desc'>{description}</p>
                      <ul>
                        { skills.map( li => <li key={li}>{li}</li> )}
                      </ul>
                      <div className='btn-wrapper'>
                        <a className="btn" href={`${github}`}>
                          <span className="iconify" data-icon="iconoir:github" data-width="20px"></span>
                        </a>
                        <a className="btn" href={`${url}`}>
                          <span className="iconify" data-icon="akar-icons:link-out" data-width="20px"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              )
          })}
        </div>
      </SProjects>
    </section>
  )
}

const SProjects = styled.div`
  .project-list {
    padding: 100px 0;
    @media (max-width: 568px) {
      padding: 30px 0;
    }
    .project {
      position: relative;
      display: flex;
      margin-bottom: 80px;
      &:hover .left {
        top: -5px;
        img {
          filter: grayscale(0);
          box-shadow: 0px 0px 20px ${({ theme }) => theme.shadowColor1};
        }
        &::after {
          background: transparent;
        }
      }
      .left {
        width: 50%;
        position: relative;
        img {
          width: 100%;
          border-radius: 5px;
          filter: grayscale(0.7);
        }
        &::after {
          width: 100%;
          height: 100%;
          background: ${({ theme }) => theme.shadowColor};
          border-radius: 5px;
          content: "";
          position: absolute;
          top: -3px;
          left: 0;
        }
      }
      .right {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: right;
        width: 50%;
        .top {
          padding: 10px 0;
          * {
            color: ${({ theme }) => theme.baseColor};
          }
          .name {
            color: ${({ theme }) => theme.textColor1};
            font-size: 20px;
            font-weight: 700;
            padding: 5px 0;
          }
          .btn-wrapper {
            padding: 5px 0;
            display: flex;
            gap: 15px;
          }
        }
        .box {
          p {
            font-weight: 500;
            font-size: ${({ theme }) => theme.pSize};
            line-height: 1.8;
            word-spacing: 3px;
            padding: 20px;
            margin: 5px 0;
            background: ${({ theme }) => theme.bgColor1};
            box-shadow: 0px 0px 5px ${({ theme }) => theme.shadowColor1};
            position: relative;
            border-radius: 0px 5px 5px 0;
          }
          ul {
            padding: 15px 0;
            display: flex;
            justify-content: end;
            gap: 20px;
            li {
              font-family: "Fira Code";
              font-size: 14px;
              &:hover {
                color: ${({ theme }) => theme.baseColor};
              }
            }
          }
          .btn-wrapper {
            display: flex;
            justify-content: flex-end;
            gap: 20px;
            .btn {
              &:hover * {
                color: ${({ theme }) => theme.baseColor};
              }
            }
          }
        }
      }
    }
  }

  .project:nth-child(even) {
    flex-direction: row-reverse;
    .right {
      text-align: left;
      .box {
        p {
          border-radius: 10px 0 0 10px;
        }
        ul,
        .btn-wrapper {
          justify-content: start;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .project:nth-child(even),
    .project:nth-child(odd) {
      .left {
        width: 40%;
        height: fit-content;
      }
      .right {
        width: 60%;
      }
    }
  }

  @media (max-width: 568px) {
    padding: 0px 0;
    .project:nth-child(even),
    .project:nth-child(odd) {
      padding: 10px 10px;
      flex-direction: column;
      background: ${({ theme }) => theme.bgColor1};
      margin: 25px auto;
      border-radius: 10px;
      box-shadow: 0px 0px 2px ${({ theme }) => theme.shadowColor1};
      width: calc(100% - 40px);
      max-width: 330px;
      overflow: hidden;
      position: relative;
      top: 0;
      &:hover {
        top: -5px;
        box-shadow: 0px 5px 20px ${({ theme }) => theme.shadowColor1};
        .left {
          top: 0px;
          box-shadow: 0px 0px 20px ${({ theme }) => theme.shadowColor1};
        }
      }
      .left {
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        padding: 0;
        img {
          width: 100%;
          border-radius: 5px;
        }
      }
      .right {
        width: 100%;
        text-align: left;
        padding: 5px;
        .top {
          .name {
            font-size: 22px;
            @media (max-width:568px) {
              font-size: 18px;
            }
          }
        }
        .box {
          p {
            border-radius: 10px;
            width: calc(100% - 30px);
            padding: 0;
            box-shadow: 0px 0px 0px;
          }
          ul {
            justify-content: flex-start;
          }
          .btn-wrapper {
            justify-content: flex-start;
          }
        }
      }
    }
  }
`;
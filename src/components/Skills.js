import React, { useEffect } from "react";
import styled from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 600, delay: 300 });
  }, []);

  return (
    <section id="skills">
      <SSkills>
        <h2 data-aos="fade-right">
          <span>02.</span> Tech-Stack that know
        </h2>
        <nav className="skill-list">
          <div className="skill" data-aos="fade-up">
            <span className="iconify" data-icon="fa-brands:html5"></span>
            <span className="popovers">HTML</span>
          </div>
          <div className="skill" data-aos="fade-up" data-aos-delay="50">
            <span className="iconify" data-icon="fa6-brands:css3-alt"></span>
            <span className="popovers">CSS</span>
          </div>
          <div className="skill" data-aos="fade-up" data-aos-delay="100">
            <span className="iconify" data-icon="ion:logo-javascript"></span>
            <span className="popovers">JavsScript</span>
          </div>
          <div className="skill" data-aos="fade-up" data-aos-delay="150">
            <span className="iconify" data-icon="simple-icons:bootstrap"></span>
            <span className="popovers">Bootstrap</span>
          </div>
          <div className="skill" data-aos="fade-up" data-aos-delay="200">
            <span className="iconify" data-icon="ri:reactjs-fill"></span>
            <span className="popovers">React</span>
          </div>
          <div className="skill" data-aos="fade-up" data-aos-delay="250">
            <span className="iconify" data-icon="bxl:redux"></span>
            <span className="popovers">Redux</span>
          </div>
          <div className="skill" data-aos="fade-up" data-aos-delay="300">
            <span className="iconify" data-icon="icomoon-free:github"></span>
            <span className="popovers">Github</span>
          </div>
          <div className="skill" data-aos="fade-up" data-aos-delay="350">
            <span className="iconify" data-icon="teenyicons:npm-outline"></span>
            <span className="popovers">NPM</span>
          </div>
        </nav>
      </SSkills>
    </section>
  );
}

const SSkills = styled.div`
  .skill-list {
    padding: 100px 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 30px;
    @media (max-width: 568px) {
      gap: 20px;
    }
    .skill {
      padding: 20px;
      border: 1px solid;
      border-radius: 10px;
      position: relative;

      .iconify {
        width: 80px;
        height: 80px;
        @media (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
        @media (max-width: 568px) {
          width: 40px;
          height: 35px;
        }
      }
      .popovers {
        color: #fff;
        background: ${({ theme }) => theme.baseColor};
        padding: 2px 12px;
        font-size: 12px;
        border-radius: 5px;
        position: absolute;
        bottom: -10px;
        right: -10px;
        transform: scale(0.5);
        opacity: 0;
        transition-delay: 0.1s;
      }
      &:hover {
        border-color: ${({ theme }) => theme.baseColor};
        * {
          color: ${({ theme }) => theme.baseColor};
        }
        .popovers {
          color: ${({ theme }) => theme.bgColor};
          transform: scale(1);
          font-weight: 600;
          opacity: 1;
        }
      }
    }
  }
`;

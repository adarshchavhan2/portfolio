import React from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

export default function Errorpage() {

  
  const navigate = useNavigate();
  function go(){
    navigate("/");
  }
  return (
    <SError>
      <h1>404</h1>
      <p>Page not found</p>
      <button onClick={()=>go()}>Go to Home</button>
    </SError>
  )
}

const SError = styled.div`
  width: 100vw;
  height: 100vh;
  background: #0a192f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0px;
  position: fixed;
  top: 0;
  z-index: 2;
  *{
    color: ${({theme})=>theme.baseColor};
  }
  h1{
    font-size: 100px;
    font-weight: 600;
    font-family: 'Fira Code';
  }
  p{
    letter-spacing: 4px;
  }
  button{
    margin: 25px 0;
  }
`;

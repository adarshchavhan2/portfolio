import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <SFooter>
      <section>
        <p>Developed by <span>Adarsh Chavhan</span></p>
      </section>
    </SFooter>
  )
}

const SFooter = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    font-size: ${({ theme }) => theme.pSize};
    padding: 20px;
    span{
      color: ${({theme})=> theme.baseColor};
    }
`;

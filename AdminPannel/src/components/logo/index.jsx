import React from "react";
import styled from "styled-components";
import logoImg from "../navbar/logo.png";

// const LogoWrapper = styled.div`
//   display: flex;
//   align-items: center;
// // `;

const LogoImg = styled.div`
  width: 150px;
  height: 150px;
  
  img {
    width: 100%;
    height: 100%;
  }
`;



export function Logo(props) {
  return (
   
      <LogoImg>
        <img src={logoImg} alt="Greenland logo" />
      </LogoImg>
  
  );
}

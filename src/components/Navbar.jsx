import React from 'react'
import styled from 'styled-components';
import { IoPersonOutline } from "react-icons/io5";

const Container=styled.div`
  position: sticky;
  top:0;
  background-color: ${({theme}) => theme.bgLighter};
  height: 75px;
  margin-bottom: 10px;
`;

const Wrapper=styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  padding:0px 20px;
  position: relative;
  `;

const Input=styled.input`
  font-size:20px;
  background-color: transparent;
  width:38%;
  left:0px;
  right:0px;
  margin:auto;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius:3px;
  position: absolute;
  left:0px;
  right:0px;
  margin:auto;
  width:40%;
  border: 1px solid #ccc;
  border-radius:3px;
  margin-right:620px;
`;

const Button=styled.button`
    display: inline-flex;
    justify-content: center;
    margin: 12px 0px;
    padding: 10px;
    align-items: center;
    gap: 11px;
    width:115px;
    height: 50px;
    background-color: transparent;
    border: 1px solid #3ea6ff;
    color: #3ea6ff;
    border-radius:3px;
    cursor: pointer;
    font-weight:bold;
    font-size:17px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
          <Input placeholder="Search" />
        <Button><IoPersonOutline/>SIGN IN</Button>
      </Wrapper>
    </Container>
    

  )
}

export default Navbar
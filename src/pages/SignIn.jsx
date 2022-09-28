import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
  display:flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  height:850px;
  color: ${({theme}) => theme.text};
`;
const Wrapper=styled.div`
  display:flex;
  align-items:center;
  flex-direction: column;
  background-color: ${({theme}) => theme.bgLighter};
  border: 1px solid ${({theme}) => theme.soft};
  border-radius:10px;
  padding: 30px 50px;
  gap:10px;
  width:500px;
  height:600px;
  `;
const Title=styled.h1`
  font-size:29px;
  margin: 18px 0px 0px 0px;
  font-family: Tahoma,Serif,Arial, Verdana; 
  font-weight:400;
`;
const SubTitle=styled.h2`
font-size:20px;
font-weight:200;
margin:10px 0px 18px 0px;
font-family: Tahoma,Serif,Arial, Verdana; 

`;
const Input=styled.input`
  border:1px solid ${({theme}) => theme.soft};
  border-radius:5px;
  padding:10px;
  margin: 5px 0px;
  background-color: transparent;
  width: 80%;
  font-size:17px;
  font-family: Tahoma,Serif,Arial, Verdana; 

`;
const Button=styled.button`
  border:none;
  border-radius:5px;
  padding: 10px 20px;
  font-weight:500;
  font-size:17px;
  cursor:pointer;
  background-color:#1a73e8;
  color: #fbfcfe;
  font-family: 'Comic Sans MS',Tahoma,Serif,Arial, Verdana; 
  &:hover{
    background-color:#1b66ca;
  }

`;

const More=styled.div`
  display:flex;
  margin:20px;
  color:${({theme}) => theme.textSoft};
  font-family: Tahoma,Serif,Arial, Verdana; 

`;
const Links=styled.div`
  margin-left: 303px;
`;
const Link=styled.span`
  margin-left:25px;
`;




const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to YouTube</SubTitle>
        <Input placeholder='username'/>
        <Input type="password"placeholder='password'/>
        <Button>Sign in</Button>

        <Title>or</Title>
        <Input placeholder='username'/>
        <Input placeholder='email'/>
        <Input type="password"placeholder='password'/>
        <Button>Sign up</Button>
      </Wrapper>
      <More>
        English(US)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
      </Container>
  )
}

export default SignIn
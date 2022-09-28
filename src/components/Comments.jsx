import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
  gap:17px;
  margin-bottom: 40px;
`;
const Image = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
  cursor:pointer;
`;
const ChannelDetails = styled.div`
  color: ${({theme}) => theme.text};
  margin-top: 8px;
`;
const Name = styled.span`
  font-weight: 500;
  cursor:pointer;
`;
const Age = styled.span`
  font-size:15px;
  color: ${({theme}) => theme.textSoft};
  margin: 9px;
`;
const Describtion = styled.p`
  font-size:14px;
  margin-top:7px;
  max-width:100%;
`;

const Comments = () => {
  return (
    <Container>
        <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Eo_circle_teal_white_letter-l.svg/1200px-Eo_circle_teal_white_letter-l.svg.png"/>
        <ChannelDetails>
            <Name>Lee Chandler</Name>
            <Age>8 years ago</Age>
            <Describtion>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text</Describtion>
        </ChannelDetails>
    </Container>
  )
}

export default Comments
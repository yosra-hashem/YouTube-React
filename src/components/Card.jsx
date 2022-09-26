import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    width: 360px;
    margin-bottom: 45px;
    cursor:pointer;
`;
const Image=styled.img`
    width: 100%;
    height:202px;
    background-color:#999;
`;
const Details=styled.div`
    display: flex;
    margin-top:12px;
    gap:12px;
`;

const ChannelImg=styled.img`
    width:36px;
    height:36px;
    border-radius:50%;
    background-color:#999;
`;

const Texts=styled.div`
`;

const Title=styled.h1`
    font-size:18px;
    font-weight:500;
    color: ${({theme}) => theme.text};
`;

const ChannelName=styled.h2`
    font-size:14px;
    color: ${({theme}) => theme.textSoft};
    margin:7px 0px 5px 0px;
`;

const MoreInfo=styled.div`
    font-size:14px;
    color: ${({theme}) => theme.textSoft};
`;









const Card = () => {
  return (
    <Container><Image src="data:image/jpeg;base64,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"/>
    <Details>
        <ChannelImg src="https://yt3.ggpht.com/9tmxIG74WfkHL0mxbIFwwjB51zUs35ZgOtY5XQi8HUTpVgkcIAELXEBITlcvHtoBZWnrmFK_=s900-c-k-c0x00ffffff-no-rj"/>
        <Texts>
            <Title>مسامير - تحريات كلب</Title>
            <ChannelName>Myrkott</ChannelName>
            <MoreInfo>10M views . 3 years ago</MoreInfo>
        </Texts>
    </Details>
    </Container>
    )
}

export default Card
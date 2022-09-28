import React from 'react'
import styled from 'styled-components'
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiShare } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { TbPlaylistAdd } from "react-icons/tb";
import NewComment from '../components/NewComment';


const Container = styled.div`
  display: flex;
  gap:24px;
`;

const Content = styled.div`
  flex:5;
`;
const VideoWrapper = styled.div``;
const Title = styled.div`
  font-size:18px;
  font-weight:500;
  margin-top:20px;
  color: ${({theme}) => theme.text}
`;
const Details = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;
const Info = styled.span`
  font-size: 15px;
  color: ${({theme}) => theme.textSoft};
`;
const Buttons = styled.div`
  display:flex;
  align-items:center;
  justify-content: flex-end;
  gap:20px;
  color: ${({theme}) => theme.text};
`;
const BandW = styled.span`
  display:flex;
  align-items:center;
  margin: 13px;
  gap:5px;
  cursor:pointer;
`
const Button = styled.span`
display:flex;
  align-items:center;
  justify-content: flex-end;  
  gap:5px;
  font-size:20px;
`;
const Channel=styled.div`
  display: flex;
  justify-content: space-between;
`;
const ChannelInfo = styled.div`
  display: flex;
  gap:20px;
  margin: 7px 0px;
`;
const Image = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;
  cursor:pointer;
`;
const ChannelDetails = styled.div`
  display:flex;
  flex-direction: column;
  color: ${({theme}) => theme.text};
  margin-top: 8px;
`;
const ChannelName = styled.span`
  font-weight: 500;
  cursor:pointer;
`;
const Subscribers = styled.span`
  margin-top:5px;
  margin-bottom:20px;
  font-size:15px;
  color: ${({theme}) => theme.textSoft};
`;
const Describtion = styled.p`
  font-size:14px;
`;

const Subscribe = styled.button`
  background-color: #cc1a00;
  color:white;
  font-weight:500;
  font-size: 16px;
  border:none;
  border-radius:2px;
  width: 115px;
  height:40px;
  margin-top:11px;
  cursor:pointer;
`;

const Recommendations = styled.div`
  flex:2;
`;
const Hr=styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({theme}) => theme.soft}
`

const Video = () => {
  return (
    <Container>
      <Content>
        <VideoWrapper>
        <iframe src='https://www.youtube.com/embed/_SHYKBD8w8Q'
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
        title='video'
        width='100%'
        height='720px'
        />
        </VideoWrapper>
        <Title>تحريات كلب #مسامير |</Title>
        <Details>
          <Info>8,059,512 views . Mar 21, 2019</Info>
          <Buttons>    
            <BandW><Button><BiLike/></Button>207K</BandW>
            <BandW><Button><BiDislike/></Button>DISLIKE</BandW>
            <BandW><Button><BiShare/></Button>SHARE</BandW>
            <BandW><Button><HiDownload/></Button>DOWNLOAD</BandW>
            <BandW><Button><TbPlaylistAdd/></Button>SAVE</BandW>
          </Buttons>
        </Details>
        <Hr/>
        <Channel>
          <ChannelInfo>
            <Image src="https://yt3.ggpht.com/9tmxIG74WfkHL0mxbIFwwjB51zUs35ZgOtY5XQi8HUTpVgkcIAELXEBITlcvHtoBZWnrmFK_=s900-c-k-c0x00ffffff-no-rj"/>
            <ChannelDetails>
            <ChannelName>Myrkott</ChannelName>
            <Subscribers>2.77M subscribers</Subscribers>
            <Describtion>اشترك في قناة ميركوت</Describtion>
            </ChannelDetails>
          </ChannelInfo>
          <Subscribe>SUBSCRIBE</Subscribe>
        </Channel>
        <Hr/>
        <NewComment/>
      </Content>
      <Recommendations>
        Recommendations
      </Recommendations>
    </Container>
  )
}

export default Video
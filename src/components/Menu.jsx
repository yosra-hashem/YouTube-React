import React from 'react'
import styled from "styled-components";
import logo from "../imgs/logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { RiMovieLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { IoGameControllerOutline } from "react-icons/io5";
import { MdLiveTv } from "react-icons/md";
import { MdSportsHandball } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { MdOutlinedFlag } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
// import { VscColorMode } from "react-icons/vsc";
import { MdOutlineLightMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RiFeedbackLine } from "react-icons/ri";
import { MdCopyright } from "react-icons/md";
import { IoPersonOutline } from "react-icons/io5";
import {Link} from 'react-router-dom'

const Container=styled.div`
    flex:1.3;
    background-color: ${({theme})=> theme.bgLighter};
    color: ${({theme})=> theme.text};
    height: 117vh;
    margin: 0px;
    font-family: Arial;
    font-size: 17px;
    align-items: center;
    position: sticky;
    top:0;
`;
const Wrapper=styled.div`
    padding: 18px 25px;
    align-items: center;
`;

const Logo=styled.div`
    display:flex;
    align-items:center;
    gap: 5px;
    margin-bottom: 25px;
`;
const Img=styled.img`
    width:40px;
    height:40px;
`;
const Text=styled.span`
    font-size:20px;
    font-weight: bold;
`;

const Item=styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    cursor: pointer;
    padding: 8px 5px;
    height: 29px;
    &:hover{
        background-color:${({theme}) => theme.soft}
    }
`;
const Hr=styled.hr`
    border: 1px solid ${({theme})=> theme.soft};
    margin 8px 0px;
`;
const Copyright=styled.div`
    margin-top: 24px;
    color: ${({theme})=> theme.textSoft};
    font-size: 14px;
`;
const Signin=styled.div`
    margin: 10px;
    margin-bottom:27px;
    cursor: pointer;
    padding: 16px 0px;
    height: 80px;
`
const Button=styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 12px 0px;
    padding: 10px;
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
const Title=styled.h2`
    font-size: 14px;
    font-weight: 500;
    color: #aaaaaa;
    margin-bottom:11px;
    margin-top:25px;
`

const Menu = ({darkMode,setDarkMode}) => {
  return (
    <Container>
        <Wrapper>
            <Link to="/" style={{textDecoration:"none",color:"inherit"}}>
            <Logo>
                <Img src={logo}/>
                <Text>YouTube</Text>
            </Logo>
            </Link>
            <Item>
                <AiFillHome/>
                Home
            </Item>
            <Item>
                <MdOutlineExplore/>
                Explore
            </Item>
            <Item>
                <MdOutlineSubscriptions/>
                Subscribtions
            </Item>
            <Hr/>
            <Item>
                <MdOutlineVideoLibrary/>
                Library
            </Item>
            <Item>
                <VscHistory/>
                History
            </Item>
            <Hr/>
            <Signin>
                Sign in to like videos,<br/>
                comment and subscribe.
                <Link to="signin" style={{textDecoration:"none"}}>
                <Button><IoPersonOutline/>SIGN IN</Button>
                </Link>
            </Signin>
            
            <Hr/>
            <Item>
                <RiMovieLine/>
                Your videos
            </Item>
            <Item>
                <MdOutlineWatchLater/>
                Watch later
            </Item>
            <Item>
                <AiOutlineLike/>
                Liked videos
            </Item>
            <Hr/>
            <Title>EXPLORE</Title>
            <Item>
                <IoGameControllerOutline/>
                Gaming
            </Item>
            <Item>
                <MdLiveTv/>
                Live
            </Item>
            <Item>
                <MdSportsHandball/>
                Sports
            </Item>
            <Hr/>
            <Item>
                <FiSettings/>
                Settings
            </Item>
            <Item>
                <MdOutlinedFlag/>
                Report history
            </Item>
            <Item>
                <BiHelpCircle/>
                Help
            </Item>
            <Item>
                <RiFeedbackLine/>
                Send feedback
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Item> <MdOutlineLightMode/> <Item>LightMode</Item> </Item> : <Item><MdLightMode/> <Item>DarkMode</Item> </Item>}
            </Item>
            <Hr/>
            <Copyright><MdCopyright/> 2022 Yousra</Copyright>
             
        </Wrapper>
    </Container>
  )
}

export default Menu
import React from 'react'
import styled from 'styled-components';
import Comments from './Comments';

const Container=styled.div``;
const AddNew=styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    margin: 20px 0px;
    margin-bottom: 40px;
`;
const Image=styled.img`
width:50px;
height:50px;
border-radius:50%;
cursor:pointer;
`;
const Input=styled.input`
    background-color:transparent;
    border: none;
    border-bottom:1px solid ${({theme}) => theme.soft};
    outline:none;
    color:${({theme}) => theme.text};
    width:100%;
    padding:5px;
`;


const NewComment = () => {
  return (
    <Container>
        <AddNew>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Eo_circle_teal_white_letter-l.svg/1200px-Eo_circle_teal_white_letter-l.svg.png"/>
            <Input placeholder='Add a comment...'/>
        </AddNew>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
        <Comments></Comments>
    </Container>
  )
}

export default NewComment
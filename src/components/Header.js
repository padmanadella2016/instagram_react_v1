import React from 'react'
import styled from '@emotion/styled';
const Container = styled.div`
  height: 100%;  
  align-items: right; 
  padding-left:10%;
  width:35%;
   `;
  const ContainerFull = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  height: 100%; 
  `;
  const ProfileName = styled.div`
   display:flex;
  padding:5% 0;
  `;
  const HeaderTag = styled.div`
  display:flex; 
  `;
  const P = styled.p`
     font-size:1.7em;
     padding:0 10px;
  `;
  const H5 = styled.h5`
  padding:0 10px;
  `;
  const Pimg = styled.div`
   width:100px;
   height:100px;
   background-color:pink;
  `;
export default function Header() {
    return (
        <ContainerFull>
        <Pimg></Pimg>
         <Container>
        <ProfileName><P>ablissfulmommy</P> 
        <P><button>Edit Profile</button></P>
        </ProfileName>
        <HeaderTag><H5>96 posts</H5> <H5>590 followers</H5> 
        <H5>215 following</H5>
        </HeaderTag>
        <p>
            A Blissful Mommy
            I am Blogger 🖥, Fashion, 🌏Travel, Front end developer , Mom of cutie 💥💥.
            https://www.ablissfulmommy.com/
            #ablissfulmommy
        </p>
        </Container>
        </ContainerFull>
    )
}

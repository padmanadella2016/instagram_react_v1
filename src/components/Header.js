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
export default function Header() {
    return (
        <ContainerFull>
        <p>image</p>
         <Container>
        <ProfileName><h2>ablissfulmommy</h2> 
        <h2><button>Edit Profile</button></h2>
        </ProfileName>
        <HeaderTag><h5>96 posts</h5> <h5>590 followers</h5> 
        <h5>215 following</h5>
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

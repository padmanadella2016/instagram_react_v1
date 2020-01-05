import React,{useState,useEffect} from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
const Container = styled.div`
height: 100%;
  display: flex;
  align-items: center;
  justify-content: center; 
   `;
const Mini = styled.div`
  padding:2%;
      `;
const ContainerPhoto= styled.div`
        display:flex;
        flex-wrap:wrap;
        align-items: center;
        margin:1%;
        justify-content: center;                 
        `;
const BodyWrap= styled.div`
       margin: 2% 10%;

`;

export default function Body() {
    const[photos, setPhotos] =useState([])
  useEffect(() =>{ axios
                   .get('https://jsonplaceholder.typicode.com/photos')
                   .then(res=> {
                     console.log(res)
                     setPhotos(res.data)
                   })
                   .catch(err =>{
                     console.log(err)
                   })  
  },[]);
    //console.log(photos);
    return (
        <BodyWrap>       
        <div>
        <Container>
            <Mini>POSTS</Mini>
            <Mini>IGTV</Mini>
            <Mini>SAVED</Mini>
            <Mini>TAGGED</Mini>
        </Container>
        <ContainerPhoto>       
            {photos.map(photo =>(
            <p key ={photo.id}>
            <img src={photo.url} height="400" width="400"/></p>
            ))}
        </ContainerPhoto>
        </div>       
        </BodyWrap>
    )
}

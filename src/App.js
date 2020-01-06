import React , {useState, useEffect} from 'react';
import Header from './components/Header'
import Body from './components/Body'
import styled from '@emotion/styled';
import TopHeader from './components/TopHeader'
import './App.css';
const Container = styled.div`
align-items: center;
  `;

function App() {
  
  return (
    <>
  <Container>     
   <TopHeader/>
   <hr/>
   </Container>
   <Header/>  
   <Body />  
 
  </>
  );
}
export default App;

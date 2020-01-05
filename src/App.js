import React , {useState, useEffect} from 'react';
import Header from './components/Header'
import Body from './components/Body'
import styled from '@emotion/styled';
import './App.css';
const Container = styled.div`
  background-color: #ededed;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

function App() {
  
  return (
  <>  
  
   <Header/>  
   <Body />  
 
  </>
  );
}
export default App;

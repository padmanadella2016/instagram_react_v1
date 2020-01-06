import React from 'react'
import styled from '@emotion/styled';


const Searchbarcontainer = styled.div`
align-items: center;
justify-content: center;
display: flex;
height: 100%;
width:100%;
`;



const Logoandtext = styled.div`
    display: flex;
    align-items: center;
    margin: 0 40% 0 10%;
    max-height: 50px;
    
    `;


export default function TopHeader() {
    return (
        <div>
            <Searchbarcontainer>
            <Logoandtext>
                <i className="fab fa-instagram"></i>
                <h1 className='logo-text'>Instagram</h1>
            </Logoandtext>
            <div>
            {/* <form onSubmit={props.filterComments} className="search"> */}
            <form className="search">
                <input className="search-input" 
                type="text" placeholder="Search.." 
                name="search"               
                />            
            </form>
            </div>
            <div className='icons'>
                <i className="far fa-compass"></i>
                <i className="far fa-heart"></i>
                <i className="far fa-user"></i>
            </div>
        </Searchbarcontainer>
        </div>
    )
}

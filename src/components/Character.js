import React from 'react';
import styled, { keyframes } from 'styled-components';


const kf = keyframes`
  50% {
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

const StyledDetails = styled.div`
    color: #ffe81f;
    width: 35%;
    height: 30vh;
    text-align: center;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    margin-left: 35%;
    margin-bottom: 5%;
    padding: 2%;
    background-color: #000;
    border-radius: 10%;
    border: 1px solid #fff;

    transform: scale(2);
    opacity: 0; 
    animation: ${kf} 0.3s ease-in-out forwards;

    h1 {
        font-size: 2.5rem;
    }

    h3 {
        font-size: 2rem;
    }
`


export default function Character(props) {
    const { data } =props;

    return (
            <StyledDetails>
                <h1>{data.name}: Born in {data.birth_year}</h1>
                <h3>{data.gender}</h3>
                <h3>{data.height}</h3>
                <h3>{data.hair_color}</h3>
                </StyledDetails>
    )
}

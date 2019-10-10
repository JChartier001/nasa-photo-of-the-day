import React from "react";
import styled from "styled-components";



export const TitleH1 = styled.div`
    background-color: #282c34;
    height: 50vh;;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.5rem;
    color: white;
`;

export const Date = styled.p`
    font-size: 2.0rem;
    font-weight:bold;
`;

export const Explanation = styled.p`
margin: 0 10%;
display:flex;
justify-content: center;
font-size: 1.5rem;
font-style: italic;
text-align: center;
color: #7B68EE;
`;

export const Image = styled.img`
    max-width: 800 px;
    margin: 5%;
    // border: 10 px solid red;
    border-radius:100px;
    
`;
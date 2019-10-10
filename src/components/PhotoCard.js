import React from "react";
import styled from "styled-components";
import {TitleH1, Date, Explanation, Image} from "./styles";





const PhotoCard = props => {
    console.log(props);
    return(
        <div className ="photo-card" >

            <TitleH1>NASA Photo of the Day</TitleH1>
            
            <Date>Date: {props.date}</Date>
            <Explanation> {props.explanation}</Explanation>
            <Image src={props.hdurl}></Image>
        </div>

       
    )
}

export default PhotoCard;
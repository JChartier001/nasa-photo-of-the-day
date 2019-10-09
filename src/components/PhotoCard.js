import React from "react";

const PhotoCard = props => {
    console.log(props);
    return(
        <div className ="photo-card" >

            <h1 className="App-logo" className="App-header">NASA Photo of the Day</h1>
            <p>Date: {props.date}</p>
            <p>Explanation: {props.explanation}</p>
            <img className="dailyPhoto" alt='NASA Photo of the Day' src={props.hdurl}/>;
        </div>

       
    )
}

export default PhotoCard;
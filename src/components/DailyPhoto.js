import React, {useState, useEffect} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

export default function DailyPhoto() {
    const [photo, setPhoto] = useState([]);
    console.log("this is photo ",photo);

    useEffect(()=> {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=FYJxXbharMp7bxQaU3MGAonzwZCxA03Vh171IPt3')
        .then(response => {
            console.log(response.data);
            setPhoto(response.data);
            
        })    
        .catch(error =>{
            console.log("Data was not returned" , error)
        });
        }, [])
     return( 
        <div className="photo">
            <PhotoCard date={photo.date} explanation={photo.explanation} hdurl={photo.hdurl} title={photo.title}/>            
        </div>
    );
}
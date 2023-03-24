import React, { useState, useEffect} from "react";

export default function User(){
  const [art, setArt] = useState([])

    function nextImage() {
            fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/" + getRandom())
                      .then(res => res.json())
                      .then(response => setArt(response));
    }

  function getRandom() {
    return Math.floor(Math.random() * 10000);
  }


    if (art.primaryImage) {

        return(
        <div>
        <button onClick={() => {nextImage()}}>Next</button>
        <h1 > <a href= 'https://www.metmuseum.org/' target="_blank"> The Metropolitan Museum of Art Collection </a> </h1>
        <p> <h1>{art.title}</h1> <br/> <h2>{art.artistDisplayName}</h2> <br/> {art.period}<img src={art.primaryImage} id="pic" />  </p>
            </div>
        );
    } else {

        return(
        <div>
            {nextImage()}
         </div>
        );
    }
}
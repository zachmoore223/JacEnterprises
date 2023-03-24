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
        <h1 >The Metropolitan Museum of Art Collection</h1>
        <p> {art.title} <br/> {art.artistDisplayName} <br/> {art.period}<img src={art.primaryImage} id="pic" />  </p>
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
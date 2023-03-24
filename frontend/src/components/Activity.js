import React, { useState, useEffect } from "react";

export default function Activity(){
  const [activity, setActivity] = useState([])

function nextActivity() {
            fetch("http://www.boredapi.com/api/activity/")
                      .then(res => res.json())
                      .then(response => setActivity(response));
    }

if(activity.activity) {


    return(
    <div>
    <button onClick={() => {nextActivity()}}>Next</button>

        <h1> <a href='https://www.boredapi.com/' target="_blank">  Bored API </a> </h1>
        <p><h2>{activity.activity}</h2><br /><a href={activity.link}> {activity.link} </a> </p>
        <p><h3>Category: {activity.type}</h3></p>
        <p><h3>Number of participants: {activity.participants}</h3> </p>
        <p><h3>Cost: ${activity.price*100}</h3> </p>
    </div>
);
} else {
{nextActivity()}
}
}
import React, { useState, useEffect } from "react";

export default function Activity(){
  const [activity, setActivity] = useState([])
useEffect(() => {
        const periodicallyFetch = setInterval(
           () => fetch("http://www.boredapi.com/api/activity/")
                      .then(res => res.json())
                      .then(response => setActivity(response)),
           20000);
        return () => clearInterval(periodicallyFetch)
    }, [])

    return(
    <div>
        <h1>Activity of the day  </h1>
        <p>{activity.activity}</p>
        <p>Category: {activity.type}</p>
        <p>Member: {activity.participants} </p>
        <p>Cost: {activity.price} </p>
    </div>
);
}
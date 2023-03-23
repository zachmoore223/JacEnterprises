import React, { useState, useEffect } from "react";
import fiji from '../images/fiji-islands.jpg';

export default function Programmers() {
    const [programmer, setProgrammer] = useState([])

    useEffect(() => {
        const periodicallyFetch = setInterval(
           () => fetch("/api/users")
                      .then(res => res.json())
                      .then(response => setProgrammer(response)),
           20000);
        return () => clearInterval(periodicallyFetch)
    }, [])

    return (
        <div id="Programmer">
        <section id="section-b" class="grid-p">
        <ul>
            <li>
                <div class="card">
                    <img class="profile_pic"
                    src="https://media.licdn.com/dms/image/D5635AQHsq_DTxLPcqA/profile-framedphoto-shrink_200_200/0/1675458916420?e=1680116400&v=beta&t=7mYn5pYuAexBbOaK-ZOEkKzj1x4Ze2BqoNfpTpdt_rA"
                    alt="Jimmy_Pic" style={{height:200, width:200}} />
                    <div class="card-content">
                        <h2 class="card-title"> Jimmy McCue </h2>
                        <p><strong>Serial Entrepreneur, Astrophysicist, and Dog-Whisperer.</strong></p>
                    </div>
                </div>
            </li>
            <li>
                <div class="card">
                    <img class="profile_pic"
                    src="https://media.licdn.com/dms/image/C5603AQERoG8h8Vhmqg/profile-displayphoto-shrink_200_200/0/1576795486089?e=1684972800&v=beta&t=t-_bN9J8IoNSjo8PRMod4I8C5sQe3FjTDEOf_mJK1TI"
                    alt="Adunia_Pic" style={{height:200, width:200}} />
                    <div class="card-content">
                        <h2 class="card-title"> Adunia Tsehaie </h2>
                        <p><strong>Four-time Emmy Award Winner, Pilot and Drag-racing Championship Runner-up.</strong></p>
                    </div>
                </div>
            </li>
            <li>
                <div class="card">
                    <img class="profile_pic"
                    src="https://media.licdn.com/dms/image/D5635AQEf0mS8x2ddXA/profile-framedphoto-shrink_200_200/0/1676058598411?e=1680112800&v=beta&t=aaTKCHZwepUDHLXQFIvmq09Y717FiD22hitT_rVy4-w"
                    alt="MarQuan_Pic" style={{height:200, width:200}} />
                    <div class="card-content">
                        <h2 class="card-title"> MarQuan McCarrel </h2>
                        <p><strong>New York Times Best-Selling Author, Music Artist and Cheeseburger Eating Champion.</strong></p>
                    </div>
                </div>
            </li>
            <li>
                <div class="card">
                    <img class="profile_pic"
                    src="https://media.licdn.com/dms/image/D4D03AQEFDQH1PwBpcA/profile-displayphoto-shrink_200_200/0/1676661045624?e=1684972800&v=beta&t=djaZcHOXVjQSagE2tEcDjZcIKEDt2HAPztOvymsTZKQ"
                    alt="Zach_Pic" style={{height:200, width:200}} />
                    <div class="card-content">
                        <h2 class="card-title"> Zach Moore </h2>
                        <p><strong>Rocket Scientist, Poker Champion, and critically-acclaimed Movie Director.</strong></p>
                    </div>
                </div>
            </li>
        </ul>
        </section>

        </div>
    );
}
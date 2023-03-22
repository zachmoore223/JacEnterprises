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
        <div id="Programmers">
            <li>
                <div class="card">
                    <img src={fiji} alt="" srcset="" />
                    <div class="card-content">
                        <h3 class="card-title"> userName </h3>
                        <p>e a subset of that island's chain? so just take the opportunity to...Skip to My Cay!&trade;</p>
                    </div>
                </div>
            </li>

                ))}

        </div>
    );
}
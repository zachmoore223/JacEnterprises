import './App.css';
import redSea from './images/redsea-1-1024x768.jpg';
import Activity from './components/Activity';
import Programmers from './components/Programmers';
import User from './components/User';
import CreateUser from './components/CreateUser';
import Museum from './components/Museum';
import cavern from './images/cavern.jpg';
import fiji from './images/fiji-islands.jpg';
import trek from './images/trek-to-k2-2.jpg';
import toucan from './images/toucan-barbet.jpg';
export default function App() {
  return (
    <div className="App">
        <header id="showcase" class="grid">
            <div class="bg-image"></div>
            <div class="content-wrap">
                <User />
                <p>We are an organization that specializes in offering niche adventures dedicated to learning about Earth's various ecosystems and unique terrains. Our motto is, "Vincit Qui Se Vincit" which means, "He/she conquers who conquers him/herself."</p>
                <CreateUser />
            </div>
        </header>

        <section id="section-a" class="grid">
            <div class="content-wrap">
                <h1 class="content-title">Meet the Minds Behind Jac Enterprises</h1>
                   <Programmers />
            </div>
        </section>

       <div id="container">
        <section id="activity" class="grid">
            <div class="content-wrap">
                <Activity />
            </div>
        </section>

        <section id="museum" class="grid">
            <div class="content-wrap">
                <Museum />
            </div>
        </section>
       </div>

        <section id="section-a" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">Adventure Offerings</h2>
                <div class="content-text">
                    <p>JacKr prides itself on educating all their clients on what adventures are provided and what can be expected on a chosen adventure.  Jac is constantly changing and seeking to innovate adventures that offer the ultimate in adventure excitement in a fun and safe way.  Past adventures offered include JacKr's Spelunking!, EYA! aka Experience Your Aquarium!,  Skip 2 My Cay! aka Island Hopping, JT,B! aka Just Trek Baby!, and Twitchers! adventures.</p>
                </div>
            </div>
        </section>

        <section id="section-b" class="grid">
            <ul>
                <li>
                    <div class="card">
                        <img src={redSea} alt="" />
                        <div class="card-content">
                            <h3 class="card-title">EYA!&trade;</h3>
                            <p>Own an aquarium?  Enjoy visiting major aquariums? Love to visit the tropical fish store?  Is the answer...YES!  Come experience those questions...LIVE AND IN LIVING COLOR!</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src={cavern}  alt="" srcset="" />
                        <div class="card-content">
                            <h3 class="card-title">Spelunking!&trade;</h3>
                            <p>Sure.  The tourist caves are beautiful, fun, and unique to visit.  But why do the tourist thing when you can tame the wilds and mark new paths for future tourists to follow.</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src={fiji} alt="" srcset="" />
                        <div class="card-content">
                            <h3 class="card-title">Skip 2 My Cay!&trade;</h3>
                            <p>What's the fun in just exploring that single island you flew into?!  Why not explore a subset of that island's chain? so just take the opportunity to...Skip to My Cay!&trade;</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src={trek} alt="" srcset="" />
                        <div class="card-content">
                            <h3 class="card-title">JT,B!&trade;</h3>
                            <p>"Just Trek Baby!&trade;" is what we say here at Jac.  Come test your fortitude with treks that make you forget that the word civilization even exists. </p>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="card">
                        <img src={toucan} alt="" srcset="" />
                        <div class="card-content">
                            <h3 class="card-title">Twitchers!&trade;</h3>
                            <p>“There are approximately ten thousand species of birds on the planet and no single individual has seen them all. -Bernd Brunner”...Accept the challenge!</p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>

        <section id="section-c" class="grid">
            <div class="content-wrap">
                <h2 class="content-title">Jac will handle all your cravings for adventure</h2>
                <p>EYA!&trade;, Spelunking!&trade;, Skip 2 My Cay!&trade;, JT,B!&trade;, and Twitchers!&trade; are just a sampling of the various exhilarating and thrilling eco-friendly global outdoor adventure.</p>
            </div>
        </section>


                <section id="section-d" class="grid">
                    <div class="box">
                        <h2 class="content-title">Contact Us</h2>
                        <p>2645 N High Street Columbus, OH 43202</p>
                        <p>1.844.932.2626</p>
                        <p>greatadventures@jac.biz</p>
                    </div>
                    <div class="box">
                        <h2 class="content-title">About Our Company</h2>
                        <p>Founded in 2019 by a group of wild and crazy individuals for a tremendous love for the great outdoors and the many adventures the Earth has to offer.  These fab people chose to start guiding friends, family, and co-workers on the many adventures that they had experienced over their many years.  And due to the number of requests for guiding, <strong>Jac</strong> was born.</p>
                    </div>
                </section>

    </div>
  );
}

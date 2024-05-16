import React from 'react';
import "./homepage.scss";
import yoga from "../assets/pexels-photo-1472887.jpeg";
import äldre from "../assets/älder-1080548636-2048x2048.jpg";
import cykel from "../assets/cykel-2158963.jpeg";
import barn from "../assets/barn-photo-296301.jpeg";

const HomePage = () => {
  return (
    <div className="container">
      <aside className="aside">
        <div>
          <h2>Aktiviteter för veckan</h2>
          <img src={yoga} alt="yoga" width={250} height={250} />
          <div>
            <h2>Yoga</h2>
            <p>info</p>
          </div>
        </div>
        <div>
          <img src={äldre} alt="äldre" width={250} height={250} />
          <div>
            <h2>Äldreträff</h2>
            <p>info</p>
          </div>
        </div>
        <div>
          <img src={cykel} alt="cykel" width={250} height={250} />
          <div>
            <h2>Cykeltur</h2>
            <p>info</p>
          </div>
        </div>
        <div>
          <img src={barn} alt="barn" width={250} height={250} />
          <div>
            <h2>Barnaktivitet</h2>
            <p>info</p>
          </div>
        </div>
      </aside>
      <div className="main">
        <div>
          <h1>Välkommen till till Borås akyivitets kompassen</h1>
          <img src="" alt="" />
        </div>
        <div>
          <p>
            Välkommen till min info-sida bredvid asiden. Här kan du lägga all
            din information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

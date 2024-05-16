import React from "react";
import "./homepage.scss";
import yoga from "../assets/pexels-photo-1472887.jpeg";
import äldre from "../assets/älder-1080548636-2048x2048.jpg";
import cykel from "../assets/cykel-2158963.jpeg";
import barn from "../assets/barn-photo-296301.jpeg";
import front from "../assets/front.webp";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="container">
      <aside className="aside">
        <h3>Aktiviteter för veckan</h3>
        <div className="asidecontainer">
          <img src={yoga} alt="yoga" width={250} height={250} />
          <h2>Yoga</h2>
          <p>17/5 kl: 18:00</p>
        </div>
        <div className="asidecontainer">
          <img src={äldre} alt="äldre" width={250} height={250} />
          <h2>Äldreträff</h2>
          <p>info</p>
        </div>
        <div className="asidecontainer">
          <img src={cykel} alt="cykel" width={250} height={250} />
          <h2>Cykeltur</h2>
          <p>info</p>
        </div>
        <img src={barn} alt="barn" width={250} height={250} />
        <div className="asidecontainer">
          <h2>Barnaktivitet</h2>
          <p>info</p>
        </div>
      </aside>
      <div className="main">
        <div className="front">
          <h1>Välkommen till Aktivitets kompassen Borås</h1>
          <img src={front} alt="front" width={"75%"} height={250} />
        </div>
        <Link className="link" to={"/activitys"}>Hitta Aktiviteter</Link>
        <div className="info">
          <div className="infoitem" >
            <p className="infofirst">
              Aktivitets-Kompassen är din ultimata guide till att upptäcka
              spännande och engagerande aktiviteter i Borås. Oavsett om du är en
              lokalinvånare som letar efter nya sätt att spendera din fritid
              eller en besökare som vill utforska staden, så har vi något för
              dig.
            </p>
          </div>
        </div>

        <div className="info">
          <div className="infoitem">
            <h2>Hitta Aktiviteter:</h2>
            <p>
              Bläddra bland ett brett utbud av aktiviteter som arrangeras av
              Borås invånare och organisationer. Från yoga i parken till
              matlagningskurser och fotbollsmatcher, det finns något för alla
              intressen och åldrar. Anmäl dig enkelt till de aktiviteter som
              fångar ditt intresse och gör dig redo att delta och ha kul!
            </p>
          </div>
          <div className="infoitem">
            <h2>Skapa Din Egen Aktivitet:</h2>
            <p>
              Har du en fantastisk idé för en aktivitet som du vill dela med
              andra? Skapa din egen aktivitet och bjud in andra Borås-invånare
              att delta! Oavsett om det är en picknick i en lokal park, en
              gemensam promenad i stadens vackra omgivningar eller ett
              musikevenemang, så är Aktivitets-Kompassen den perfekta platsen
              att locka medlemmar och organisera din aktivitet.
            </p>
          </div>
          <div className="infoitem">
            <h2>Hitta Aktiviteter:</h2>
            <p>
              Bläddra bland ett brett utbud av aktiviteter som arrangeras av
              Borås invånare och organisationer. Från yoga i parken till
              matlagningskurser och fotbollsmatcher, det finns något för alla
              intressen och åldrar. Anmäl dig enkelt till de aktiviteter som
              fångar ditt intresse och gör dig redo att delta och ha kul!
            </p>
          </div>
          <div className="infoitem">
            <h2>Varför Använda Aktivitets-Kompassen?</h2>
            <p>
              Upptäck mångfalden av aktiviteter som Borås har att erbjuda, allt
              på ett och samma ställe. Anmäl dig enkelt till aktiviteter som
              intresserar dig och skapa din egen aktivitet för att träffa nya
              människor och dela dina intressen. Bygg gemenskap och samhörighet
              genom att delta i eller arrangera aktiviteter med andra
              Borås-invånare. Gör Dig Redo Att Upptäcka Borås På Ett Nytt Sätt!
              Bläddra bland vårt utbud av aktiviteter och börja planera dina
              äventyr i Borås idag. Oavsett om du är ute efter att prova på
              något nytt eller bara vill ha kul med nya vänner,
              Aktivitets-Kompassen är din vägvisare till en livlig och
              engagerande fritid i Borås!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

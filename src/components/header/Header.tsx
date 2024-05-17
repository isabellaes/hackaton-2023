import logga from "../../assets/simple-wind-rose.png";
import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        <div className="title">
          <h1>Aktivitetskompassen</h1>
          <h2>Borås</h2>
        </div>
        <img className="compass-img" src={logga} alt="compass" />
      </div>
      <div>
        <Navbar/>
      </div>
   

    </div>
  );
};

export default Header;

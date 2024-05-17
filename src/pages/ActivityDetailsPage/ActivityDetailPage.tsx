import yogaImg from "../../assets/yoga.jpg";
import "./ActivityDetailsPage.scss";
import { Link } from "react-router-dom";

const ActivityDetailsPage = () => {
  return (
    <div className="ActivityDetailsPage">
      <div className="img-box">
        <img style={{ width: "20rem", height: "20rem" }} src={yogaImg} alt="" />
      </div>
      <div className="activity-box">
        <h1>Aktivitet: Yoga</h1>
        <h3>Plats: Yogacentrum</h3>
        <h3>Tid: 18:00 - 18:50</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quos
          laborum dolorem accusamus odio rerum, consequatur hic repudiandae{" "}
          <br /> cumque dolorum optio deserunt reprehenderit ut minima amet
          quibusdam. <br /> Praesentium doloremque quis quos.
        </p>

        <h3>Antal anmälda platser 11/20</h3>
        <Link to={"/booking"}>
          {" "}
          <button> Hitta tider</button>
        </Link>
      </div>
    </div>
  );
};

export default ActivityDetailsPage;

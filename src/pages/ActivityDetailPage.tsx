import yogaImg from "../assets/yoga.jpg";

const ActivityDetailsPage = () => {
  return (
    <div className="ActivityDetailsPage">
      <div className="activity-box">
        <img style={{ width: "2rem", height: "2rem" }} src={yogaImg} alt="" />
        <h1>Aktivitet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quos
          laborum dolorem accusamus odio rerum, consequatur hic repudiandae{" "}
          <br /> cumque dolorum optio deserunt reprehenderit ut minima amet
          quibusdam. <br /> Praesentium doloremque quis quos.
        </p>

        <h3>Antal anmälda platser 11/20</h3>
        <button
          onClick={() => {
            console.log("klick :)");
          }}
        >
          Anmäl dig här
        </button>
      </div>
    </div>
  );
};

export default ActivityDetailsPage;

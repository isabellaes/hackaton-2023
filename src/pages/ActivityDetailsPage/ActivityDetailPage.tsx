import yogaImg from "../../assets/yoga.jpg";
import "./ActivityDetailsPage.scss";
import Form from "../../Form/Form";
import Modal from "../../Modal/Modal";
import { useState } from "react";

const ActivityDetailsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="ActivityDetailsPage">
      <div className="img-box">
        <img style={{ width: "20rem", height: "20rem" }} src={yogaImg} alt="" />
      </div>
      <div className="activity-box">
        <h1>Aktivitet</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quos
          laborum dolorem accusamus odio rerum, consequatur hic repudiandae{" "}
          <br /> cumque dolorum optio deserunt reprehenderit ut minima amet
          quibusdam. <br /> Praesentium doloremque quis quos.
        </p>

        <h3>Antal anmälda platser 11/20</h3>
        <button onClick={() => setOpen(true)}>Anmäl dig här</button>

        {open ? (
          <Modal>
            <Form onClose={() => setOpen(false)} />
          </Modal>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default ActivityDetailsPage;

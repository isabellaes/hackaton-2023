import { useState } from "react";
import "./ActivityDateCalender.scss";
import Calender from "./Calender/Calender";
import ActivityList from "../ActivityList/ActivityList";
import Form from "../../Form/Form";
import Modal from "../../Modal/Modal";
const ActivityDateCalender = () => {
  const [date, setDate] = useState("");
  const setDateChosed = (date: string) => {
    setDate(date);
  };

  const [showForm, setShowForm] = useState(false);
  const setShowFormHandler = () => {
    setShowForm(!showForm);
  };
  const [open, setOpen] = useState(false);
  return (
    <section className="activity-date-calender">
      <div className="calender">
        <Calender setDateChosed={setDateChosed} />
        {date && (
          <div>
            <ActivityList setShowFormHandler={setShowFormHandler} />
          </div>
        )}
      </div>
      {showForm && (
        <Form
          onSubmit={() => {
            setShowForm(false);
            setOpen(true);
          }}
          onClose={() => {
            setShowForm(false);
          }}
        />
      )}
      {open ? (
        <Modal>
          <div className="confirmation">
            <h1>Tack för din bokning!</h1>
            <button onClick={() => setOpen(false)}>Close</button>
          </div>
        </Modal>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ActivityDateCalender;

import Form from "../Form/Form";
import Modal from "../Modal/Modal";
import { useState } from "react";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => setOpen(true)}>Open modal</button>
      {open ? (
        <Modal>
          <Form onClose={() => setOpen(false)} />
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;

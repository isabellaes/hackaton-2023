import "./form.scss";

type FormProps = {
  onClose: () => void;
  onSubmit: () => void;
};

const Form = ({ onClose, onSubmit }: FormProps) => {
  return (
    <form className="form">
      <h2>Anmäl dig till aktivitet</h2>
      <label htmlFor="name">Namn: </label>
      <input type="text" id="name" />
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" />
      <label htmlFor="age">Ålder: </label>
      <input type="date" name="" id="age" />
      <div className="buttons">
        <button onClick={onSubmit}>Skicka</button>
        <button className="close-btn" onClick={onClose}>
          Avbryt
        </button>
      </div>
    </form>
  );
};

export default Form;

import { ReactNode } from "react";
import "./modal.scss";

type ModalProps = {
  children: ReactNode;
};

const Modal = ({ children }: ModalProps) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

export default Modal;

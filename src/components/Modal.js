import React from "react";
import ReactDOM from "react-dom";
import { TodoContext } from "./TodoContext";
import '../styles/Modal.css';

function Modal({ children }) {
  const { setOpenModal } = React.useContext(TodoContext)
  const onCancel = (event) => {
    if (event.target.classList.contains('ModalBackground')) {
      setOpenModal(false)
    }
    event.nativeEvent.stopImmediatePropagation()
  }
    return ReactDOM.createPortal(
      <div className="ModalBackground"
      onClick={onCancel}>
        {children}
      </div>,
      document.getElementById('modal')
    );
}

export { Modal }
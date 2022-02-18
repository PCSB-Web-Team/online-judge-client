import React from "react";
import CustomModal from "./CustomModal";

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;

  return (
    <div className="bg-black bg-opacity-50 overlay justify-center">
      {children}
    </div>
  );
};

export default Modal;

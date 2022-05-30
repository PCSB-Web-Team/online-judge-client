import React from "react";

const Modal = ({ open, children }) => {
  if (!open) return null;

  return (
    <div className="bg-black bg-opacity-50 overlay justify-center">
      {children}
    </div>
  );
};

export default Modal;

import React from 'react';
import './../../styles/form.css';

const ModalWrapper = ({ children, isVisible = true, onClose }) => {
  return (
    <div className={`modal-wrapper d-flex ai-center jc-center ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="modal-content">
        <div className="d-flex fd-row jc-between">
          <span className="modal-wrapper-title">
            какой то текст заголовок
          </span>
          <span className="modal-close" onClick={onClose}>Закрыть</span>
        </div>
        <div className="modal-form-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;

import React from 'react';
import './../../styles/form.css';

const ModalWrapper = ({ children, isVisible = true, onClose, title }) => {
  return (
    <div className={`modal-wrapper d-flex ai-center jc-center ${isVisible ? 'visible' : 'hidden'}`}>
      <div className="modal-form">
        <div className="d-flex fd-row jc-between">
          <span className="modal-form-title">
            {title}
          </span>
          <span className="modal-form-close" onClick={onClose}>
            Закрыть
          </span>
        </div>
        <div className="modal-form-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ModalWrapper;

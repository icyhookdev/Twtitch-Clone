import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ title, children, actionButton, onDismiss, onNext }) => {
  return ReactDOM.createPortal(
    <div onClick={onDismiss} className="ui dimmer modals visible active">
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header h_title">{title}</div>
        <div className="content">{children}</div>
        <div className="actions">
          <button className="ui primary button bt-size" onClick={onNext}>
            {actionButton}
          </button>
          <button onClick={onDismiss} className="ui red button bt-size">
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;

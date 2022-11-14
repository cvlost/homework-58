import React, {useRef} from 'react';
import {ButtonConfig} from "../../types";
import {CSSTransition} from "react-transition-group";
import BackDrop from "../BackDrop/BackDrop";
import './Modal.css';

interface Props extends React.PropsWithChildren {
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  btnConfig?: ButtonConfig[];
}

const Modal: React.FC<Props> = ({show, title, onClose, children, btnConfig}) => {
  let footer: React.ReactNode | null = null;

  if (btnConfig) {
    footer = (
      <div className="modal-footer">
        {btnConfig.map((conf) => (
          <button
            key={conf.id}
            type="button"
            className={`btn btn-${conf.type}`}
            onClick={conf.onClick}
          >
            {conf.label}
          </button>
        ))}
      </div>
    );
  }

  const nodeRef = useRef(null);

  return (
    <>
      <BackDrop show={show}/>

      <CSSTransition
        nodeRef={nodeRef}
        timeout={500}
        in={show}
        classNames="Modal"
      >
        <div
          className="modal show"
          style={{display: 'none'}}
          onClick={onClose}
          ref={nodeRef}
        >
          <div className="modal-dialog" onClick={e => e.stopPropagation()}>
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title fs-5">{title}</div>
                <button type="button" className="btn-close" onClick={onClose}></button>
              </div>
              {children}
              {footer}
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  );
};

export default Modal;
import React from 'react';
import BackDrop from "../BackDrop/BackDrop";
import {ButtonConfig} from "../../types";

interface Props extends React.PropsWithChildren{
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

  return (
    <>
      <BackDrop show={show}/>
      <div
        className="modal show"
        style={{display: show ? 'block' : 'none'}}
        onClick={onClose}
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
    </>
  );
};

export default Modal;
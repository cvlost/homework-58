import React, {useRef} from 'react';
import {CSSTransition} from 'react-transition-group';
import './Backdrop.css';

interface Props {
  show: boolean;
  onClick?: React.MouseEventHandler;
}

const BackDrop: React.FC<Props> = ({show, onClick}) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={show}
      timeout={500}
      classNames="Backdrop"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="modal-backdrop"
        onClick={onClick}
        style={{display: 'none'}}
      />
    </CSSTransition>
  );
};

export default BackDrop;
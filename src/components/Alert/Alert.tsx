import React, {useRef} from 'react';
import {CSSTransition} from "react-transition-group";
import './Alert.css';

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss: React.MouseEventHandler;
  clickDismissible?: boolean;
}

const Alert: React.FC<Props> = (props) => {
  let closeBtn: React.ReactNode | null = null;

  if (!props.clickDismissible) {
    closeBtn = <button onClick={props.onDismiss} type="button" className="btn-close"></button>;
  }

  const nodeRef = useRef(null);

  return (
    <CSSTransition
      nodeRef={nodeRef}
      classNames='Alert'
      timeout={400}
      in={props.show}
      unmountOnExit
      appear={true}
    >
      <div
        ref={nodeRef}
        className={`alert alert-${props.type} alert-dismissible`}
        onClick={!props.clickDismissible ? undefined : props.onDismiss}
      >
        {props.children}
        {closeBtn}
      </div>
    </CSSTransition>
  );
};

export default Alert;
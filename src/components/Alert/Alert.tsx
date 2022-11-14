import React from 'react';

interface Props extends React.PropsWithChildren {
  show: boolean;
  type: string;
  onDismiss: React.MouseEventHandler;
  clickDismissible?: boolean;
}

const Alert: React.FC<Props> = ({
  show,
  type,
  onDismiss,
  clickDismissible,
  children
}) => {
  let closeBtn: React.ReactNode | null = null;

  if (clickDismissible !== undefined) {
    closeBtn = <button onClick={onDismiss} type="button" className="btn-close"></button>;
  }


  return (
    <div
      className={`alert alert-${type} alert-dismissible fade ${show ? 'show' : ''}`}
      onClick={clickDismissible === undefined ? onDismiss : undefined}
    >
      {children}
      {closeBtn}
    </div>
  );
};

export default Alert;
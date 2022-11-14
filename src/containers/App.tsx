import React, {useState} from 'react';
import {ButtonConfig} from "../types";
import Modal from "../components/Modal/Modal";
import Alert from "../components/Alert/Alert";

function App() {
  const [modals, setModals] = useState<boolean[]>(new Array(2).fill(false));
  const [alerts, setAlerts] = useState<boolean[]>(new Array(8).fill(true));

  const showModal = (index: number) => {
    setModals(prev => prev.map((v, i) => i === index ? true : v));
  }

  const closeModal = (index: number) => {
    setModals(prev => prev.map((v, i) => i === index ? false : v));
  }

  const showAllAlerts = () => setAlerts(prev => prev.map(() => true));

  const closeAlert = (index: number) => {
    setAlerts(prev => prev.map((v, i) => i === index ? false : v));
  };

  const isResetDisabled = () => alerts.every((v) => v);


  const btnConfig: ButtonConfig[] = [
    {id: '1', type: 'primary', label: 'Continue', onClick: () => alert('You clicked "Continue" button!')},
    {
      id: '2', type: 'danger', label: 'Close', onClick: () => {
        closeModal(1)
      }
    }
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="text-center border-bottom mb-4 p-2">Demo: Modal & Alert</h2>
          <h3 className="mb-3">Modal</h3>
          <div className="mb-5">
            <div className="border p-3">
              <h4>1. Simple modal</h4>
              <p>The button below will show an example of a simple modal. There are 2
                options to close it: 1 - click anywhere out of the dialog window,
                2 - click the close button at the top-right of the dialog.</p>
              <button className="btn btn-primary mb-5" onClick={() => showModal(0)}>Simple Modal</button>
              <h4>2. Modal with buttons</h4>
              <p>The next example of a modal window has the same functionality as previous one but also includes 2
                additional buttons. By default, the first one calls windows.alert and
                the second closes the modal.</p>
              <button className="btn btn-primary" onClick={() => showModal(1)}>Modal with Buttons</button>
            </div>
          </div>
          <h3 className="mb-3">Alert</h3>
          <div className="">
            <div className="border p-3 mb-3">
              <p>You can click the button below after you close some of following alerts in order to see hidden ones
                again.</p>
              <button className="btn btn-primary mb-3" disabled={isResetDisabled()} onClick={showAllAlerts}>Show all
                Alerts
              </button>
              <h4>Option 1</h4>
              <p>A simple alert allows you to provide some important information or notifications. In order to close it
                you can click anywhere within this alert.</p>
              <Alert show={alerts[4]} type="primary" clickDismissible onDismiss={() => {
                closeAlert(4)
              }}>Lorem ipsum dolor sit amet. Lorem dolor.</Alert>
              <Alert show={alerts[5]} type="success" clickDismissible onDismiss={() => {
                closeAlert(5)
              }}>Lorem ipsum dolor sit amet. Lorem ipsum dolor.</Alert>
              <Alert show={alerts[6]} type="danger" clickDismissible onDismiss={() => {
                closeAlert(6)
              }}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.</Alert>
              <Alert show={alerts[7]} type="warning" clickDismissible onDismiss={() => {
                closeAlert(7)
              }}>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur.</Alert>
              <h4 className="mt-5">Option 2. Alert with a close button</h4>
              <p>This example shows similar alert but with a close button. Unlike the preceding one this alert can be
                closed only by clicking the button.</p>
              <Alert show={alerts[0]} type="primary" onDismiss={() => {
                closeAlert(0)
              }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Alert>
              <Alert show={alerts[1]} type="success" onDismiss={() => {
                closeAlert(1)
              }}>Lorem ipsum dolor sit amet, consectetur adipisicing.</Alert>
              <Alert show={alerts[2]} type="danger" onDismiss={() => {
                closeAlert(2)
              }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fugit nesciunt nobis tempora
                vero..</Alert>
              <Alert show={alerts[3]} type="warning" onDismiss={() => {
                closeAlert(3)
              }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quibusdam!</Alert>
            </div>
          </div>
        </div>
      </div>
      <Modal show={modals[0]} title="Simple modal" onClose={() => closeModal(0)}>
        <div className="modal-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur <strong>adipisicing elit</strong>.
            A aspernatur consequuntur deleniti eaque eligendi harum itaque nihil quaerat quisquam velit.
          </p>
          <p>Lorem ipsum dolor sit amet, <em>consectetur</em> adipisicing elit. Minus, odio.</p>
        </div>
      </Modal>
      <Modal show={modals[1]} title="Modal with buttons" onClose={() => closeModal(1)} btnConfig={btnConfig}>
        <div className="modal-body">
          <p>Lorem ipsum dolor sit amet, <em>consectetur</em> adipisicing elit. Minus, odio.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur <strong>adipisicing elit</strong>.
            A aspernatur consequuntur deleniti eaque eligendi harum itaque nihil quaerat quisquam velit.
          </p>
        </div>
      </Modal>
    </>
  );
}

export default App;

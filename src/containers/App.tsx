import React, {useState} from 'react';
import Modal from "../components/Modal/Modal";
import {ButtonConfig} from "../types";
import Alert from "../components/Alert/Alert";

function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const [showAlert1, setShowAlert1] = useState(true);
  const [showAlert2, setShowAlert2] = useState(true);
  const [showAlert3, setShowAlert3] = useState(true);

  const openModal1 = () => setShowModal1(true);
  const openModal2 = () => setShowModal2(true);

  const cancel1 = () => setShowModal1(false);
  const cancel2 = () => setShowModal2(false);

  const onModalBtnClick = () => alert('You clicked "Continue" button!');

  const openAlert1 = () => {
  };
  const openAlert2 = () => {
  };

  const closeAlert1 = () => setShowAlert1(false);
  const closeAlert2 = () => setShowAlert2(false);
  const closeAlert3 = () => setShowAlert3(false);

  const btnConfig: ButtonConfig[] = [
    {id: '1', type: 'primary', label: 'Continue', onClick: onModalBtnClick},
    {id: '2', type: 'danger', label: 'Close', onClick: cancel2}
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Demo</h1>

          <div className="border p-3">
            <h2>Modal</h2>
            <div className="border p-2">
              <p>Launch Modal</p>
              <button className="btn btn-primary" onClick={openModal1}>Show Modal</button>
              <button className="btn btn-primary" onClick={openModal2}>Modal with additional button</button>
            </div>
          </div>

          <div className="border p-3">
            <h2>Alert</h2>
            <div className="border p-2">
              <p>Show alert</p>
              <button className="btn btn-primary mb-3">Add</button>
              <Alert show={showAlert1} type="warning" onDismiss={closeAlert1}>Alert 1 asdfasdf</Alert>
              <Alert show={showAlert2} type="success" onDismiss={closeAlert2}>Alert 2 sdfasdfasdf</Alert>
              <Alert show={showAlert3} type="danger" clickDismissible onDismiss={closeAlert3}>Alert 3 sdfasdfasdf</Alert>
            </div>
          </div>

        </div>
      </div>
      <Modal show={showModal1} title="Demo" onClose={cancel1}>
        <div className="modal-body">some text</div>
      </Modal>
      <Modal show={showModal2} title="Demo" onClose={cancel2} btnConfig={btnConfig}>
        <div className="modal-body">some text</div>
      </Modal>
    </>
  );
}

export default App;

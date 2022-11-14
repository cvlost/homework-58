import React, {useState} from 'react';
import Modal from "../components/Modal/Modal";
import {ButtonConfig} from "../types";

function App() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  const openModal1 = () => setShowModal1(true);
  const cancel1 = () => setShowModal1(false);

  const openModal2 = () => setShowModal2(true);
  const cancel2 = () => setShowModal2(false);

  const btnConfig: ButtonConfig[] = [
    {id: '1', type: 'primary', label: 'Continue', onClick: cancel2},
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
              <button className="btn btn-primary">Add</button>
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

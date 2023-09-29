import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './howtoplaymodal.css';
import { ThemeContext } from '../../App';

function Howtoplaymodal(props) {
  // const [show, setShow] = useState(true);
  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  const { show, handleClose, handleShow } = useContext(ThemeContext);

  return (
    <div id="modal">
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>How To Play</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <h4>Guess the Wordle in 6 tries.</h4>
            <ul>
              <li>Each guess must be a valid 5-letter word.</li>
              <li>
                The color of the tiles will change to show how close your guess
                was to the word.
              </li>
            </ul>
            <div>
              <p>
                <strong>Examples:</strong>
              </p>

              <div className="my-3">
                <div>
                  <span className="badge correct-badge">L</span>
                  <span className="badge light-badge">U</span>
                  <span className="badge light-badge">N</span>
                  <span className="badge light-badge">C</span>
                  <span className="badge light-badge">H</span>
                </div>
                <strong>L</strong> is in the word and in the correct spot.
              </div>

              <div className="my-3">
                <div>
                  <span className="badge light-badge">T</span>
                  <span className="badge present-badge">O</span>
                  <span className="badge light-badge">W</span>
                  <span className="badge light-badge">E</span>
                  <span className="badge light-badge">L</span>
                </div>
                <strong>O</strong> is in the word but in the wrong spot.
              </div>

              <div className="my-3">
                <div>
                  <span className="badge light-badge">O</span>
                  <span className="badge light-badge">T</span>
                  <span className="badge light-badge">H</span>
                  <span className="badge light-badge">E</span>
                  <span className="badge wrong-badge">R</span>
                </div>
                <strong>R</strong> is not in the word in any spot.
              </div>

              <p>A new puzzle is released daily.</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Howtoplaymodal;

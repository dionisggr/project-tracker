import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

export default function Privacy() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='modal' id='privacy'>
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h4 className='modal-title'>Privacy Policy</h4>
            <button type='button' className='close' data-dismiss='modal'>&times;</button>
          </div>
        </div>
        <div className='modal-body'>
          <p>Privacy content goes here</p>
        </div>
        <div className='modal-footer'>
          <button type='button' data-dismiss='modal'>Close</button>
        </div>
      </div>
    </div>
  );
};
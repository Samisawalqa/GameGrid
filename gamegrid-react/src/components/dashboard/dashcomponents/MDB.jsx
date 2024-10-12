import React, { useState } from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,
} from 'mdb-react-ui-kit';

export default function ({ id, label, options, type }) {
    const [basicModal, setBasicModal] = useState(false);

    const toggleOpen = () => setBasicModal(!basicModal);

    return (
        <>
            <button onClick={toggleOpen} className="btn-sm app-btn-secondary">Change</button>
            <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Change {label}</MDBModalTitle>
                            <button className='btn-close' color='none' onClick={toggleOpen}></button>
                        </MDBModalHeader>

                        <MDBModalBody className='text-start'>
                            {options ? <select className="form-control" name={id} id={id}>
                                {options.map((option) =>
                                    <option>{option}</option>
                                )}
                            </select> : <input type={type} name={id} className="form-control" id={id} required />}
                        </MDBModalBody>

                        <MDBModalFooter>
                            <button color='secondary' className="btn app-btn-secondary" onClick={toggleOpen}>
                                Close
                            </button>
                            <button className="btn app-btn-primary">Save changes</button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
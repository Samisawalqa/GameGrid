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

export default function ({ id, label, ...props }) {
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
                        <MDBModalBody className='text-start'><input className="form-control" id={id} {...props} /></MDBModalBody>

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
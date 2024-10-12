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
import axios from '../../../api/axios';
import { validateInput } from './InputsValidators'

export default function ({ id, label, options, type, userid }) {
    const [basicModal, setBasicModal] = useState(false);
    const [massage, setMassage] = useState('')

    function handleUpdate(event) {
        event.preventDefault();

        const fd = new FormData(event.target);
        const acquisitionChannel = fd.getAll("acquisition");
        const data = Object.fromEntries(fd.entries());
        data.acquisition = acquisitionChannel;

        const [isValid, validMassage] = validateInput(data[id], id);
        if (isValid) {

            async function updateInfo() {
                try {
                    await axios.put(`http://127.0.0.1:8001/api/user/${userid}/${id}`, data);
                    window.location.reload();
                } catch (error) {

                }
            }
            updateInfo();
        } else {
            setMassage(validMassage)
        }
    }

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

                        <form onSubmit={handleUpdate}>
                            <MDBModalBody className='text-start'>
                                {options ? <select className="form-control" name={id} id={id}>
                                    {options.map((option, index) =>
                                        <option key={index}>{option}</option>
                                    )}
                                </select> : <input type={type} name={id} className="form-control" id={id} required />}
                                <span className="text-danger text-sm">{massage}</span>
                            </MDBModalBody>

                            <MDBModalFooter>
                                <button color='secondary' className="btn app-btn-secondary" onClick={toggleOpen}>
                                    Close
                                </button>

                                <button type="submit" className="btn app-btn-primary">Save changes</button>

                            </MDBModalFooter>
                        </form>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
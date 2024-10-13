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
import { useNavigate } from 'react-router-dom';
import axios from '../../../api/axios';

export default function ({ id, name, dataType }) {
    const [basicModal, setBasicModal] = useState(false);
    const navigate = useNavigate();
    const toggleOpen = () => setBasicModal(!basicModal);

    function handleDelete(e) {
        e.preventDefault();

        const deleteObject = async () => {
            try {
                await axios.delete(`http://127.0.0.1:8001/api/${dataType}/${id}`);
                navigate(-1);
            } catch (error) {
                console.error('Error deleting user:', error);
            }
        };

        deleteObject();
    }


    return (
        <>
            <button onClick={toggleOpen} className="btn-sm btn btn-danger">Delete</button>
            <MDBModal open={basicModal} onClose={() => setBasicModal(false)} tabIndex='-1'>
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Delete User</MDBModalTitle>
                            <button className='btn-close' color='none' onClick={toggleOpen}></button>
                        </MDBModalHeader>
                        <MDBModalBody className='text-start'>Are you sure you want to delete <strong>{name}</strong>!</MDBModalBody>

                        <MDBModalFooter>
                            <form onSubmit={handleDelete}>
                                <button type="submit" className="btn btn-danger">Delete</button>
                            </form>
                            <button color='secondary' className="btn app-btn-secondary" onClick={toggleOpen}>
                                Cancel
                            </button>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
}
import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import Item from "./dashcomponents/Item";
import { Link, useNavigate, useParams } from "react-router-dom";
import MDBdelete from "./dashcomponents/MDBdelete";

export default function () {
    const [user, setUser] = useState(null); // Initialize as null
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchUser = async () => {
        try {
            const result = await axios("http://127.0.0.1:8001/user/" + id);

            if (result.data.data) {
                setUser(result.data.data); // Set the user if data is returned
            } else {
                navigate("/error"); // Navigate to error if user not found
            }
        } catch (e) {
            navigate("/error"); // Navigate to error on any API failure
        }
    }

    useEffect(() => {
        fetchUser();
    }, [id]);

    if (!user) {
        return null; // Don't render anything if user is being fetched or redirected
    }

    return <>
        <div className="app">
            <Header />
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <h1 className="app-page-title">{user.username} Details</h1>
                        <div className="row gy-4">
                            <div className="col-12 col-lg-6">
                                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                                    <div className="app-card-header p-3 border-bottom-0">
                                        <div className="row align-items-center gx-3">
                                            <div className="col-auto">
                                                <div className="app-icon-holder">
                                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                                    </svg>
                                                </div>{/*//icon-holder*/}
                                            </div>{/*//col*/}
                                            <div className="col-auto">
                                                <h4 className="app-card-title">Profile</h4>
                                            </div>{/*//col*/}
                                        </div>{/*//row*/}
                                    </div>{/*//app-card-header*/}
                                    <div className="app-card-body px-4 w-100">
                                        <Item
                                            userid={user.id}
                                            id="photo"
                                            label="Photo"
                                            value={<img className="profile-image rounded-circle" src="/assets/images/user.png" alt="" />}
                                            type="file" />

                                        <Item
                                            userid={user.id}
                                            id="name"
                                            label="name"
                                            value={user.name}
                                            type="text" />

                                        <Item
                                            userid={user.id}
                                            id="username"
                                            label="Username"
                                            value={"@" + user.username}
                                            type="text" />

                                        <Item
                                            userid={user.id}
                                            id="email"
                                            label="Email"
                                            value={user.email}
                                            type="text" />

                                        <Item
                                            userid={user.id}
                                            id="address"
                                            label="Address"
                                            value={user.address}
                                            type="text"
                                            options={["Tafila", "Amman", "Aqaba", "Karak", "Ma'an", "Zarqa", "Salt", "Irbid"]} />

                                        <Item
                                            userid={user.id}
                                            id="role"
                                            label="Role"
                                            value={user.role}
                                            type="text"
                                            options={["user", "owner"]} />

                                    </div>{/*//app-card-body*/}
                                    <div className="app-card-footer p-4 mt-auto">
                                        <MDBdelete id={user.id} name={user.name} dataType="user" />
                                        <Link to="/users" className="btn app-btn-secondary m-2">Back</Link>
                                    </div>{/*//app-card-footer*/}
                                </div>{/*//app-card*/}
                            </div>{/*//col*/}
                        </div>{/*//row*/}
                    </div>{/*//container-fluid*/}
                </div>{/*//app-content*/}
                <footer className="app-footer">
                    <div className="container text-center py-3">
                    </div>
                </footer>{/*//app-footer*/}
            </div>
        </div>
    </>
}

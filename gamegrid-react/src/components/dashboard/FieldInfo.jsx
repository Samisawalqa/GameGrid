import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import Item from "./dashcomponents/Item";
import { Link, useNavigate, useParams } from "react-router-dom";
import MDBdelete from "./dashcomponents/MDBdelete";
import FieldInfoItem from "./dashcomponents/FieldInfoItem";

export default function () {
    const [field, setField] = useState(null); // Initialize as null
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchField = async () => {
        try {
            const result = await axios("http://127.0.0.1:8001/field/" + id);

            if (result.data.data) {
                setField(result.data.data); // Set the field if data is returned
            } else {
                navigate("/error"); // Navigate to error if field not found
            }
        } catch (e) {
            navigate("/error"); // Navigate to error on any API failure
        }
    }

    useEffect(() => {
        fetchField();
    }, [id]);

    if (!field) {
        return null; // Don't render anything if user is being fetched or redirected
    }

    return <>
        <div className="app">
            <Header />
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <h1 className="app-page-title">{field.field_name} Details</h1>
                        <div className="row gy-4">
                            <div className="col-12 col-lg-6">
                                <div className="app-card app-card-account shadow-sm d-flex flex-column align-items-start">
                                    <div className="app-card-header p-3 border-bottom-0">
                                        <div className="row align-items-center gx-3">


                                        </div>{/*//row*/}
                                    </div>{/*//app-card-header*/}
                                    <div className="app-card-body px-4 w-100">


                                        <FieldInfoItem
                                            fieldid={field.id}
                                            id="field_name"
                                            label="Field name"
                                            value={field.field_name}
                                            type="text" />

                                        <FieldInfoItem
                                            fieldid={field.id}
                                            id="field_description"
                                            label="Desctiption"
                                            value={field.field_description}
                                            type="text" />

                                        <FieldInfoItem
                                            fieldid={field.id}
                                            id="field_address"
                                            label="Address"
                                            value={field.field_address}
                                            type="text"
                                            options={["Tafila", "Amman", "Aqaba", "Karak", "Ma'an", "Zarqa", "Salt", "Irbid"]} />

                                        <FieldInfoItem
                                            fieldid={field.field_capacity}
                                            id="field_capacity"
                                            label="Capacity"
                                            value={field.field_capacity}
                                            type="number"
                                            min={0} />

                                        <FieldInfoItem
                                            fieldid={field.id}
                                            id="price_per_hour"
                                            label="Price per hour"
                                            value={field.price_per_hour}
                                            type="number"
                                            min={0} />
                                        <FieldInfoItem
                                            fieldid={field.id}
                                            id="user_id"
                                            label="Owner ID"
                                            value={field.user_id}
                                            type="text" />

                                    </div>{/*//app-card-body*/}
                                    <div className="app-card-footer p-4 mt-auto">
                                        <MDBdelete id={field.id} name={field.field_name} dataType="field" />
                                        <Link to="/fields" className="btn app-btn-secondary m-2">Back</Link>
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

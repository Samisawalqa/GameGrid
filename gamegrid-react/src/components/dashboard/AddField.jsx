import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Link } from "react-router-dom";
import Input from "./dashcomponents/Input";

export default function CreateUser() {
    const [formFeedback, setFormFeedback] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault();

        const fd = new FormData(event.target);
        const acquisitionChannel = fd.getAll("acquisition");
        const data = Object.fromEntries(fd.entries());
        data.acquisition = acquisitionChannel;
        console.log(data);

        try {
            await axios.post("http://127.0.0.1:8001/api/field", data);
            setFormFeedback("Field created successfully.");
            // Reset the form fields
            event.target.reset();
        } catch (error) {
            setFormFeedback("Error creating field: " + error.message);
        }
    };

    return (
        <div className="app">
            <Header />
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <h1 className="app-page-title">New Field</h1>
                        <hr className="mb-4" />
                        <div className="row g-4 settings-section">
                            <div className="col-12 col-md-8">
                                <div className="app-card app-card-settings shadow-sm p-4">
                                    <div className="app-card-body">
                                        <form onSubmit={handleSubmit} className="settings-form">
                                            <Input id="field_name" label="Field name" type="text" required />
                                            <Input id="field_description" label="Description" type="text" required />
                                            <Input id="field_address" label="Address" type="select" options={["Tafila", "Amman", "Aqaba", "Karak", "Ma'an", "Zarqa", "Salt", "Irbid"]} />
                                            <Input id="field_capacity" label="Capacity" type="number" min="0" required />
                                            <Input id="price_per_hour" label="Price per hour" type="number" min="0" required />
                                            <Input id="user_id" label="Owner" type="text" required />
                                            <button type="submit" className="btn app-btn-primary m-1">Create Field</button>
                                            <button type="reset" className="btn app-btn-primary m-1">Reset</button>
                                            <Link to="/fields"><button type="button" className="btn app-btn-secondary m-1">Back</button></Link>
                                        </form>
                                        {/* Feedback display */}
                                        {formFeedback && (
                                            <div className={`alert ${formFeedback.includes("Error") ? "alert-danger" : "alert-success"}`} role="alert">
                                                {formFeedback}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="my-4" />
                    </div>
                </div>
                <footer className="app-footer">
                    <div className="container text-center py-3"></div>
                </footer>
            </div>
        </div>
    );
}

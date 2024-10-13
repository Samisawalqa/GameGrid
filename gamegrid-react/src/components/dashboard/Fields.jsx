import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Fields() {
    const [fields, setFields] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const fetchFields = async () => {
        try {
            const result = await axios("http://127.0.0.1:8001/fields");
            setFields(result.data.data);
        } catch (e) {
            console.error(e); // Log any errors
        }
    };

    const handleFieldSearch = (e) => {
        if (e.target.id === "search-users") {
            setSearchTerm(e.target.value);
        } else {
            setFilter(e.target.value);
        }
    };

    useEffect(() => {
        fetchFields();
    }, []);

    // Filter users based on search term and selected filter
    const filteredFields = fields.filter(field => {
        const matchesSearchTerm = field.field_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            field.field_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            field.id == searchTerm ||
            field.field_address.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filter === 'all' || field.role.toLowerCase() === filter.toLowerCase();

        return matchesSearchTerm && matchesFilter;
    });


    return <>
        <div className="app">
            <Header />
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">Fields</h1>
                            </div>
                            <div className="col-auto">
                                <div className="page-utilities">
                                    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                                        <div className="col-auto">
                                            <input onChange={handleFieldSearch} type="text" id="search-users" name="search-users" className="form-control" placeholder="Search" />
                                        </div>
                                        <div className="col-auto">
                                            <select onChange={handleFieldSearch} className="form-select w-auto">
                                                <option value="all">All</option>
                                                {/* <option value="user">Users</option>
                                                <option value="owner">Owners</option> */}
                                            </select>
                                        </div>
                                        <div className="col-auto">
                                            <Link className="btn app-btn-secondary" to="/AddField">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="2em" height="1em" fill="currentColor">
                                                    <rect x="1" y="1" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" />
                                                    <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2" fill="none" />
                                                    <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="2" />
                                                    <rect x="1" y="8" width="4" height="8" stroke="currentColor" stroke-width="2" fill="none" />
                                                    <rect x="19" y="8" width="4" height="8" stroke="currentColor" stroke-width="2" fill="none" />
                                                    <rect x="1" y="5" width="6" height="14" stroke="currentColor" stroke-width="2" fill="none" />
                                                    <rect x="17" y="5" width="6" height="14" stroke="currentColor" stroke-width="2" fill="none" />
                                                </svg>
                                                Add Field
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>{/*//row*/}
                        <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
                            <Link className="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" to="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true">All</Link>
                            <Link className="flex-sm-fill text-sm-center nav-link" id="orders-cancelled-tab" data-bs-toggle="tab" to="#orders-cancelled" role="tab" aria-controls="orders-cancelled" aria-selected="false">Cancelled</Link>
                        </nav>
                        <div className="tab-content" id="orders-table-tab-content">
                            <div className="tab-pane fade show active" id="orders-all" role="tabpanel" aria-labelledby="orders-all-tab">
                                <div className="app-card app-card-orders-table shadow-sm mb-5">
                                    <div className="app-card-body">
                                        <div className="table-responsive">
                                            <table className="table app-table-hover mb-0 text-left">
                                                <thead>
                                                    <tr>
                                                        <th className="cell">ID</th>
                                                        <th className="cell">Name</th>
                                                        <th className="cell">Description</th>
                                                        <th className="cell">Address</th>
                                                        <th className="cell">Capacity</th>
                                                        <th className="cell">Price per hour</th>
                                                        <th className="cell">Owner ID</th>
                                                        <th className="cell">Status</th>
                                                        <th className="cell" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredFields.length > 0 ? (
                                                        filteredFields.map((field) => (
                                                            field.deleted_at ? null : (
                                                                <tr key={field.id}>
                                                                    <td className="cell">{field.id}</td>
                                                                    <td className="cell">{field.field_name}</td>
                                                                    <td className="cell">{field.field_description}</td>
                                                                    <td className="cell">{field.field_address}</td>
                                                                    <td className="cell">{field.field_capacity}</td>
                                                                    <td className="cell">{field.price_per_hour}</td>
                                                                    <td className="cell">{field.user_id}</td>
                                                                    <td className="cell"><span className="badge bg-success">Active</span></td>
                                                                    <td className="cell">
                                                                        <Link className="btn-sm app-btn-secondary" to={`/field/${field.id}`}>View</Link>
                                                                    </td>
                                                                </tr>
                                                            )
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="8" className="text-center">No fields found</td>
                                                        </tr>
                                                    )}

                                                </tbody>
                                            </table>
                                        </div>{/*//table-responsive*/}
                                    </div>{/*//app-card-body*/}
                                </div>{/*//app-card*/}
                                {/*<nav className="app-pagination">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <Link className="page-link" to="#" tabIndex={-1} aria-disabled="true">Previous</Link>
                                        </li>
                                        <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                        <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                        <li className="page-item">
                                            <Link className="page-link" to="#">Next</Link>
                                        </li>
                                    </ul>
                                </nav>//app-pagination*/}
                            </div>{/*//tab-pane*/}
                            <div className="tab-pane fade" id="orders-cancelled" role="tabpanel" aria-labelledby="orders-cancelled-tab">
                                <div className="app-card app-card-orders-table mb-5">
                                    <div className="app-card-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0 text-left">
                                                <thead>
                                                    <tr>
                                                        <th className="cell">ID</th>
                                                        <th className="cell">Name</th>
                                                        <th className="cell">address</th>
                                                        <th className="cell">Status</th>
                                                        <th className="cell" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {filteredFields.length > 0 ? (
                                                        filteredFields.map((field) => (
                                                            field.deleted_at ? (
                                                                <tr key={field.id}>
                                                                    <td className="cell">{field.id}</td>
                                                                    <td className="cell">{field.field_name}</td>
                                                                    <td className="cell">{field.field_address}</td>
                                                                    <td className="cell"><span className="badge bg-danger">Cancelled</span></td>
                                                                    <td className="cell">
                                                                        <Link className="btn-sm app-btn-secondary" to={`/field/${field.id}`}>View</Link>
                                                                    </td>
                                                                </tr>
                                                            ) : null
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="8" className="text-center">No fields found</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>{/*//table-responsive*/}
                                    </div>{/*//app-card-body*/}
                                </div>{/*//app-card*/}
                            </div>{/*//tab-pane*/}

                        </div>{/*//tab-content*/}
                    </div>{/*//container-fluid*/}
                </div>{/*//app-content*/}
                <footer className="app-footer">
                    <div className="container text-center py-3">
                        <h1>footer</h1>
                    </div>
                </footer>{/*//app-footer*/}
            </div>{/*//app-wrapper*/}
        </div>
    </>
}
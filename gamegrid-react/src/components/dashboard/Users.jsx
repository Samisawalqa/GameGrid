import { useEffect, useState } from "react";
import Header from "./Header";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function () {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const result = await axios("http://127.0.0.1:8001/user")
            setUsers(result.data.data)
        } catch (e) {

        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    return <>
        <div className="app">
            <Header />
            <div className="app-wrapper">
                <div className="app-content pt-3 p-md-3 p-lg-4">
                    <div className="container-xl">
                        <div className="row g-3 mb-4 align-items-center justify-content-between">
                            <div className="col-auto">
                                <h1 className="app-page-title mb-0">Users</h1>
                            </div>
                            <div className="col-auto">
                                <div className="page-utilities">
                                    <div className="row g-2 justify-content-start justify-content-md-end align-items-center">
                                        <div className="col-auto">
                                            <form className="table-search-form row gx-1 align-items-center">
                                                <div className="col-auto">
                                                    <input type="text" id="search-orders" name="searchorders" className="form-control search-orders" placeholder="Search" />
                                                </div>
                                                <div className="col-auto">
                                                    <button type="submit" className="btn app-btn-secondary">Search</button>
                                                </div>
                                            </form>
                                        </div>{/*//col*/}
                                        <div className="col-auto">
                                            <select className="form-select w-auto">
                                                <option selected value="option-1">All</option>
                                                <option value="option-2">This week</option>
                                                <option value="option-3">This month</option>
                                                <option value="option-4">Last 3 months</option>
                                            </select>
                                        </div>
                                        <div className="col-auto">
                                            <Link className="btn app-btn-secondary" to="/AddUser">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1em" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 8s-1 0-1-1 1-4 6-4 6 3.999 6 4-1 1-1 1H3z" />
                                                </svg>
                                                Add User
                                            </Link>
                                        </div>
                                    </div>{/*//row*/}
                                </div>{/*//table-utilities*/}
                            </div>{/*//col-auto*/}
                        </div>{/*//row*/}
                        <nav id="orders-table-tab" className="orders-table-tab app-nav-tabs nav shadow-sm flex-column flex-sm-row mb-4">
                            <Link className="flex-sm-fill text-sm-center nav-link active" id="orders-all-tab" data-bs-toggle="tab" to="#orders-all" role="tab" aria-controls="orders-all" aria-selected="true">All</Link>
                            {/* <Link className="flex-sm-fill text-sm-center nav-link" id="orders-paid-tab" data-bs-toggle="tab" to="#orders-paid" role="tab" aria-controls="orders-paid" aria-selected="false">Paid</Link>
                            <Link className="flex-sm-fill text-sm-center nav-link" id="orders-pending-tab" data-bs-toggle="tab" to="#orders-pending" role="tab" aria-controls="orders-pending" aria-selected="false">Pending</Link> */}
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
                                                        <th className="cell">Username</th>
                                                        <th className="cell">email</th>
                                                        <th className="cell">address</th>
                                                        <th className="cell">role</th>
                                                        <th className="cell">Status</th>
                                                        <th className="cell" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.length > 0 ? (
                                                        users.map((user) => (user.deleted_at ? "" :
                                                            <tr key={user.id}>
                                                                <td className="cell">{user.id}</td>
                                                                <td className="cell">{user.firstname}</td>
                                                                <td className="cell">{user.username}</td>
                                                                <td className="cell">{user.email}</td>
                                                                <td className="cell">{user.address}</td>
                                                                <td className="cell">{user.role}</td>
                                                                <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                                <td className="cell">
                                                                    <Link className="btn-sm app-btn-secondary" to={"/user/" + user.id}>View</Link>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="7" className="text-center">No users found</td>
                                                        </tr>
                                                    )}
                                                    {/* <tr>
                                                        <td className="cell">#15346</td>
                                                        <td className="cell"><span className="truncate">Lorem ipsum dolor sit amet eget volutpat erat</span></td>
                                                        <td className="cell">John Sanders</td>
                                                        <td className="cell"><span>17 Oct</span><span className="note">2:16 PM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$259.35</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15345</td>
                                                        <td className="cell"><span className="truncate">Consectetur adipiscing elit</span></td>
                                                        <td className="cell">Dylan Ambrose</td>
                                                        <td className="cell"><span className="cell-data">16 Oct</span><span className="note">03:16 AM</span></td>
                                                        <td className="cell"><span className="badge bg-warning">Pending</span></td>
                                                        <td className="cell">$96.20</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15344</td>
                                                        <td className="cell"><span className="truncate">Pellentesque diam imperdiet</span></td>
                                                        <td className="cell">Teresa Holland</td>
                                                        <td className="cell"><span className="cell-data">16 Oct</span><span className="note">01:16 AM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$123.00</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15343</td>
                                                        <td className="cell"><span className="truncate">Vestibulum a accumsan lectus sed mollis ipsum</span></td>
                                                        <td className="cell">Jayden Massey</td>
                                                        <td className="cell"><span className="cell-data">15 Oct</span><span className="note">8:07 PM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$199.00</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15342</td>
                                                        <td className="cell"><span className="truncate">Justo feugiat neque</span></td>
                                                        <td className="cell">Reina Brooks</td>
                                                        <td className="cell"><span className="cell-data">12 Oct</span><span className="note">04:23 PM</span></td>
                                                        <td className="cell"><span className="badge bg-danger">Cancelled</span></td>
                                                        <td className="cell">$59.00</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15341</td>
                                                        <td className="cell"><span className="truncate">Morbi vulputate lacinia neque et sollicitudin</span></td>
                                                        <td className="cell">Raymond Atkins</td>
                                                        <td className="cell"><span className="cell-data">11 Oct</span><span className="note">11:18 AM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$678.26</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr> */}
                                                </tbody>
                                            </table>
                                        </div>{/*//table-responsive*/}
                                    </div>{/*//app-card-body*/}
                                </div>{/*//app-card*/}
                                <nav className="app-pagination">
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
                                </nav>{/*//app-pagination*/}
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
                                                        <th className="cell">Username</th>
                                                        <th className="cell">email</th>
                                                        <th className="cell">address</th>
                                                        <th className="cell">role</th>
                                                        <th className="cell">Status</th>
                                                        <th className="cell" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {users.length > 0 ? (
                                                        users.map((user) => (user.deleted_at ?
                                                            <tr key={user.id}>
                                                                <td className="cell">{user.id}</td>
                                                                <td className="cell">{user.firstname}</td>
                                                                <td className="cell">{user.username}</td>
                                                                <td className="cell">{user.email}</td>
                                                                <td className="cell">{user.address}</td>
                                                                <td className="cell">{user.role}</td>
                                                                <td className="cell"><span className="badge bg-danger">Cancelled</span></td>
                                                                <td className="cell">
                                                                    <Link className="btn-sm app-btn-secondary" to="#">View</Link>
                                                                </td>
                                                            </tr> : ""
                                                        ))
                                                    ) : (
                                                        <tr>
                                                            <td colSpan="7" className="text-center">No users found</td>
                                                        </tr>
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>{/*//table-responsive*/}
                                    </div>{/*//app-card-body*/}
                                </div>{/*//app-card*/}
                            </div>{/*//tab-pane*/}
                            {/* <div className="tab-pane fade" id="orders-paid" role="tabpanel" aria-labelledby="orders-paid-tab">
                                <div className="app-card app-card-orders-table mb-5">
                                    <div className="app-card-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0 text-left">
                                                <thead>
                                                    <tr>
                                                        <th className="cell">Order</th>
                                                        <th className="cell">Product</th>
                                                        <th className="cell">Customer</th>
                                                        <th className="cell">Date</th>
                                                        <th className="cell">Status</th>
                                                        <th className="cell">Total</th>
                                                        <th className="cell" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="cell">#15346</td>
                                                        <td className="cell"><span className="truncate">Lorem ipsum dolor sit amet eget volutpat erat</span></td>
                                                        <td className="cell">John Sanders</td>
                                                        <td className="cell"><span>17 Oct</span><span className="note">2:16 PM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$259.35</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15344</td>
                                                        <td className="cell"><span className="truncate">Pellentesque diam imperdiet</span></td>
                                                        <td className="cell">Teresa Holland</td>
                                                        <td className="cell"><span className="cell-data">16 Oct</span><span className="note">01:16 AM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$123.00</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15343</td>
                                                        <td className="cell"><span className="truncate">Vestibulum a accumsan lectus sed mollis ipsum</span></td>
                                                        <td className="cell">Jayden Massey</td>
                                                        <td className="cell"><span className="cell-data">15 Oct</span><span className="note">8:07 PM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$199.00</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                    <tr>
                                                        <td className="cell">#15341</td>
                                                        <td className="cell"><span className="truncate">Morbi vulputate lacinia neque et sollicitudin</span></td>
                                                        <td className="cell">Raymond Atkins</td>
                                                        <td className="cell"><span className="cell-data">11 Oct</span><span className="note">11:18 AM</span></td>
                                                        <td className="cell"><span className="badge bg-success">Paid</span></td>
                                                        <td className="cell">$678.26</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="orders-pending" role="tabpanel" aria-labelledby="orders-pending-tab">
                                <div className="app-card app-card-orders-table mb-5">
                                    <div className="app-card-body">
                                        <div className="table-responsive">
                                            <table className="table mb-0 text-left">
                                                <thead>
                                                    <tr>
                                                        <th className="cell">Order</th>
                                                        <th className="cell">Product</th>
                                                        <th className="cell">Customer</th>
                                                        <th className="cell">Date</th>
                                                        <th className="cell">Status</th>
                                                        <th className="cell">Total</th>
                                                        <th className="cell" />
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="cell">#15345</td>
                                                        <td className="cell"><span className="truncate">Consectetur adipiscing elit</span></td>
                                                        <td className="cell">Dylan Ambrose</td>
                                                        <td className="cell"><span className="cell-data">16 Oct</span><span className="note">03:16 AM</span></td>
                                                        <td className="cell"><span className="badge bg-warning">Pending</span></td>
                                                        <td className="cell">$96.20</td>
                                                        <td className="cell"><Link className="btn-sm app-btn-secondary" to="#">View</Link></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

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
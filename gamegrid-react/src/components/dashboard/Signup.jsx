import { Link } from "react-router-dom";

export default function () {
    return <div className="row g-0 app-auth-wrapper overflow-hidden">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
            <div className="d-flex flex-column align-content-end">
                <div className="app-auth-body mx-auto">
                    <div className="app-auth-branding mb-4"><a className="app-logo" href="index.html"><img className="logo-icon me-2 rounded-circle" src="assets/images/gamegrid-logo.png" alt="logo" /></a></div>
                    <h2 className="auth-heading text-center mb-4">Sign up to GameGrid</h2>
                    <div className="auth-form-container text-start mx-auto">
                        <form className="auth-form auth-signup-form">
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signup-email">Your Name</label>
                                <input id="signup-name" name="signup-name" type="text" className="form-control signup-name" placeholder="Full name" required="required" />
                            </div>
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signup-email">Your Username</label>
                                <input id="signup-name" name="signup-name" type="text" className="form-control signup-name" placeholder="Username" required="required" />
                            </div>
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signup-email">Your Email</label>
                                <input id="signup-email" name="signup-email" type="email" className="form-control signup-email" placeholder="Email" required="required" />
                            </div>
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signup-email">Your Address</label>
                                <input id="signup-email" name="signup-email" type="text" className="form-control signup-email" placeholder="Address" required="required" />
                            </div>
                            <div className="password mb-3">
                                <label className="sr-only" htmlFor="signup-password">Password</label>
                                <input id="signup-password" name="signup-password" type="password" className="form-control signup-password" placeholder="Create a password" required="required" />
                            </div>
                            <div className="password mb-3">
                                <label className="sr-only" htmlFor="signup-password">Confirm Password</label>
                                <input id="signup-password" name="signup-password" type="password" className="form-control signup-password" placeholder="Confirm password" required="required" />
                            </div>
                            <div className="extra mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" defaultValue id="RememberPassword" />
                                    <label className="form-check-label" htmlFor="RememberPassword">
                                        I agree to GameGrid's <a href="#" className="app-link">Terms of Service</a> and <a href="#" className="app-link">Privacy Policy</a>.
                                    </label>
                                </div>
                            </div>{/*//extra*/}
                            <div className="text-center">
                                <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Sign Up</button>
                            </div>
                        </form>{/*//auth-form*/}
                        <div className="auth-option text-center pt-5">Already have an account? <Link className="text-link" to="/login">Log in</Link></div>
                    </div>{/*//auth-form-container*/}
                </div>{/*//auth-body*/}
                <footer className="app-auth-footer">
                    <div className="container text-center py-3">
                        FOOTER
                    </div>
                </footer>{/*//app-auth-footer*/}
            </div>{/*//flex-column*/}
        </div>{/*//auth-main-col*/}
        <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
            <div className="auth-background-holder">
                <img className="img-fluid" src="assets/images/login-bg2.jpg" alt="" />
            </div>
        </div>{/*//auth-background-col*/}
    </div>


}
import { Link } from "react-router-dom";

export default function () {
    return <div className="row g-0 app-auth-wrapper overflow-hidden">
        <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center p-5">
            <div className="d-flex flex-column align-content-end">
                <div className="app-auth-body mx-auto">
                    <div className="app-auth-branding mb-4"><Link className="app-logo" to="/users"><img className="logo-icon me-2 rounded-circle" src="assets/images/gamegrid-logo.png" alt="logo" /></Link></div>
                    <h2 className="auth-heading text-center mb-5">Log in to GameGrid</h2>
                    <div className="auth-form-container text-start">
                        <form className="auth-form login-form">
                            <div className="email mb-3">
                                <label className="sr-only" htmlFor="signin-email">Email</label>
                                <input id="signin-email" name="signin-email" type="email" className="form-control signin-email" placeholder="Email address" required="required" />
                            </div>{/*//form-group*/}
                            <div className="password mb-3">
                                <label className="sr-only" htmlFor="signin-password">Password</label>
                                <input id="signin-password" name="signin-password" type="password" className="form-control signin-password" placeholder="Password" required="required" />
                                <div className="extra mt-3 row justify-content-between">
                                    <div className="col-6">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue id="RememberPassword" />
                                            <label className="form-check-label" htmlFor="RememberPassword">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>{/*//col-6*/}
                                    <div className="col-6">
                                        <div className="forgot-password text-end">
                                            <a href="reset-password.html">Forgot password?</a>
                                        </div>
                                    </div>{/*//col-6*/}
                                </div>{/*//extra*/}
                            </div>{/*//form-group*/}
                            <div className="text-center">
                                <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto">Log In</button>
                            </div>
                        </form>
                        <div className="auth-option text-center pt-5">No Account? Sign up <Link className="text-link" to="/signup">here</Link>.</div>
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
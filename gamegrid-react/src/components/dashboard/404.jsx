import { Link } from "react-router-dom";

export default function () {
    return <div className="container mb-5">
        <div className="row">
            <div className="col-12 col-md-11 col-lg-7 col-xl-6 mx-auto">
                <div className="app-branding text-center mb-5">
                    <Link className="app-logo" to="/users"><img className="rounded-circle logo-icon me-2" src="assets/images/gamegrid-logo.png" alt="logo" /><span className="logo-text">GameGrid</span></Link>
                </div>{/*//app-branding*/}
                <div className="app-card p-5 text-center shadow-sm">
                    <h1 className="page-title mb-4">404<br /><span className="font-weight-light">Page Not Found</span></h1>
                    <div className="mb-4">
                        Sorry, we can't find the page you're looking for.
                    </div>
                    <Link className="btn app-btn-primary" to="/users">Go to home page</Link>
                </div>
            </div>{/*//col*/}
        </div>{/*//row*/}
    </div>

}
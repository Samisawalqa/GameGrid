import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


export default function () {
    const location = useLocation();
    const [sidepanelIsHidden, setSidepanelIsHidden] = useState(false)
    const sidepanelToggler = (e) => {
        e.preventDefault();
        setSidepanelIsHidden(isHidden => !isHidden);
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1190) {
                setSidepanelIsHidden(false);  // Show side panel
            } else {
                setSidepanelIsHidden(true);  // Hide side panel
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <header className="app-header fixed-top">
        <div className="app-header-inner">
            <div className="container-fluid py-2">
                <div className="app-header-content">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-auto">
                            <Link id="sidepanel-toggler" onClick={sidepanelToggler} className="sidepanel-toggler d-inline-block d-xl-none" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} viewBox="0 0 30 30" role="img"><title>Menu</title><path stroke="currentColor" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={2} d="M4 7h22M4 15h22M4 23h22" /></svg>
                            </Link>
                        </div>{/*//col*/}
                        <div className="search-mobile-trigger d-sm-none col">
                            <i className="search-mobile-trigger-icon fa-solid fa-magnifying-glass" />
                        </div>{/*//col*/}
                        <div className="app-search-box col">
                            <form className="app-search-form">
                                <input type="text" placeholder="Search..." name="search" className="form-control search-input" />
                                <button type="submit" className="btn search-btn btn-primary" value="Search"><i className="fa-solid fa-magnifying-glass" /></button>
                            </form>
                        </div>{/*//app-search-box*/}
                        <div className="app-utilities col-auto">
                            <div className="app-utility-item app-notifications-dropdown dropdown">
                                <Link className="dropdown-toggle no-toggle-arrow" id="notifications-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false" title="Notifications">
                                    {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bell icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2z" />
                                        <path fillRule="evenodd" d="M8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                    </svg>
                                    <span className="icon-badge">3</span>
                                </Link>{/*//dropdown-toggle*/}
                                <div className="dropdown-menu p-0" aria-labelledby="notifications-dropdown-toggle">
                                    <div className="dropdown-menu-header p-3">
                                        <h5 className="dropdown-menu-title mb-0">Notifications</h5>
                                    </div>{/*//dropdown-menu-title*/}
                                    <div className="dropdown-menu-content">
                                        <div className="item p-3">
                                            <div className="row gx-2 justify-content-between align-items-center">
                                                <div className="col-auto">
                                                    <img className="profile-image" src="/assets/images/profiles/profile-1.png" alt />
                                                </div>{/*//col*/}
                                                <div className="col">
                                                    <div className="info">
                                                        <div className="desc">Amy shared a file with you. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </div>
                                                        <div className="meta"> 2 hrs ago</div>
                                                    </div>
                                                </div>{/*//col*/}
                                            </div>{/*//row*/}
                                            <Link className="link-mask" href="notifications.html" />
                                        </div>{/*//item*/}
                                        <div className="item p-3">
                                            <div className="row gx-2 justify-content-between align-items-center">
                                                <div className="col-auto">
                                                    <div className="app-icon-holder">
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-receipt" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
                                                            <path fillRule="evenodd" d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                                                        </svg>
                                                    </div>
                                                </div>{/*//col*/}
                                                <div className="col">
                                                    <div className="info">
                                                        <div className="desc">You have a new invoice. Proin venenatis interdum est.</div>
                                                        <div className="meta"> 1 day ago</div>
                                                    </div>
                                                </div>{/*//col*/}
                                            </div>{/*//row*/}
                                            <Link className="link-mask" href="notifications.html" />
                                        </div>{/*//item*/}
                                        <div className="item p-3">
                                            <div className="row gx-2 justify-content-between align-items-center">
                                                <div className="col-auto">
                                                    <div className="app-icon-holder icon-holder-mono">
                                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                                                        </svg>
                                                    </div>
                                                </div>{/*//col*/}
                                                <div className="col">
                                                    <div className="info">
                                                        <div className="desc">Your report is ready. Proin venenatis interdum est.</div>
                                                        <div className="meta"> 3 days ago</div>
                                                    </div>
                                                </div>{/*//col*/}
                                            </div>{/*//row*/}
                                            <Link className="link-mask" href="notifications.html" />
                                        </div>{/*//item*/}
                                        <div className="item p-3">
                                            <div className="row gx-2 justify-content-between align-items-center">
                                                <div className="col-auto">
                                                    <img className="profile-image" src="/assets/images/profiles/profile-2.png" alt />
                                                </div>{/*//col*/}
                                                <div className="col">
                                                    <div className="info">
                                                        <div className="desc">James sent you a new message.</div>
                                                        <div className="meta"> 7 days ago</div>
                                                    </div>
                                                </div>{/*//col*/}
                                            </div>{/*//row*/}
                                            <Link className="link-mask" href="notifications.html" />
                                        </div>{/*//item*/}
                                    </div>{/*//dropdown-menu-content*/}
                                    <div className="dropdown-menu-footer p-2 text-center">
                                        <Link href="notifications.html">View all</Link>
                                    </div>
                                </div>{/*//dropdown-menu*/}
                            </div>{/*//app-utility-item*/}
                            <div className="app-utility-item">
                                <Link href="settings.html" title="Settings">
                                    {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear icon" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                        <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                                    </svg>
                                </Link>
                            </div>{/*//app-utility-item*/}
                            <div className="app-utility-item app-user-dropdown dropdown">
                                <Link className="dropdown-toggle" id="user-dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"><img className="rounded-circle" src="/assets/images/user.png" alt="user profile" /></Link>
                                <ul className="dropdown-menu" aria-labelledby="user-dropdown-toggle">
                                    <li><Link className="dropdown-item" href="account.html">Account</Link></li>
                                    <li><Link className="dropdown-item" href="settings.html">Settings</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" href="login.html">Log Out</Link></li>
                                </ul>
                            </div>{/*//app-user-dropdown*/}
                        </div>{/*//app-utilities*/}
                    </div>{/*//row*/}
                </div>{/*//app-header-content*/}
            </div>{/*//container-fluid*/}
        </div>{/*//app-header-inner*/}
        <div id="app-sidepanel" className={sidepanelIsHidden ? "app-sidepanel sidepanel-hidden" : "app-sidepanel sidepanel-visible"}>
            <div id="sidepanel-drop" onClick={sidepanelToggler} className="sidepanel-drop" />
            <div className="sidepanel-inner d-flex flex-column">
                <Link href="#" id="sidepanel-close" onClick={sidepanelToggler} className="sidepanel-close d-xl-none">×</Link>
                <div className="app-branding">
                    <Link className="app-logo" href="index.html"><img className="logo-icon me-2 rounded-circle" src="/assets/images/gamegrid-logo.png" alt="logo" /><span className="logo-text">GameGrid</span></Link>
                </div>{/*//app-branding*/}
                <nav id="app-nav-main" className="app-nav app-nav-main flex-grow-1">
                    <ul className="app-menu list-unstyled accordion" id="menu-accordion">
                        <li className="nav-item">
                            {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                            <Link className={location.pathname === "/users" ? "nav-link active" : "nav-link"} to="/users">
                                <span className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 8s-1 0-1-1 1-4 6-4 6 3.999 6 4-1 1-1 1H3z" />
                                    </svg>
                                </span>
                                <span className="nav-link-text">Users</span>
                            </Link>{/*//nav-link*/}
                        </li>{/*//nav-item*/}
                        <li className="nav-item">
                            {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                            <Link className={location.pathname === "/fields" ? "nav-link active" : "nav-link"} to="/fields">
                                <span className="nav-icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                                        <rect x="1" y="1" width="22" height="22" stroke="currentColor" stroke-width="2" fill="none" />
                                        <circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="2" fill="none" />
                                        <line x1="12" y1="1" x2="12" y2="23" stroke="currentColor" stroke-width="2" />
                                        <rect x="1" y="8" width="4" height="8" stroke="currentColor" stroke-width="2" fill="none" />
                                        <rect x="19" y="8" width="4" height="8" stroke="currentColor" stroke-width="2" fill="none" />
                                        <rect x="1" y="5" width="6" height="14" stroke="currentColor" stroke-width="2" fill="none" />
                                        <rect x="17" y="5" width="6" height="14" stroke="currentColor" stroke-width="2" fill="none" />
                                    </svg>
                                </span>
                                <span className="nav-link-text">Fields</span>
                            </Link>{/*//nav-link*/}
                        </li>{/*//nav-item*/}
                        <li className="nav-item">
                            {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                            <Link className="nav-link" href="orders.html">
                                <span className="nav-icon">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-card-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path fillRule="evenodd" d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5z" />
                                        <circle cx="3.5" cy="5.5" r=".5" />
                                        <circle cx="3.5" cy={8} r=".5" />
                                        <circle cx="3.5" cy="10.5" r=".5" />
                                    </svg>
                                </span>
                                <span className="nav-link-text">Orders</span>
                            </Link>{/*//nav-link*/}
                        </li>{/*//nav-item*/}
                        <li className="nav-item has-submenu">
                            {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                            <Link className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-1" aria-expanded="false" aria-controls="submenu-1">
                                <span className="nav-icon">
                                    {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-files" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M4 2h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4z" />
                                        <path d="M6 0h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2v-1a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1H4a2 2 0 0 1 2-2z" />
                                    </svg>
                                </span>
                                <span className="nav-link-text">Pages</span>
                                <span className="submenu-arrow">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>{/*//submenu-arrow*/}
                            </Link>{/*//nav-link*/}
                            <div id="submenu-1" className="collapse submenu submenu-1" data-bs-parent="#menu-accordion">
                                <ul className="submenu-list list-unstyled">
                                    <li className="submenu-item"><Link className="submenu-link" href="notifications.html">Notifications</Link></li>
                                    <li className="submenu-item"><Link className="submenu-link" href="account.html">Account</Link></li>
                                    <li className="submenu-item"><Link className="submenu-link" href="settings.html">Settings</Link></li>
                                </ul>
                            </div>
                        </li>{/*//nav-item*/}
                        <li className="nav-item has-submenu">
                            {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                            <Link className="nav-link submenu-toggle" href="#" data-bs-toggle="collapse" data-bs-target="#submenu-2" aria-expanded="false" aria-controls="submenu-2">
                                <span className="nav-icon">
                                    {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-columns-gap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M6 1H1v3h5V1zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12h-5v3h5v-3zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8H1v7h5V8zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6h-5v7h5V1zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z" />
                                    </svg>
                                </span>
                                <span className="nav-link-text">External</span>
                                <span className="submenu-arrow">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                    </svg>
                                </span>{/*//submenu-arrow*/}
                            </Link>{/*//nav-link*/}
                            <div id="submenu-2" className="collapse submenu submenu-2" data-bs-parent="#menu-accordion">
                                <ul className="submenu-list list-unstyled">
                                    <li className="submenu-item"><Link className="submenu-link" href="login.html">Login</Link></li>
                                    <li className="submenu-item"><Link className="submenu-link" href="signup.html">Signup</Link></li>
                                    <li className="submenu-item"><Link className="submenu-link" href="reset-password.html">Reset password</Link></li>
                                    <li className="submenu-item"><Link className="submenu-link" href="404.html">404 page</Link></li>
                                </ul>
                            </div>
                        </li>{/*//nav-item*/}
                        <li className="nav-item">
                            {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                            <Link className="nav-link" href="charts.html">
                                <span className="nav-icon">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bar-chart-line" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z" />
                                    </svg>
                                </span>
                                <span className="nav-link-text">Charts</span>
                            </Link>{/*//nav-link*/}
                        </li>{/*//nav-item*/}
                        <li className="nav-item">
                            {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                            <Link className="nav-link" href="help.html">
                                <span className="nav-icon">
                                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-question-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                        <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
                                    </svg>
                                </span>
                                <span className="nav-link-text">Help</span>
                            </Link>{/*//nav-link*/}
                        </li>{/*//nav-item*/}
                    </ul>{/*//app-menu*/}
                </nav>{/*//app-nav*/}
                <div className="app-sidepanel-footer">
                    <nav className="app-nav app-nav-footer">
                        <ul className="app-menu footer-menu list-unstyled">
                            <li className="nav-item">
                                {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                                <Link className="nav-link" href="settings.html">
                                    <span className="nav-icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-gear" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8.837 1.626c-.246-.835-1.428-.835-1.674 0l-.094.319A1.873 1.873 0 0 1 4.377 3.06l-.292-.16c-.764-.415-1.6.42-1.184 1.185l.159.292a1.873 1.873 0 0 1-1.115 2.692l-.319.094c-.835.246-.835 1.428 0 1.674l.319.094a1.873 1.873 0 0 1 1.115 2.693l-.16.291c-.415.764.42 1.6 1.185 1.184l.292-.159a1.873 1.873 0 0 1 2.692 1.116l.094.318c.246.835 1.428.835 1.674 0l.094-.319a1.873 1.873 0 0 1 2.693-1.115l.291.16c.764.415 1.6-.42 1.184-1.185l-.159-.291a1.873 1.873 0 0 1 1.116-2.693l.318-.094c.835-.246.835-1.428 0-1.674l-.319-.094a1.873 1.873 0 0 1-1.115-2.692l.16-.292c.415-.764-.42-1.6-1.185-1.184l-.291.159A1.873 1.873 0 0 1 8.93 1.945l-.094-.319zm-2.633-.283c.527-1.79 3.065-1.79 3.592 0l.094.319a.873.873 0 0 0 1.255.52l.292-.16c1.64-.892 3.434.901 2.54 2.541l-.159.292a.873.873 0 0 0 .52 1.255l.319.094c1.79.527 1.79 3.065 0 3.592l-.319.094a.873.873 0 0 0-.52 1.255l.16.292c.893 1.64-.902 3.434-2.541 2.54l-.292-.159a.873.873 0 0 0-1.255.52l-.094.319c-.527 1.79-3.065 1.79-3.592 0l-.094-.319a.873.873 0 0 0-1.255-.52l-.292.16c-1.64.893-3.433-.902-2.54-2.541l.159-.292a.873.873 0 0 0-.52-1.255l-.319-.094c-1.79-.527-1.79-3.065 0-3.592l.319-.094a.873.873 0 0 0 .52-1.255l-.16-.292c-.892-1.64.902-3.433 2.541-2.54l.292.159a.873.873 0 0 0 1.255-.52l.094-.319z" />
                                            <path fillRule="evenodd" d="M8 5.754a2.246 2.246 0 1 0 0 4.492 2.246 2.246 0 0 0 0-4.492zM4.754 8a3.246 3.246 0 1 1 6.492 0 3.246 3.246 0 0 1-6.492 0z" />
                                        </svg>
                                    </span>
                                    <span className="nav-link-text">Settings</span>
                                </Link>{/*//nav-link*/}
                            </li>{/*//nav-item*/}
                            <li className="nav-item">
                                {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                                <Link className="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                                    <span className="nav-icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-download" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                                            <path fillRule="evenodd" d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                                        </svg>
                                    </span>
                                    <span className="nav-link-text">Download</span>
                                </Link>{/*//nav-link*/}
                            </li>{/*//nav-item*/}
                            <li className="nav-item">
                                {/*//Bootstrap Icons: https://icons.getbootstrap.com/ */}
                                <Link className="nav-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/admin-dashboard/portal-free-bootstrap-admin-dashboard-template-for-developers/">
                                    <span className="nav-icon">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M12 1H4a1 1 0 0 0-1 1v10.755S4 11 8 11s5 1.755 5 1.755V2a1 1 0 0 0-1-1zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                                            <path fillRule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                        </svg>
                                    </span>
                                    <span className="nav-link-text">License</span>
                                </Link>{/*//nav-link*/}
                            </li>{/*//nav-item*/}
                        </ul>{/*//footer-menu*/}
                    </nav>
                </div>{/*//app-sidepanel-footer*/}
            </div>{/*//sidepanel-inner*/}
        </div>{/*//app-sidepanel*/}
    </header >
}
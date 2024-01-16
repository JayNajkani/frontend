import './Nav.css'
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
    const [ NavContent , setNavContent ] = useState();
    useEffect(()=>{
        if(localStorage.getItem("role")=="admin")
        {
            setNavContent(
                <>
                <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
                <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 class="m-0 text-primary">Flight Booking</h2>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <a class="nav-item nav-link active"><Link to="/admin">Admin Home</Link></a>
                         <a class="nav-item nav-link"><Link to="/manageusers">Manage Users</Link></a>
                        <div class="nav-item dropdown">
                            <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#D81324"}}>Settings</a>
                            <div class="dropdown-menu fade-up m-0">
                                <a class="dropdown-item"><Link to="/editadminprofile">Edit profile</Link></a>
                                <a class="dropdown-item"><Link to="/changeadminpassword">Change password</Link></a>
                            </div>
                        </div> 
                        <a  class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                    </div>
                </div>
            </nav>
        </>
                );
        }
        else if(localStorage.getItem("role")=="user")
        {
            setNavContent(
                <>
                <nav class="navbar navbar-expand-lg bg-light navbar-white sticky-top p-0">
                <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                    <h2 class="m-0 text-primary">Flight Booking</h2>
                </a>
                <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto p-4 p-lg-0">
                        <a class="nav-item nav-link active"><Link to="/user">User Home</Link></a>
                        <div class="nav-item dropdown">
                            <a href="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{"color":"#D81324"}}>Settings</a>
                            <div class="dropdown-menu fade-up m-0">
                                <a class="dropdown-item"><Link to="/edituserprofile">Edit profile</Link></a>
                                <a class="dropdown-item"><Link to="/changeuserpassword">Change password</Link></a>
                            </div>
                        </div>
                        <a  class="nav-item nav-link"><Link to="/logout">Logout</Link></a>
                    </div>
                </div>
            </nav>
        </>
            );
        }
        else
        {
            setNavContent(
            <>
            <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0">
            <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
                <h2 class="m-0 text-primary">Flight Booking</h2>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a class="nav-item nav-link active"><Link to="/">Home</Link></a>
                    <a class="nav-item nav-link"><Link to="/about">About</Link></a>
                    <a class="nav-item nav-link"><Link to="/contact">Contact</Link></a>
                    <a class="nav-item nav-link"><Link to="/service">Service</Link></a>
                    {/* <a class="nav-item nav-link"><Link to="/ddetails">doctor details</Link></a>  */}
                    <a class="nav-item nav-link"><Link to="/register">Register</Link></a>
                    <a  class="nav-item nav-link"><Link to="/login">Login</Link></a>
                </div>
                {/* <a class="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Get A Quote<i class="fa fa-arrow-right ms-3"></i></a> */}
            </div>
        </nav>
    </>
            );
        }
    }); 
    return (
    <>
    {NavContent}
    </>
    );
  }

  export default Nav;
//     const [ navContent , setNavContent ] = useState();
//     useEffect(()=>{
//         if(localStorage.getItem('role')=="admin")
//         {
//             setNavContent(
//                 <>
//         <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
//         <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
//             <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarServ</h2>
//         </a>
//         <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//             <div class="navbar-nav ms-auto p-4 p-lg-0">
//                 <Link to="/admin" class="nav-item nav-link">Admin Home</Link>
//                 <Link to="/manageusers" class="nav-item nav-link">manage users</Link>
//                     <div class="nav-item dropdown">
//                         <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                         <div class="dropdown-menu fade-up m-0">
//                             <Link to="/epadmin" class="nav-item nav-link">EPAdmin</Link>
//                             <Link to="/cpadmin" class="nav-item nav-link">change password</Link>
//                         </div>
//                     </div>
//                     <Link to="/logout" class="nav-item nav-link">logout</Link>
//             </div>
//         </div>
//     </nav>
//     </>
//             );
//         }
//         else if(localStorage.getItem('role')=="user")
//         {
//             setNavContent(
//                 <>
//         <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
//         <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
//             <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarServ</h2>
//         </a>
//         <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//             <div class="navbar-nav ms-auto p-4 p-lg-0">
//                 <Link to="/logout" class="nav-item nav-link">logout</Link>
//                 {/* <div class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                     <div class="dropdown-menu fade-up m-0">
//                         <a class="dropdown-item">Booking</a>
//                         <a class="dropdown-item">Technicians</a>
//                         <a class="dropdown-item">Testimonial</a>
//                         <a class="dropdown-item">404 Page</a>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     </nav>
//     </>
//             );
//         }
//         else
//         {
//             setNavContent(
//                 <>
//                 <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
//         <a class="navbar-brand d-flex align-items-center px-4 px-lg-5">
//             <h2 class="m-0 text-primary"><i class="fa fa-car me-3"></i>CarServ</h2>
//         </a>
//         <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
//             <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarCollapse">
//             <div class="navbar-nav ms-auto p-4 p-lg-0">
//                 <Link to="/" class="nav-item nav-link">Home</Link>
//                 <Link to="/about" class="nav-item nav-link">About</Link>
//                 <Link to="/service" class="nav-item nav-link">Services</Link>
//                 <Link to="/contact" class="nav-item nav-link">Contact</Link>
//                 <Link to="/register" class="nav-item nav-link">Register</Link>
//                 <Link to="/login" class="nav-item nav-link">Login</Link>
//                 {/* <div class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
//                     <div class="dropdown-menu fade-up m-0">
//                         <a class="dropdown-item">Booking</a>
//                         <a class="dropdown-item">Technicians</a>
//                         <a class="dropdown-item">Testimonial</a>
//                         <a class="dropdown-item">404 Page</a>
//                     </div>
//                 </div> */}
//             </div>
//         </div>
//     </nav>
//                 </>

//             );
//         }
//     });

//     return (
//         <>
//         {navContent}
//     </>
//     );
// }

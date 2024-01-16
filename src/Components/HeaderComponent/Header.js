import "./header.css";
import { useEffect, useState } from "react";
import Auth from "../AuthComponent/Auth";

const Header = () =>{

    const [ headerContent , setHeaderContent ] = useState();
    useEffect(()=>{
        if(localStorage.getItem('role')=="admin")
        {
        setHeaderContent(
            <>
            <div class="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
                    <div class="row gx-0">
                        <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                            <div class="d-inline-flex align-items-center">
                            </div>
                        </div>
                        <div class="col-md-6 text-center text-lg-end">
                            <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                                <div class="me-3 pe-3 border-end py-2">
                                    <p class="m-0">Welcome Admin</p>
                                </div>
                                <div class="py-2">
                                    <p class="m-0">{localStorage.getItem('email')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
        }
        else if(localStorage.getItem('role')=="user")
        {
            setHeaderContent(
            <>
            <div class="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
                    <div class="row gx-0">
                        <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                            <div class="d-inline-flex align-items-center">
                            </div>
                        </div>
                        <div class="col-md-6 text-center text-lg-end">
                            <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                                <div class="me-3 pe-3 border-end py-2">
                                    <p class="m-0">Welcome User</p>
                                </div>
                                <div class="py-2">
                                    <p class="m-0">{localStorage.getItem('email')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
            }
            else
            {
                setHeaderContent(

                    <>
                    <div class="container-fluid bg-light p-0">
                        <div class="row gx-0 d-none d-lg-flex">
                            <div class="col-lg-7 px-5 text-start">
                                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                                    <small>X Street, Indore, India</small>
                                </div>
                                    <div class="h-100 d-inline-flex align-items-center py-3">
                                    <small class="far fa-clock text-primary me-2"></small>
                                    <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                                    </div>
                            </div>
                            <div class="col-lg-5 px-5 text-end">
                                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                                <small class="fa fa-phone-alt text-primary me-2"></small>
                                <small>+XXX XXX XXXX</small>
                            </div>
                                <div class="h-100 d-inline-flex align-items-center">
                                    <a class="btn btn-sm-square bg-white text-primary me-1"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-sm-square bg-white text-primary me-1"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-sm-square bg-white text-primary me-1"><i class="fab fa-linkedin-in"></i></a>
                                    <a class="btn btn-sm-square bg-white text-primary me-0"><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }
    });
return (
<>
<Auth />
{headerContent}
</>
);
}
export default Header;
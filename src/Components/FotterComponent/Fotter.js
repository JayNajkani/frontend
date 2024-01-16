import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Fotter = () => {
    const [ FooterContent , setFooterContent ] = useState();
    useEffect(()=>{
        if(localStorage.getItem('role')=="admin" || localStorage.getItem('role')=="user")
        {
            setFooterContent(
                <>
                    <div class="container-fluid bg-dark">
                        <div class="copyright">
                            <div class="row">
                                <div class="col-md-12 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a class="border-bottom">Flightbooking</a>, All Right Reserved.
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                    {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                                    Designed By <a class="border-bottom">Jay Najkani</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
        else
        {
            setFooterContent(
                <>
    <div class="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Address</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>X Street, Ujjain, India</p>
                    <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+XXX XXX XXXX</p>
                    <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-outline-light btn-social"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-outline-light btn-social"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-outline-light btn-social"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-outline-light btn-social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Services</h4>
                    <a class="btn btn-link">Domestic Flights</a>
                    <a class="btn btn-link">International Flights</a>
                    <a class="btn btn-link">Private Jets</a>
                    <a class="btn btn-link">Courier Services Through Flights</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Quick Links</h4>
                    <a class="btn btn-link">About Us</a>
                    <a class="btn btn-link">Contact Us</a>
                    <a class="btn btn-link">Our Services</a>
                    <a class="btn btn-link">Terms & Condition</a>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4">Write To Us</h4>
                    <p>The pain should be just as important as the clita itself.</p>
                    <div class="position-relative mx-auto" style={{"maxWidth":"400px"}} >
                        <input class="form-control border-0 w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                        <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="copyright">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a class="border-bottom">Flightbooking</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. */}
                        Designed By <a class="border-bottom">Jay Najkani</a>
                    </div>
                </div>
            </div>
        </div>
    </div></>
            );
        }
    });
    return(
    <>
        {FooterContent}
    </>
  );
}
//     const [ fotterContent , setFotterContent ] = useState();
//     useEffect(()=>{
//         if(localStorage.getItem("role")=="admin" || localStorage.getItem("role")=="user")
//         {
//             setFotterContent(

//                 <>
//         <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
//             <div class="container">
//                 <div class="copyright">
//                     <div class="row">
//                         <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
//                             &copy; <a class="border-bottom">CarServ</a>, All Right Reserved.
//                             Designed By <a class="border-bottom">Jay Najkani</a>
//                         </div>
//                         <div class="col-md-6 text-center text-md-end">
//                             <div class="footer-menu">
//                                 <Link>Home</Link>
//                                 <a>Cookies</a>
//                                 <a>Help</a>
//                                 <a>FQAs</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//                 </>

//             );

//         }
//         else
//         {
//             setFotterContent(<>
//                 <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
//             <div class="container py-5">
//                 <div class="row g-5">
//                     <div class="col-lg-3 col-md-6">
//                         <h4 class="text-light mb-4">Address</h4>
//                         <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>X Street, Indore , India</p>
//                         <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+XXX XXX XXXX</p>
//                         <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
//                         <div class="d-flex pt-2">
//                             <a class="btn btn-outline-light btn-social"><i class="fab fa-twitter"></i></a>
//                             <a class="btn btn-outline-light btn-social"><i class="fab fa-facebook-f"></i></a>
//                             <a class="btn btn-outline-light btn-social"><i class="fab fa-youtube"></i></a>
//                             <a class="btn btn-outline-light btn-social"><i class="fab fa-linkedin-in"></i></a>
//                         </div>
//                     </div>
//                     <div class="col-lg-3 col-md-6">
//                         <h4 class="text-light mb-4">Opening Hours</h4>
//                         <h6 class="text-light">Monday - Friday:</h6>
//                         <p class="mb-4">09.00 AM - 09.00 PM</p>
//                         <h6 class="text-light">Saturday - Sunday:</h6>
//                         <p class="mb-0">09.00 AM - 12.00 PM</p>
//                     </div>
//                     <div class="col-lg-3 col-md-6">
//                         <h4 class="text-light mb-4">Services</h4>
//                         <a class="btn btn-link">Diagnostic Test</a>
//                         <a class="btn btn-link">Engine Servicing</a>
//                         <a class="btn btn-link">Tires Replacement</a>
//                         <a class="btn btn-link">Oil Changing</a>
//                         <a class="btn btn-link">Vacuam Cleaning</a>
//                     </div>
//                     <div class="col-lg-3 col-md-6">
//                         <h4 class="text-light mb-4">Newsletter</h4>
//                         <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
//                     </div>
//                 </div>
//             </div>
//             <div class="container">
//                 <div class="copyright">
//                     <div class="row">
//                         <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
//                             &copy; <a class="border-bottom">CarServ</a>, All Right Reserved.
//                             Designed By <a class="border-bottom">Jay Najkani</a>
//                         </div>
//                         <div class="col-md-6 text-center text-md-end">
//                             <div class="footer-menu">
//                                 <a>Home</a>
//                                 <a>Cookies</a>
//                                 <a>Help</a>
//                                 <a>FQAs</a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//                 </>);
            
//         }
//     });

//     return(
//         <>
//         {fotterContent}
//     </>
//     );
// }
export default Fotter;

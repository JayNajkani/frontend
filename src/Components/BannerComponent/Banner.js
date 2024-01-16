import { useState , useEffect} from "react";

const Banner = () =>{
    const [ BannerContent , setBannerContent ] = useState();
    useEffect(()=>{
        if(localStorage.getItem('role')=="admin" || localStorage.getItem('role')=="user")
        {
            setBannerContent(<></>);
        }
        else
        {
            setBannerContent(<>
            <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="assests/img/img1.jpg" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"maxWidth":"900px"}}>
                            {/* <h5 class="text-light text-uppercase mb-3 animated slideInDown" style={{"letter-spacing":"5px"}}>Welcome to flight Booking</h5> */}
                            <h4 class="text-uppercase mb-3 animated slideInDown" style={{"letter-spacing":"5px","color":"darkmagenta"}}>Welcome to flight Booking</h4>  
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            <h1 class="display-1 text-warning mb-md-4 animated zoomIn" >Book flights at cheapest price</h1>
                            {/* <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a> */}
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="assests/img/img3.webp" alt="Image" />
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{"maxWidth":"900px"}}>
                            <h5 class="text-primary text-uppercase mb-3 animated slideInDown" style={{"letter-spacing":"5px"}}>Welcome to flight Booking</h5>
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Book flights in an easier way</h1>
                            {/* <a href="quote.html" class="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                            <a href="" class="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a> */}
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
            </>);
        }
    });
    return(
    <>
     {BannerContent}
    </>
  );
}
//     const [ bannerContent , setBannerContent ] = useState();
//     useEffect(()=>{
//         if(localStorage.getItem("role")=='admin' || localStorage.getItem("role")=='user')
//         {
//                 setBannerContent(
//                     <></>
//                 );

//         }
//         else
//         {

//                 setBannerContent(
//                     <>
//                <div class="container-fluid p-0 mb-5">
//                 <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
//                     <div class="carousel-inner">
//                         <div class="carousel-item active">
//                             <img class="w-100" src="assests/img/carousel-bg-1.jpg" alt="Image" />
//                             <div class="carousel-caption d-flex align-items-center">
//                                 <div class="container">
//                                     <div class="row align-items-center justify-content-center justify-content-lg-start">
//                                         <div class="col-10 col-lg-7 text-center text-lg-start">
//                                             <h6 class="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
//                                             <h1 class="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
//                                             <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
//                                         </div>
//                                         <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
//                                             <img class="img-fluid" src="assests/img/carousel-1.png" alt="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="carousel-item">
//                             <img class="w-100" src="assests/img/carousel-bg-2.jpg" alt="Image" />
//                             <div class="carousel-caption d-flex align-items-center">
//                                 <div class="container">
//                                     <div class="row align-items-center justify-content-center justify-content-lg-start">
//                                         <div class="col-10 col-lg-7 text-center text-lg-start">
//                                             <h6 class="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
//                                             <h1 class="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
//                                             <a href="" class="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i class="fa fa-arrow-right ms-3"></i></a>
//                                         </div>
//                                         <div class="col-lg-5 d-none d-lg-flex animated zoomIn">
//                                             <img class="img-fluid" src="assests/img/carousel-2.png" alt="" />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
//                         data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Previous</span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
//                         data-bs-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Next</span>
//                     </button>
//                 </div>
//             </div>
//                 </>
//                     );
            
//         }
//     });
//     return(
//         <>
//         {bannerContent}
//         </>
//     );
// }

export default Banner;
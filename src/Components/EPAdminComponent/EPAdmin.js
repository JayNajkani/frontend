import axios from "axios";
import { useState ,useEffect } from "react";
import { _userapiurl } from '../../apiurls';
import { useNavigate } from "react-router-dom";

const EPAdmin = () => {

    const navigate = useNavigate();
    const [ name , setName ] = useState();
    const [ fetchemail , setFetchEmail ] = useState(localStorage.getItem("email"));
    const [ email , setEmail ] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [ city , setCity ] = useState();
    const [ gender , setGender ] = useState();
    const [ output , setOutput ] = useState(); 

    useEffect(()=>{
      axios.get(_userapiurl+"fetch?email="+fetchemail).then((result)=>{
       setName(result.data[0].name);
       setEmail(result.data[0].email);
       setMobile(result.data[0].mobile);
       setAddress(result.data[0].address);
       setCity(result.data[0].city);
      }).catch((error)=>{
       console.log(error);
      });      
    },[]);
  
    const handleSubmit=()=>{
      let updateDetails={"condition_obj":{"email":email},"content_obj":{"name":name,"mobile":mobile,"address":address,"city":city,"gender":gender}};
        axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
          setOutput("Profile edited successfully....");
          navigate("/epadmin");
      });      
    };

    
    return (

      <>
      <div class="container-fluid bg-light overflow-hidden my-6 px-lg-0">
          <div class="container about px-lg-0">
              <div class="row g-0 mx-lg-0">
                  <div class="col-lg-12 ps-lg-0" style={{"minHeight":"500px"}} >
                  <div class="p-lg-5 pe-lg-0">
                  <div class="sectitext-starton-title">
                      <h1 class="text-primary text-uppercase" style={{"letter-spacing":"5px"}}>Edit Profile Here!!!!</h1>
                      <font color="blue">{output}</font>
                  </div>
      <form>
      <div class="form-group">
      <font color='#D81324'>Name</font>
      <input type="text" style={{"transform":"translate(0%,-5%)"}} class="form-control" placeholder="Enter name" value={name} onChange= { e => setName(e.target.value)} />
      </div>
      <br />
      <div class="form-group">
      <font color='#D81324'>Email</font>
        <input type="email" class="form-control" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <br />
        <div class="form-group">
        <font color='#D81324'>Mobile</font>
        <input type="text" class="form-control" value={mobile} onChange={e => setMobile(e.target.value)} />
      </div>
      <br/>
      <div class="form-group">
      <font color='#D81324'>Address</font>
        <textarea rows="5" class="form-control" value={address} onChange={e => setAddress(e.target.value)} ></textarea>
      </div>
      <br/>
      <div class="form-group">
      <font color='#D81324'>City:</font>
        <select class="form-control" value={city} onChange={e => setCity(e.target.value)} >
        <option>Select City</option>
        <option>Indore</option>
        <option>Bhopal</option>
        <option>Ujjain</option>
        </select>
      </div>
      <br/>
      <div class="form-group">
      <font color='#D81324'>Gender:</font>
        &nbsp;&nbsp;
        <font color='#D81324'>Male</font> <input type="radio" name="gender" value="male" onChange={e => setGender(e.target.value)} />
        &nbsp;&nbsp;
        <font color='#D81324'>Female</font> <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} />
      </div>
        <br />
      <button type="button" onClick={handleSubmit} class="btn btn-primary">Submit</button>
      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
        </>
    );
}
export default EPAdmin;
import axios from "axios";
import { useState } from "react";
import { _userapiurl } from '../../apiurls';
import { useNavigate } from "react-router-dom";

const CPAdmin = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const [opass, setOldPassword] = useState();
  const [npass, setNewPassword] = useState();
  const [cnpass, setConfirmNewPassword] = useState();
  const [ output , setOutput ] = useState();

  const handleSubmit=()=>{
    axios.get(_userapiurl+"fetch?email="+email+"&password="+opass).then((response)=>{
     if(npass==cnpass)
     {
        const updateDetails={"condition_obj":{"email":email},"content_obj":{"password":cnpass}};
        axios.patch(_userapiurl+"update",updateDetails).then((response)=>{
          setOutput("Password changed successfully , please login again.....");
          setOldPassword("");
          setNewPassword("");
          setConfirmNewPassword("");
          localStorage.removeItem("token");
          localStorage.removeItem("name");
          localStorage.removeItem('email')	  
          localStorage.removeItem('mobile')
          localStorage.removeItem('address')
          localStorage.removeItem('city')
          localStorage.removeItem('gender')
          localStorage.removeItem('role')
          localStorage.removeItem('info') 
          localStorage.removeItem("_id");
          localStorage.removeItem("status");
          navigate("/login");
        }); 
     }
     else
     {
      setOutput("New & confirm new password mismatch");
      setNewPassword("");
      setConfirmNewPassword("");    
     }
    }).catch((error)=>{
     setOutput("Invalid old password");
     setOldPassword("");    
    });
  }


  return (

    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 pt-4" style={{ "min-height": "400px" }}>
              <h1>Change Password Here!!!!</h1>
              <font>{output}</font>
              <form>
                <br />
                <div class="form-group">
                  <b><font color="##0B2154">Enter Old Password</font></b>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    value={opass}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                </div>
                <br />
                <div class="form-group">
                  <b><font color="##0B2154">Enetr New Password</font></b>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    value={npass}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </div>
                <br />
                <div class="form-group">
                  <b><font color="##0B2154">Confirm New Password</font></b>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    value={cnpass}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                  />
                </div>
                <br />
                <button
                  type="button"
                  onClick={handleSubmit}
                  class="btn btn-primary"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CPAdmin;
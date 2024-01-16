import axios from "axios";
import { useState } from "react";
import { _userapiurl } from '../../apiurls';
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    const userDetails =
    {
      "email": email,
      "password": password,
    };
    axios.post(_userapiurl + "login", userDetails).then((response) => {

      const token = response.data.token;
      const userDetails = response.data.userDetails;
      localStorage.setItem("token", token);
      localStorage.setItem("_id", userDetails._id);
      localStorage.setItem("email", userDetails.email);
      localStorage.setItem("mobile", userDetails.mobile);
      localStorage.setItem("address", userDetails.address);
      localStorage.setItem("city", userDetails.city);
      localStorage.setItem("gender", userDetails.gender);
      localStorage.setItem("status", userDetails.status);
      localStorage.setItem("role", userDetails.role);
      localStorage.setItem("info", userDetails.info);

      if (userDetails.role == "admin")
        navigate("/admin");
      else
        navigate("/user");

    }).catch((error) => {

      setOutput("User registration failed....");

    })
  }


  return (

    <>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5">
            <div class="col-lg-12 pt-4" style={{ "min-height": "400px" }}>
              <h4>IF YOU ARE TESTING MY APP PLEASE LOGIN
                TO THIS ID & PASSWORD
              </h4>
              <h5>EMAIL = test@gmail.com</h5>
              <h5>PASSWORD = 12345</h5>
              <h1>Login Here!!!!</h1>
              <font>{output}</font>
              <form>
                <div class="form-group">
                  <b><font color="##0B2154">Email</font></b>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <div class="form-group">
                  <b><font color="##0B2154">Password</font></b>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
export default Login; 
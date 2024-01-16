import axios from "axios";
import { useState } from "react";
import { _userapiurl } from '../../apiurls';

const Register = () => {

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [gender, setGender] = useState();
  const [output, setOutput] = useState();

  const handleSubmit = () => {
    const userDetails =
    {
      "name": name,
      "email": email,
      "password": password,
      "mobile": mobile,
      "address": address,
      "city": city,
      "gender": gender,
    };
    axios.post(_userapiurl + "save", userDetails).then((response) => {

      setOutput("User Rgistration successfully....");
      setName("");
      setEmail("");
      setPassword("");
      setMobile("");
      setAddress("");
      setCity("");
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
              <h4>IF YOU ARE TESTING MY APP PLEASE GO TO LOGIN
              </h4>
              <h1>Register Here!!!!</h1>
              <font>{output}</font>
              <form>
                <div class="form-group">
                  <font color="##0B2154">Name</font>
                  <input
                    type="text"
                    style={{ transform: "translate(0%,-5%)" }}
                    class="form-control"
                    placeholder="Enter name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <br />
                <div class="form-group">
                  <font color="##0B2154">Email</font>
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
                  <font color="##0B2154">Password</font>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <br />
                </div>
                <div class="form-group">
                  <font color="##0B2154">Mobile</font>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter mobile number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <br />
                <div class="form-group">
                  <font color="##0B2154">Address</font>
                  <textarea
                    rows="5"
                    class="form-control"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  ></textarea>
                </div>
                <br />
                <div class="form-group">
                  <font color="##0B2154">City:</font>
                  <select
                    class="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option>Select City</option>
                    <option>Indore</option>
                    <option>Bhopal</option>
                    <option>Ujjain</option>
                  </select>
                </div>
                <br />
                <div class="form-group">
                  <font color="##0B2154">Gender:</font>
                  &nbsp;&nbsp;
                  <font color="##0B2154">Male</font>
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => setGender(e.target.value)}
                  />
                  &nbsp;&nbsp;
                  <font color="##0B2154">Female</font>
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => setGender(e.target.value)}
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
export default Register;
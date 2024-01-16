import { Navigate } from "react-router-dom";

const Login = () => {

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
  return (

    <>
      <Navigate to="/login" />
    </>
  );
}
export default Login;
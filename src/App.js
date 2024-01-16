import './App.css';
import Banner from './Components/BannerComponent/Banner';
import Header from './Components/HeaderComponent/Header';
import About from './Components/AboutComponent/About';
import Nav from './Components/NavigationComponent/Nav';
import Fotter from './Components/FotterComponent/Fotter';
import Main from './Components/MainComponent/Main';
import Service from './Components/ServiceComponent/Service';
import Contact from './Components/ContactComponent/Contact';
import Register from './Components/RegisterComponent/Register';
import Login from './Components/LoginComponent/Login';
import AdminHome from './Components/AdminHomeComponent/AdminHome';
import UserHome from './Components/UserHomeComponent/UserHome';
import {Route , Routes } from 'react-router-dom';
import Logout from './Components/LogoutComponent/Logout';
import Manageusers from './Components/ManageusersComponent/Manageusers';
import CPAdmin from './Components/CPadminComponent/CPadmin';
import EPAdmin from './Components/EPAdminComponent/EPAdmin';
import CPUser from './Components/CPuserComponent/CPuser';
import EPUser from './Components/EPUserComponent/EPUser';

function App() {
  return (
    <>
    <Header />
    <Nav />
    <Banner />
    <Routes>
      <Route path='/' element={<Main />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path="/service" element={<Service />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/register" element={<Register />} ></Route>
      <Route path="/login" element={<Login />} ></Route>
      <Route path="/admin" element={<AdminHome />} ></Route>
      <Route path="/user" element={<UserHome />} ></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/manageusers" element={<Manageusers />}></Route>
      <Route path="/changeadminpassword" element={<CPAdmin />}></Route>
      <Route path="/editadminprofile" element={<EPAdmin />}></Route>
      <Route path="/changeuserpassword" element={<CPUser />}></Route>
      <Route path="/edituserprofile" element={<EPUser />}></Route>
    </Routes>

    <Fotter />
    </>
  );
}

export default App;

import { useState , useEffect } from 'react';
import './Manageusers.css';
import axios from 'axios';
import { _userapiurl } from '../../apiurls';
import { Link , useNavigate } from 'react-router-dom';


const Manageusers = () =>{
  
  const navigate = useNavigate(); 
  const [ userContent , setUserContent ] = useState([]);
  useEffect(()=>{
    axios.get(_userapiurl+"fetch?role=user").then((response)=>{
      setUserContent(response.data);
    })
  });  
  const changeStatus = (_id , status)=>{
    // alert(_id+"-------"+status);
    if(status=="active")
    {
      let updateDetails = {"condition_obj":{"_id":_id},"content_obj":{status:1}};
      axios.patch(_userapiurl+"update", updateDetails).catch((response)=>{
        navigate("/manageusers");
      });
    }
    else if(status=="inactive")
    {
      let updateDetails = {"condition_obj":{"_id":_id},"content_obj":{status:0}};
      axios.patch(_userapiurl+"update", updateDetails).catch((response)=>{
        navigate("/manageusers");
      });
    }
    else
    {
      let deleteDetails = {"data":{"_id" : _id}};
      axios.delete(_userapiurl+"delete",deleteDetails).catch((response)=>{
        navigate("/manageusers");
      });
    }
  };

  return (
      <>
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container about px-lg-0">
            <div class="row g-0 mx-lg-0">
                <div class="col-lg-12 ps-lg-0" style={{"minHeight":"400px"}} >
                <div class="p-lg-5 pe-lg-0">
                        <div>
                          <h1 class="display-5 mb-4">View & Manage Users</h1>
                          <br />
                          <table class="table table-bordered" cellpadding="10" >
                          <tr>
                          <th>RegID</th>
                          <th>Name</th>  
                          <th>Email</th>
                          <th>Password</th>
                          <th>Mobile</th>
                          <th>Address</th>
                          <th>City</th>
                          <th>Gender</th>
                          <th>Info</th>
                          <th>Status</th>
                          <th>Action</th>
                          </tr> 
                          {
                            userContent.map((row)=>(
                              <tr>
                                <td>{ row._id }</td>
                                <td>{ row.name }</td> 
                                <td>{ row.email }</td>
                                <td>{ row.password }</td>
                                <td>{ row.mobile }</td>
                                <td>{ row.address }</td>
                                <td>{ row.city }</td>
                                <td>{ row.gender }</td>
                                <td>{ row.info }</td> 
                                {/* <td>{ row.status }</td> */}
                                <td>
                                  {
                                  row.status==1 && 
                                  <p style={{"color":"green"}}>Active</p>
                                }
                                {
                                  row.status==0 && 
                                  <p style={{"color":"red"}}>Inactive</p>
                                }
                                </td>
                                <td>
                                  {
                                    row.status==1 &&
                                    <Link onClick={()=>changeStatus(row._id,'inactive')}><font color="blue">Change Status</font></Link>
                                  }
                                  {
                                    row.status==0 &&
                                    <Link onClick={()=>changeStatus(row._id, 'active')}><font color="blue">Change Status</font></Link>
                                  }
                                  <br />
                                  <Link onClick={()=>changeStatus(row._id, 'delete')}><font color="blue">Delete User</font></Link>
                                </td>
                              </tr>
                            ))
                          }
                          </table>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
      </>
    );
}

export default Manageusers;
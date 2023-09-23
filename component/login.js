import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
export function Loginpage(){

    function handellogin(event){
        event.preventDefault()
        var email=document.getElementById("email").value
        var password=document.getElementById("password").value
        var key={
            email:email,
            password:password

        }
        if(email==''){
            alert("plz enter the email")
        }
        else if (password===''){
            alert("plz enter the password")
        }
        else{
              axios.post("http://localhost:3002/login",key)
              .then((res)=>{
                if(res.data.status=="emty_set"){
                    alert("plz enter email or register a new one")
                }
                else if(res.data.status=="success"){
                    var id=res.data.id
                    alert("successfuly logedin")
                    window.location.href=`/customer/${id}`
                }
                else if(res.data.status==="error"){
                    alert("all the data are invalid")
                }
                else{
                    alert("plz register your deatils first")
                }
              })
        }
    }
    return(
        <>
       <div className="d-flex logimg vh-50 ">
    <form onSubmit={handellogin} >
    <h2 className="text-center logh2">Login Page</h2>
    <label form="Email">Email Id</label>
    <input type="text" id="email" name="name" placeholder="Enter the username"/>
    <label form="password">password</label>
    <input type="password" id="password" name="password" placeholder="Enter the Password"/>
   <button type="submit" className="btnlogin text-center">Login</button>
   <hr></hr><br></br><br></br><br></br><br></br><br></br>
   <h2 className="createcol">Create new account</h2>
   <Link to="/register"><button>Register</button></Link>
    </form>
    </div>
        </>
    );    
}
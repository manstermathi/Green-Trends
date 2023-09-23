import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

 export function Register(){
    function handellogin(even){
        even.preventDefault()
        var name=document.getElementById("name").value
        var email=document.getElementById("email").value
        var password=document.getElementById("password").value

        var key={
            name:name,
            email:email,
            password:password

        }
        if(name==''){
            alert("enter the name")
        }
        else if(email==''){
            alert("enter the email")
        }
        else if(password==''){
            alert("enter the password")
        }
        else{
            axios.post("http://localhost:3002/register",key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not inserted")
                    window.location.reload()
                }
                else if (res.data.status==="success"){
                    alert("data are inserted")
                     window.location.href='/login'
                }

                })
            }
        }
     return (
        <>
    <div className='loginimg vh-50 text-center'>
    
        <h1>Green trends</h1>
      
      <h1>Registration Form</h1>
    <form  onSubmit={handellogin}>
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
        </div>
        <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
        </div>
        <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
        </div>
        <div class="form-group">
            <button type="submit">Register</button>
            <Link to="/login"><button>login</button></Link>
        </div>
    </form>
    </div>
    </>
  )
 };

 



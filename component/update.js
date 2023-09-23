import axios from "axios";
import React, { useEffect, useState } from "react"; 
import { useParams } from "react-router-dom";
export function Update(){
    var{id}=useParams()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3002/display/"+id)
        .then(res=>res.json())
        .then((output)=>{
            setName(output[0].name)
            setEmail(output[0].email)
            setPassword(output[0].Password)
        })
    },[])

    function update(event){
        event.preventDefault(event)
        var name=document.getElementById("name").value
        var email=document.getElementById("email").value
        var password=document.getElementById("password").value


        var key={
            name:name,
            email:email,
            password:password
        }
        
        if(name==''){
            alert("enter the  first name")
        }
        else if (email==''){
            alert("enter the email ")
        }
        else if (password==''){
            alert("enter the password")
        }
        else{
            axios.put("http://localhost:3002/update/"+id,key)
            .then((res)=>{
                if(res.data.status==="error"){
                    alert("data are not update")
                     window.location.reload()
                }
                else if(res.data.status==="success"){
                    alert("data are update")
                }
            }
            )
        }
    }

    return(
        <>
        <div className="text-center updateclo vh-100">
        <h2 className="text-center">Registration Form</h2>

<form onSubmit={update}>
    <label for="name">Name:</label>
    <input type="text"value={name} onChange={(update)=>setName(update.target.value)} id="name" name="name" required/><br/><br/>

    <label for="email">Email:</label>
    <input type="email"  value={email}  onChange={(update)=>setEmail(update.target.value)} id="email" name="email" required/><br/><br/>

    <label for="password">Password:</label>
    <input type="password"  value={password}  onChange={(update)=>setPassword(update.target.value)} id="password" name="password" required/><br/><br/>

    <button type="submit" >Submit</button>
</form>
</div>
        </>
    );
}
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
 export function Getsingle(){
    var{id}=useParams()
    const[name,setname]=useState('')
    const[email,setemail]=useState('')
    const[password,setpassword]=useState('')


    useEffect(()=>{
      fetch("http://localhost:3003/getsingle/"+id)
      .then(res=>res.json())
      .then((data)=>{
        setname(data[0].name)
        setemail(data[0].email)
        setpassword(data[0].password)

      })

    }
    )
    return(
        <>
        <table>
            <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{password}</td>
        </tr>
        </table>
        </>
    );
 }
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function Getdata(){

    const[getfetchvalue,setGetfetchvalue]=useState([]);
useEffect(()=>{
    fetch("http://localhost:3002/getdata")
    .then(responsedata=>responsedata.json())
    .then(data=>setGetfetchvalue(data))
})
const delt=(name)=>{
    var key={name:name}
    axios.post("http://localhost:3002/delete",key)
    .then((res)=>{
        if(res.data.status==="error"){
            alert("data are not deleted")
        }
        else if(res.data.status==="success"){
            alert("data are deleted")
        }
    })
}
return(
    <>
    {
        getfetchvalue.map((value,index)=>
        (
            <table>
            <>
            <p>{value.name}</p>
            
            <button className="btn btn-info" onClick={()=>{delt(value.name)}}>Delete</button>
            </>
            </table>
        ))
    }
    </>
);
}
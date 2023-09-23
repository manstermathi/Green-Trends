import React from "react"; 
import axios from "axios";
import { useParams } from "react-router-dom";
export function BookingForm(){
let {id}=useParams()
    function handlelogin(event) {
        event.preventDefault()
        var name = document.getElementById("name").value
        var servicetype = document.getElementById("servicetype").value
        var date = document.getElementById("date").value
        var time = document.getElementById("time").value

        var key = {
            name: name,
            servicetype:servicetype,
            date: date,
            time:time
        }
        console.log(key);
        if (name == '') {
            alert("enter the value first")
        }

        else if (servicetype== '') {
            alert("enter the type")
        }
        else if (date == '') {
            alert("enter the date")
        }
        else if (time == '') {
            alert("enter the time")
        }

        else {
            axios.post("http://localhost:3002/formpage",key)
                .then((res) => {
                    console.log(res);
                    if (res.data.status === "error") {
                        alert("data not inserted")
                        // window.location.reload()
                    }
                    else if (res.data.status === "success") {
                        alert("Booking conform")
                        // window.location.href = '/userlogin'
                    }
                })
        }
    }


    return(
        <>
        <div className=' container mt-5 login vh-50 bookback'>
                <div className="container mt-5">
                    <h2 className="mt-5 text-center">Booking Form</h2>
                    <form onSubmit={handlelogin}>
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" id='name' />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Service Type:</label>
                            <input type="text" className="form-control" id='servicetype' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Time</label>
                            <input type="time" className="form-control" id='time' />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Date:</label>
                            <input type="date" className="form-control" id='date' />
                        </div>

                        <button type="submit" className="btn btn-primary btn btn-large">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}
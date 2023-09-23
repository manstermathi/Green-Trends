import React, { useEffect, useState } from "react"; 
import { Link, useParams } from "react-router-dom";
export function Customer(){
    var{id}=useParams()
    const[name,setname]=useState('')
    useEffect(()=>{
        fetch("http://localhost:3002/display/"+id)
        .then(res=>res.json())
        .then((output)=>{
            setname(output[0].name)
        })
        console.log(name)
    })
    return(
        <>
         <Link to={`/update/${id}`}><button>update Page</button></Link>
         <Link to={`/getdata`}><button>view</button></Link>
        <h1 className="text-center" >Hi {name} </h1>
        <h2 className="text-center">Welcom to Greentrends</h2>
        <div className="container body">
          <div className="row justify-content-center align-items-center">
        <div className="col-lg-4">

  <img src="https://media.istockphoto.com/id/1136206577/photo/man-getting-hair-washed-at-hairdresser.jpg?s=1024x1024&w=is&k=20&c=ewDiGKzxbDo3QhcEccSgkkkfzUsM2tWc8Cc0gp5_SBU="  class="card-img-top" alt="..." style={{"height":"20rem","width":"20rem"}}/>
  <div class="card-body  ">
    <h2 class="card-text">Hair washing</h2>
    <h3>PRICE ₹1000</h3>
    <Link to="/booking"><button>Booking here</button></Link>
    
    
  </div>
</div>
<div className="col-lg-4"> 
  <img src="https://content3.jdmagicbox.com/comp/def_content/unisex-salons/5yvivlbhow-unisex-salons-8-che6u.jpg?clr="  class="card-img-top" alt="..." style={{"height":"20rem","width":"20rem"}}/>
  <div class="card-body ">
    <h2 class="card-text">Hair Cut</h2>
    <h3>PRICE ₹500</h3>
    <Link to="/booking"><button>Booking here</button></Link>

    
  </div>
  </div>
  <div className="col-lg-4"> 
  <img src="https://media.istockphoto.com/id/1098349892/photo/cosmetologist-using-brush-while-putting-white-clay-mask-on-male-face.jpg?s=1024x1024&w=is&k=20&c=AxKB65_GIq3lQfaY77oWdUK668YZDcDmVgYFI52DgP4="  class="card-img-top" alt="..." style={{"height":"20rem","width":"20rem"}}/>
  <div class="card-body ">
    <h2 class="card-text">Facial</h2>
    <h3>PRICE ₹2000</h3>
    <Link to="/booking"><button> Booking here</button></Link>
  </div>
  </div>
  <div className="col-lg-4"> 
  <img src="https://images.squarespace-cdn.com/content/v1/5537fc59e4b0ca81a8906207/1444068502750-9OAZ1GXCPFGZ7016DGFS/image-asset.jpeg?format=1000w"  class="card-img-top" alt="..." style={{"height":"20rem","width":"20rem"}}/>
  <div class="card-body ">
    <h2 class="card-text">Saving</h2>
    <h3>PRICE ₹500</h3>
    <Link to="/booking"><button>Booking here</button></Link>
   
  </div>
  </div>
  </div>
  </div>
 
        </>
        
    );
}
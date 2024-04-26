import React from 'react'
import Navbar from './homecomponents/navbar'
import Projectmembers from './homecomponents/projectmembers'
import Aboutproject from './homecomponents/aboutproject'
import laptopimg from '../photos/image_3.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <section style={{ backgroundImage: `url(${laptopimg})`, backgroundSize: "cover", top: "0", left: "0", width: "100%", height: "100%" }}>
          <br></br>
          <br></br>
          <br></br>

                <div className="container-fluid  " style={{ width:"100%",height:"90vh"}}>
                    {/* <div className="row p-4 pe-3 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3   mt-3" >
                        <div className="col-lg-7 p-3 p-lg-5  pt-lg-3" style={{ marginTop: '310px' }}>
                            <div className='justify-content-center align-middle'>
                                <h1 className="display-4 fw-bold mt-3  lh-1 mb-3 text-info-emphasis">MY</h1>
                                <h1 className="display-4 fw-bold lh-1 mt-3 fs-1 text-success-emphasis ms-4">CHAT</h1>
                                <p className="lead mb-5 ms-5 mt-3 fst-italic text-success">only chat </p>
                            </div>
                            <div className="d-grid gap-2 mt-3 ms-5 d-md-flex justify-content-md-center mb-4 mb-lg-3">

                            </div>
                        </div>
                     
                    </div> */}
                </div>
      </section>
      <Projectmembers/>
      <Aboutproject/>        
    </div>
  )
}

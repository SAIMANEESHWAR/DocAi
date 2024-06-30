import React from 'react'
import profile from '../photos/profile1.png';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from 'react';
import DiseasePredictionForm from './symgpt';
export default function Dashboardsympton() {
    const navigate = useNavigate();

    const [userid, setuserid] = useState(sessionStorage.getItem('verifieduseridsession'));

    const logout = () => {

        sessionStorage.clear();
        navigate("/");
    }
    return (
        <div>
            <section className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
                <div className="container-fluid" style={{ width: "100%" }}>
                    < div className='d-flex flex-row'>
                        <h2 className="mt-2">Block Busters</h2>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto  mb-lg-0 navfont">

                            {/* <li className="nav-item">
                                <div className="d-flex mt-2" role="search">
                                    <Link className="btn btn-outline-success me-3" to="/Dashboard/NestedUpload">Upload</Link>
                                    <Link className="btn btn-outline-success me-3" to="/Dashboard/NestedRetrieve">Retrieve</Link>                            </div>
                            </li> */}
                            <li className="nav-item">

                                <button type="button" className="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <div className="profilenavbar">
                                        <img src={profile} alt="" />
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='row'>
                <div className='col-1 h-100'>
                    <div class="d-flex flex-column flex-shrink-0 bg-body-tertiary" style={{ width: "4.5rem"}}>
                        <a href="/" class="d-block p-3 link-body-emphasis text-decoration-none" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                           hiii <span class="visually-hidden">block busters</span>
                        </a>
                        <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
                            <li class="nav-item">
                                <a href="/Dashboard/NestedUpload" class="nav-link  py-3 border-bottom rounded-0" aria-current="page" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Home" data-bs-original-title="Home">
                                <i class="fa-solid fa-robot"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link active py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Dashboard" data-bs-original-title="Dashboard">
                                <i class="fa-solid fa-magnifying-glass"></i>
                                </a>
                            </li>
                            <li>
                                <a href="/MedicationMain" class="nav-link py-3 border-bottom rounded-0" data-bs-toggle="tooltip" data-bs-placement="right" aria-label="Orders" data-bs-original-title="Orders">
                                <i class="fa-solid fa-file-pdf"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-10'>
                    <div className='mt-5'>
                        {/* <Outlet></Outlet> */}
                        <DiseasePredictionForm/>
                        {/* <!-- Modal --> */}
                        <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header ">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">Profile</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    {(
                                        <div class="modal-body mt-3">
                                            <h5>User ID : {userid} </h5>
                                        </div>
                                    )}
                                    <div class="modal-footer border-0">
                                        <button type="button" class="btn btn-secondary" onClick={logout} data-bs-dismiss="modal">Log Out</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div></div>

            </div>

        </div>
    )
}

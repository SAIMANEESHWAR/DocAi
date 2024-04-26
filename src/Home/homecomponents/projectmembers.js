import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../photos/image_3.jpg'
import mem1 from '../../photos/mem-1.jpg';
import mem2 from '../../photos/mem-2.jpg';
import me from '../../photos/me2.jpg';
import lotusakshay from '../../photos/lotusakshay.jpg';
import ananya from '../../photos/mem8.jpg'

export default function projectmembers() {
    const imgSources = [me, mem1, mem2,ananya,lotusakshay];
    const namesources = ["SaiManeeshwar", "Sravani", "Vinay","Ananya","Akshay"]
    return (
        <div>
            <div class="container mt-5">
                <div class="p-5 text-center bg-body-tertiary rounded-3">
                    <h1 class="text-body-emphasis">PROJECT-MEMBERS</h1>

                </div>
                <div class="row d-flex justify-content-center row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    {imgSources.map((images123, index) => (
                        <div class="col">
                            <div class="card shadow-sm">
                                <img src={images123} className=" card-img-top" width="100%" height="290"></img>
                                <div class="card-body">
                                    <h3>{namesources[index]}</h3>
                                    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget justo facilisis, quis vestibulum urna rhoncus. Fusce sit amet venenatis tortor. Nullam auctor libero vitae lectus bibendum, ut tempus odio faucibus.
                                    </p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        {/* <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                                    </div> */}
                                        <small class="text-body-secondary"><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star fa-beat"></i><i class="fa-solid fa-star-half-stroke fa-beat"></i></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

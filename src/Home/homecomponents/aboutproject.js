import React from 'react';
import { Link } from 'react-router-dom';

export default function Aboutproject() {
  return (
    <div>
        <div className='container mt-5'>
            <div class="row align-items-md-stretch">
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark rounded-3">
          <h2>About The Project</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget justo facilisis, quis vestibulum urna rhoncus. Fusce sit amet venenatis tortor. Nullam auctor libero vitae lectus bibendum, ut tempus odio faucibus.</p>
          <button class="btn btn-outline-light" disabled type="button">Sources</button>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 bg-body-tertiary border rounded-3">
          <h2>Git Hub</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod tellus eget justo facilisis, quis vestibulum urna rhoncus. Fusce sit amet venenatis tortor. Nullam auctor libero vitae lectus bibendum, ut tempus odio faucibus.</p>
          <button class="btn btn-outline-secondary "disabled type="button">Git Link</button>
        </div>
      </div>
    </div>
</div>
    <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div class="col-md-4 d-flex align-items-center">
      <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
      <i class="fa-solid fa-s fa-bounce h2 me-1"></i><i class="fa-solid fa-a fa-bounce h2 me-1"></i><i class="fa-solid fa-i fa-bounce h2 me-1"></i>
      </a>
      <span class="mb-2 mb-md-0 text-body-secondary"> Copyright © 2023 All rights reserved</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li class="ms-3"><Link class="text-body-secondary" to="https://www.linkedin.com/in/saimaneeshwar-siddapuram/"><i class="fa-brands fa-linkedin h2"></i></Link></li>
      <li class="ms-3"><Link class="text-body-secondary" to="https://www.instagram.com/"><i class="fa-brands fa-instagram h2"></i></Link></li>
      <li class="ms-3"><Link class="text-body-secondary" to="https://github.com/Designathon2024/VNRD_CYS_05"><i class="fa-brands fa-github h2"></i></Link></li>
    </ul>
  </footer>
</div>


    </div>
  )
}

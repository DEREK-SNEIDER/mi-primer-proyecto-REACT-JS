import React from 'react';
import logo from '../NavBar/logo-compra.png';
import carito from '../NavBar/logo-carito-de-compra.png'
import '../NavBar/styles.css';
/* import NavBar from 'navbar'; */

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <img class="l-g"  src={logo} alt={logo} />
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Favorito</a>
        </li>
        {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
        <li class="nav-item">
          <a class="nav-link " href='#'>Contacto</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
      <img class="carito"  src={carito} alt={carito} />
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar 
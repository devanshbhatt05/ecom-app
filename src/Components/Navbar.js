import React from 'react'

const Navbar = ({onshow,addshow}) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">E-commerce Webiste</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">HOME<span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
      <a className="nav-link active" aria-current="page" href="#" onClick={onshow} >{addshow ?'CloseProduct':'AddProducts'}</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Cart</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="#">Support</a>
      </li>
    </ul>
  </div>
</nav> 

  )
}

export default Navbar
import './index.scss'
function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="#"><button type="button" class="btn btn-outline-secondary">Logo</button>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hotels
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Packages
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Destination
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
          </ul>
          <button type="button" class="btn btn-outline-info">Login</button>
        </div>
      </div>
    </nav>
  )
}
export default function HeroContainer() {
  return (
    <div className="container-fuild text-center hero-container ">
      <div className="container">
        <div className="d-flex justify-content-end pt-3">
          <div>
            <img src="/assets/place.png" className="small-icon" /> support@mail.com
          </div>
          <div>&nbsp; &nbsp; <img src="/assets/place.png" className="small-icon" /> 1234567890, 1234567890</div>
        </div>
      </div>
      <NavBar />
      <div className="container hero-content d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-uppercase">Your journey begins</h1>
        <div className="hero-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div className="pt-5">
          <div className="row g-0 text-center">

            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-lg-2 col-md-2 col-sm-12 col-xs-12 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-lg-1 col-md-1 col-sm-12 col-xs-12 search d-flex justify-content-center align-content-center">
              <img className="search1" src="./assets/search.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
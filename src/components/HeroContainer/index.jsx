import './index.scss'
export default function HeroContainer() {
  return (
    <div className="container-fuild text-center hero-container d-flex align-items-center justify-content-center">
      <div className="hero-content">
        <h1 className="text-uppercase">Your journey begins</h1>
        <div className="hero-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>
        <div className="pt-5">
          <div className="row g-0 text-center">
            <div className="col-sm-6 col-md-3 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-sm-6 col-md-3 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-sm-6 col-md-2 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-sm-6 col-md-3 form-field separator">
              <img src="/assets/place.png" className="icon" />
              <input className="form-input" placeholder="Where From" />
            </div>
            <div className="col-sm-6 col-md-1 search">
              <img src="./assets/search.png"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
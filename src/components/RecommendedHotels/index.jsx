import './index.scss'
export default function Destinations() {
  return (
    <div className="container-fluid">
      <div className="container text-center services-container d-flex justify-content-center flex-column py-5">
        <div className="text-center">
          <h1 className="text-uppercase">Recommended Hotels</h1>
          <p className="pb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <div className="diamond-separator"></div>
        </div>
        <div className="package-list card-list d-flex justify-content-between py-5">
          {[1, 2, 3].map(() => {
            return (
              <div className="card shadow">
                <img className="card-img-top image-align-fit" src="./assets/cities/dubai.jpg" />
                <div className="d-flex px-3 py-2 align-items-center">
                  <div className="flex-grow-1 d-flex flex-column">
                    <div className="fs-5 fw-bold">Andaman</div>
                    <div>10+ Hotels</div>
                  </div>
                  <div className="flex-grow-1 py-2 px-3 text-end">
                    <div>Starting From</div>
                    <div><span className="aqua-color fw-bold">$3000</span>/<b>Day</b></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="d-flex py-3">
          <button type="button" class="btn btn-outline-info ms-auto">View More =&gt;</button>
        </div>
      </div>
    </div>
  )
}
import './index.scss'
import { ReactComponent as Star } from '../../icons/star.svg'
export default function Destinations() {
  return (
    <div className="container-fluid package-container">
      <div className="container text-center services-container d-flex justify-content-center flex-column py-5">
        <div className="text-center">
          <h1 className="text-uppercase">Our Packages</h1>
          <p className="pb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <div className="diamond-separator"></div>
        </div>
        <div className="package-list card-list d-flex justify-content-between py-5">
          {[1, 2, 3].map(() => {
            return (
              <div className="card shadow">
                <img className="card-img-top image-align-fit" src="./assets/cities/dubai.jpg"/>
                <div className="d-flex flex-column p-3">
                  <div>
                    <div><b>Dubai</b></div>
                    <div> Duration: <b><i>4 days 3 nights</i></b></div>
                    <div className="fs-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                  </div>
                </div>
                <div className="d-flex package-border-top">
                  <div className="flex-grow-1 d-flex flex-column text-center">
                    <div>
                      {[1, 2, 3, 4, 5].map(() => <Star className="star-icon" />)}
                    </div>
                    <div>(50 Reviews)</div>
                  </div>
                  <div className="flex-grow-1 package-border-left py-2 px-3 d-flex justify-content-between">
                    <div>Starting <br/>From:</div>
                    <div><s>$400</s><div className="aqua-color fw-bold">$300</div></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        <div className="d-flex py-3">
          <div className="d-flex flex-grow-1 justify-content-center fs-5">
            <div className="pe-3"> ← </div>
            <div> → </div>
          </div>
          <button type="button" class="btn btn-outline-light">View More =&gt;</button>
        </div>
      </div>
    </div>
  )
}
import './index.scss'
import { ReactComponent as Star } from '../../icons/star.svg'

export default function HappyTravellers() {
  return (
    <div className="container-fluid">
      <div className="container services-container d-flex justify-content-center flex-column py-5">
        <div className="text-center">
          <h1 className="text-uppercase">Happy Travellers</h1>
          <p className="pb-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
          </p>
          <div className="diamond-separator"></div>
        </div>
        <div className="row">
          <div className="col-md-4 bg-image-happy-travellers">
          </div>
          <div className="col-md-8">
            <div className="ms-3">
              <div className="pb-2">
                <div class="fw-bold fs-5">Explore Andaman</div>
                {[1, 2, 3, 4, 5].map(() => <Star className="star-icon" />)}
              </div>
              <div className="w-75">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>
              <div className="pt-3"><b>Sakthi Vel</b><div className="fs-6">Bangalore, 2 Days ago</div></div>
            </div>
          </div>
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
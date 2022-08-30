import './index.scss'
export default function Destinations() {
  return (
    <div className="container text-center services-container d-flex justify-content-center flex-column py-5">
      <div className="text-center">
        <h1 className="text-uppercase">Top Destinations</h1>
        <p className="pb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
        <div className="diamond-separator"></div>
      </div>
      <div className="py-2">
        <div className="row card-list justify-content-center">
          {[1, 2, 3].map(() => {
            return (
              <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 d-flex justify-content-center py-3">
                <div className="card shadow bg-image-dubai justify-content-end">
                  <div className="d-flex justify-content-between text-uppercase">
                    <div className="text-white"><b>Dubai</b></div>
                    <div className="aqua-color"><b>Explore &gt;&gt;</b></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="d-flex py-3">
        <div className="d-flex flex-grow-1 justify-content-center fs-5">
          <div className="pe-3"> ← </div>
          <div> → </div>
        </div>
        <button type="button" class="btn btn-outline-info">View More &#8594;</button>
      </div>
    </div>
  )
}
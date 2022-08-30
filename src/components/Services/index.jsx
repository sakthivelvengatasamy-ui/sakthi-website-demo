import './index.scss'
export default function Services() {
  return (
    <div className="container text-center services-container d-flex justify-content-center align-items-center flex-column py-5">
      <div className="text-center">
        <h1 className="text-uppercase">Our Best Services</h1>
        <p className="pb-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry
        </p>
        <div className="diamond-separator"></div>
      </div>
      <div>
        <div className="py-2">
          <div className="row card-list justify-content-center">
            {[1, 2, 3].map(() => {
              return (
                <div className="col-md-6 col-lg-4 col-sm-12 col-xs-12 d-flex justify-content-center py-3">
                  <div className="card shadow">
                    <img className="icon align-self-center" src="./assets/service/destination.png" />
                    <div className="title pt-4">Lorem Ipsum is simply dummy</div>
                    <div className="description pt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
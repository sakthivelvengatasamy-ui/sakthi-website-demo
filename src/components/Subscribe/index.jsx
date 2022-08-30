import './sindex.scss'

export default function Subscribe() {
  return (
    <div className="container-fluid package-container1 d-flex justify-content-center align-items-center">
      <div className="text-center py-2 subscriber-nested-container">
        <div className="text-center">
          <h3 className="text-uppercase color1">Subscribe to our newsletter and join 15000+ Subscriber</h3>
        </div>
        <div class="row mb-3 g-0">
        <div className="col-md-8">
          <input type="text" class="form-control custom-input" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        </div>
        <div className="col-md-4">
            <div class="customd w-100 text-white" id="basic-addon2">SUBSCRIBE</div>
        </div>
      </div>
      </div>
    </div>
  )
}
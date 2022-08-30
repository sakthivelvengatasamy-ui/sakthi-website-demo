import './sindex.scss'

export default function Subscribe() {
  return (
    <div className="container-fluid package-container1">
      <div className="container text-center services-container d-flex justify-content-center flex-column py-2">
        <div className="text-center">
          <h1 className="text-uppercase color1">Subscribe to our newsletter and join</h1>
          <h1 className="text-uppercase color1">15000+ Subscriber</h1>
        </div>
        <div class="input-group mb-3 ">
        <input type="text" class="form-control" placeholder="Enter Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <span class="input-group-text customd" id="basic-addon2">SUBSCRIBE</span>
      </div>
        <div className="d-flex py-3">
          <div className="d-flex flex-grow-1 justify-content-center fs-5">
            <div className="pe-3"> ← </div>
            <div> → </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
import './findex.scss'

export default function StickyFooter() {
  return (
    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">ABOUT US</h5>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </div>
            </div>


            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget no-box">
                <h5 class="widget-title">USEFUL LINKS</h5>
                <ul class="thumbnail-widget text-dark">
                  <li>
                    <div><a className="text-dark" href="#.">→ &nbsp; &nbsp;Get Started</a></div>
                  </li>
                  <li>
                    <div><a className="text-dark" href="#.">→ &nbsp; &nbsp;Top Leaders</a></div>
                  </li>
                  <li>
                    <div><a className="text-dark" href="#.">→ &nbsp; &nbsp;Get Started</a></div>
                  </li>
                  <li>
                    <div><a className="text-dark" href="#.">→ &nbsp; &nbsp;Get Started</a></div>
                  </li>
                </ul>
              </div>
            </div>



            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget no-box">
                <h5 class="widget-title mb-3">REACH US</h5>
                <div class="d-flex contact-us flex-column">
                  <div className="pb-3"><img src="./assets/place.png" className="icon" />&nbsp;&nbsp;Top Leaders</div>
                  <div className="pb-3"><img src="./assets/place.png" className="icon" />&nbsp;&nbsp;Top Leaders</div>
                  <div className="pb-3"><img src="./assets/place.png" className="icon" />&nbsp;&nbsp;Top Leaders</div>
                </div>
                <div>
                  <a href="#"> <i class="fa fa-facebook"> </i> </a>
                  <a href="#"> <i class="fa fa-twitter"> </i> </a>
                  <a href="#"> <i class="fa fa-youtube"> </i> </a>
                </div>
              </div>
            </div>
            <br/>
              <br/>


              </div>
          </div>

          <div class="footer-copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12 text-center">
                  <p> © 2022. Travel Website.</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </footer>
        )
}
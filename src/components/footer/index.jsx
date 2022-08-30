import './findex.scss'

export default function StickyFooter() {
  return (
    <footer id="footer" class="footer-1">
      <div class="main-footer widgets-dark typo-light">
        <div class="container">
          <div class="row">

            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget subscribe no-box">
                <h5 class="widget-title">ABOUT US<span></span></h5>
                <p>About the company, little description will goes here.. </p>
              </div>
            </div>


            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget no-box">
                <h5 class="widget-title">USEFUL LINKS<span></span></h5>
                <ul class="thumbnail-widget">
                  <li>
                    <div class="thumb-content"><a href="#.">&nbsp;Get Started</a></div>
                  </li>
                  <li>
                    <div class="thumb-content"><a href="#.">&nbsp;Top Leaders</a></div>
                  </li>
                  
                </ul>
              </div>
            </div>



            <div class="col-xs-12 col-sm-6 col-md-4">
              <div class="widget no-box">
                <h5 class="widget-title">REACH US<span></span></h5>
                <a href="#"> <i class="fa fa-facebook"> </i> </a>
                <a href="#"> <i class="fa fa-twitter"> </i> </a>
                <a href="#"> <i class="fa fa-youtube"> </i> </a>
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
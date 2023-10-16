import React from 'react'

function Footer() {
  return (
    <footer className="">
      <div className="row p-0">
        <div className="col-md-3 col-12 p-0">
          <div className="footerLogo">logo</div>
        </div>
        <div className="col-md-6 col-12 row p-0">
          <div className="col-md-4 p-0 col-12 ">
            <h3>Company</h3>
            <h4>About Us</h4>
            <h4>Support</h4>
            <h4>Blog</h4>
            <h4>Login</h4>
            <h4>Sign Up</h4>
            <h4 className="mb-5 mb-md-0">Contact Us</h4>
          </div>
          <div className="col-md-4 col-12 p-0">
            <h3>Programs</h3>
            <h4>Affliate Programs</h4>
            <h4>Ambassador Program</h4>
            <h4 className="mb-5 mb-md-0">Partnership Program</h4>
          </div>
          <div className="col-md-4 col-12 p-0">
            <h3>Policy</h3>
            <h4>Legal</h4>
            <h4>DMCA</h4>
            <h4>USC 2257</h4>
            <h4>Privacy Policy</h4>
            <h4 className="mb-5 mb-md-0">Terms and Conditions</h4>
          </div>
        </div>
        <div className="col-md-3 col-12 p-0">
          <div className="socialIconGroup">
          <h3 className="d-none d-md-block">Follow Us</h3>
          <div className="socialIconGroup">
            <img src="/assets/images/facebook.png"/>
            <img src="/assets/images/twitter.png"/>
            <img src="/assets/images/youtube.png"/>
            <img src="/assets/images/instagram.png"/>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
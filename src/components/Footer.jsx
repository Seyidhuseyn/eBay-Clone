import React from 'react'

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <div className='hr'>
          <hr />
      </div>
      <div className="footer">
          <div className="card">
              <h3>Buy</h3>
              <a href="">Registration</a>
              <a href="">eBay Money Back Guarantinee</a>
              <a href="">Bidding & buying help</a>
              <a href="">Stores</a>
          </div>
          <div className="card">
              <h3>Sell</h3>
              <a href="">Start selling</a>
              <a href="">Learn to sell</a>
              <a href="">Affiliates</a>
              <div className="card">
                  <h3>Tools & apps</h3>
                  <a href="">Developers</a>
                  <a href="">Security center</a>
                  <a href="">Site map</a>
              </div>
          </div>
          <div className="card">
              <h3>Stay connected</h3>
              <a href="">eBay's Blogs</a>
              <a href=""><i class="fa-brands fa-facebook-square"></i>Facebook</a>
              <a href=""><i class="fa-brands fa-twitter-square"></i>Twitter</a>
          </div>
          <div className="card">
              <h3>About eBay</h3>
              <a href="">Company info</a>
              <a href="">News</a>
              <a href="">Investors</a>
              <a href="">Careers</a>
              <a href="">Goverment relations</a>
              <a href="">Advertise with us</a>
              <a href="">Policies</a>
              <a href="">Vertified Rights (VeRO) Program</a>
          </div>
          <div className="card">
              <h3>Help & Contact</h3>
              <a href="">Seller Information Center</a>
              <a href="">Contact us</a>
              <div className="card">
                  <h3>Community</h3>
                  <a href="">Announcement</a>
                  <a href="">Discussion boards</a>
                  <a href="">eBay Giving Works</a>
              </div>
          </div>
      </div>
      <div className="copyright">
          <p>Copyright &copy; 1995-2022 eBay Inc. All Rights Resevred. <a href="">Accessibility</a>, <a href="">User Agreement</a>, <a href="">Privacy</a>, <a href="">Cookies</a>, <a href="">Do not sell my personal information</a> and <a href="">AdChoice</a>&#x1F6C8;</p>
      </div>
    </div>
  )
}

export default Footer

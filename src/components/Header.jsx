
import React from 'react'
import Logo from '../components/img/logo.png'
const Header = () => {
  return (
    <div>
      <hr />
      <div className="header-wrapper">
        <div className="header">
          <img src={Logo} alt="" className='logo' />
          <div class="dropdown">
            <button class="dropbtn">Shop by category<i class="fa-solid fa-angle-down"></i></button>
            <div class="dropdown-content">
              <div>
                <h4>Collectibles & art<i class="fa-solid fa-angle-right"></i></h4>
                <a href="#">Collectibles</a>
                <a href="#">Antiques</a>
                <a href="#">Sports memorabilia</a>
                <a href="#">Art</a>
              </div>
              <div>
                <h4>Home & garden<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">Yar, garden & outdoor</a>
              <a href="#">Crafts</a>
              <a href="#">Home improvement</a>
              <a href="#">Pet supplies</a>
              </div>
              <div>
                <h4>Sporting goods<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">Outdoor sports</a>
              <a href="#">Team sports</a>
              <a href="#">Exercise & fitness</a>
              <a href="#">Golf</a>
              </div>
              <div>
                <h4>Electronics<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">Computers & tablets</a>
              <a href="#">Cameras & photo</a>
              <a href="#">TV, audio & surveillance</a>
              <a href="#">Cellphones & accessories</a>
              </div>
              <div>
                <h4>Auto Parts & Accessories<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">GPS & Security Devices</a>
              <a href="#">Radar & Laser Detectors</a>
              <a href="#">Care & Detailling</a>
              <a href="#">Scooter parts & Accessories</a>
              </div>
              <div>
                <h4>Toys & hobbies<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">Radio control</a>
              <a href="#">Kids toys</a>
              <a href="#">Action figures</a>
              <a href="#">Dolls & bears</a>
              </div>
              <div>
                <h4>Fashion<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">Women</a>
              <a href="#">Men</a>
              <a href="#">Jewelry & watches</a>
              <a href="#">Shoes</a>
              </div>
              <div>
                <h4>Musical instruments & gear<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">Guitar</a>
              <a href="#">Pro audio equipment</a>
              <a href="#">Sring</a>
              <a href="#">Stage lighting & effects</a>
              </div>
              <div>
                <h4>Other categories<i class="fa-solid fa-angle-right"></i></h4>
              <a href="#">Video games & consoles</a>
              <a href="#">Health & beauty</a>
              <a href="#">Baby</a>
              <a href="#">Business & industrial</a>
              </div>
            <hr />
            <h5 className='categories'>See all categories<i class="fa-solid fa-angle-right"></i></h5>
            </div>
          </div>
          <div className="search-bar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder='Search for anything' />
            <hr />
            <select id="st-cat" className='st-category'>
              <option value="">All Categories</option>
              <option value="">Antiques</option>
              <option value="">Art</option>
              <option value="">Baby</option>
              <option value="">Books</option>
              <option value="">Business &amp; Industrial</option>
              <option value="">Cameras &amp; Photo</option>
              <option value="">Cell Phones &amp; Accessories</option>
              <option value="">Clothing, Shoes &amp; Accessories</option>
              <option value="">Coins &amp; Paper Money</option>
              <option value="">Collectibles</option>
              <option value="">Computers/Tablets &amp; Networking</option>
              <option value="">Consumer Electronics</option>
              <option value="">Crafts</option>
              <option value="">Dolls &amp; Bears</option>
              <option value="">DVDs &amp; Movies</option>
              <option value="">eBay Motors</option>
              <option value="">Entertainment Memorabilia</option>
              <option value="">Gift Cards &amp; Coupons</option>
              <option value="">Health &amp; Beauty</option>
              <option value="">Home &amp; Garden</option>
              <option value="">Jewelry &amp; Watches</option>
              <option value="">Music</option>
              <option value="">Musical Instruments &amp; Gear</option>
              <option value="">Pet Supplies</option>
              <option value="">Pottery &amp; Glass</option>
              <option value="">Real Estate</option>
              <option value="">Specialty Services</option>
              <option value="">Sporting Goods</option>
              <option value="">Sports Mem, Cards &amp; Fan Shop</option>
              <option value="">Stamps</option>
              <option value="">Tickets &amp; Experiences</option>
              <option value="">Toys &amp; Hobbies</option>
              <option value="">Travel</option>
              <option value="">Video Games &amp; Consoles</option>
              <option value="">Everything Else</option>
            </select>
          </div>
          <button className='search-btn'>Search</button>
          <a href="#" className='advanced'>Advanced</a>
        </div>
      </div>
      <a href="#" class="to-top" title='Scroll to top'><i class="fas fa-chevron-up"></i></a>
    </div>
  )
}

export default Header

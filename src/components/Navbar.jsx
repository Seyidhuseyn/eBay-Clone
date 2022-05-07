import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
        <div className="navbar">
            <div className="navbar-left">
                <h4>Hi! <a href="#">Sign in</a> or <a href="#">register</a></h4>
                <span>Daily Deals</span>
                <span>Help & Contact</span>
            </div>
            <div className="navbar-right">
                <span>Ship to</span>
                <span>Sell</span>
                <span>Watchlist</span>
                <span>
                  <div class="dropdown">
                    <button class="dropbtn">My eBay<i class="fa-solid fa-angle-down"></i></button>
                    <div class="dropdown-content">
                      <a href="#">Summary</a>
                      <a href="#">Recently Viewed</a>
                      <a href="#">Bids/Offers</a>
                      <a href="#">Watchlist</a>
                      <a href="#">Purchase History</a>
                      <a href="#">Buy Again</a>
                      <a href="#">Selling</a>
                      <a href="#">Saved Searches</a>
                      <a href="#">Saved Sellers</a>
                      <a href="#">Messages</a>
                    </div>
                  </div>
                </span>
                <i class="far fa-bell"></i>
                <i class="fas fa-cart-arrow-down"></i>
            </div>
        </div>
    </div>
  )
}

export default Navbar

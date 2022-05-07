import React from 'react'
import Home from '../components/img/ct-home.jpg'
import Electronics from '../components/img/electronics.jpeg'
import Fashion from '../components/img/fashion.jpeg'
import Health_Beauty from '../components/img/health_beauty.jpeg'
import Home_Garden from '../components/img/home_garden.jpeg'
import Motors from '../components/img/motors.jpeg'
import Sports from '../components/img/sports.jpeg'
import Industrial from '../components/img/industrial.jpeg'
import Sell from '../components/img/sell.jpeg'
const Category = () => {
  return (
    <div className='category-wrapper'>
      <hr />
      <div className='category'>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Home</button>
            <hr />
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn"><i class="fa-solid fa-heart"></i>Saved</button>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Electronics</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <h4>Most popular categories</h4>
                  <hr />
                  <a href="#">Cell phones and accessories</a>
                  <a href="#">Video games and consoles</a>
                  <a href="#">Computers and tablets</a>
                  <a href="#">Cameras and photos</a>
                  <a href="#">Camera drones</a>
                  <a href="#">Asian Brands</a>
                  <a href="#">Smart home</a>
                </div>
                <div className="column">
                  <h4>More categories</h4>
                  <hr />
                  <a href="#">Apple</a>
                  <a href="#">Samsung</a>
                  <a href="#">Xiaomi</a>
                  <a href="#">Portable audio and headphones</a>
                  <a href="#">Smart watches</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
                <div className="column">
                <img src={Electronics} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Fashion</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                <h4>Most popular categories</h4>
                  <hr />
                  <a href="#">Footwear</a>
                  <a href="#">Women's clothing</a>
                  <a href="#">Footwear for women</a>
                  <a href="#">Clothes for men</a>
                  <a href="#">Men's footwear</a>
                  <a href="#">Watches</a>
                  <a href="#">Jewelry</a>
                </div>
                <div className="column">
                  <h4>More categories</h4>
                  <hr />
                  <a href="#">Accessories for men</a>
                  <a href="#">Accessories for women</a>
                  <a href="#">Bags and wallets for women</a>
                  <a href="#">Mens sunglasses</a>
                  <a href="#">Womens sunglasses</a>
                  <a href="#">Sneakers</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
                <div className="column">
                <img src={Fashion} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Health & Beauty</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <h4>More popular categories</h4>
                  <hr />
                  <a href="#">Beauty</a>
                  <a href="#">Makeup</a>
                  <a href="#">Health</a>
                  <a href="#">K-Beauty</a>
                  <a href="#">Manicure and pedicure</a>
                  <a href="#">Hair product</a>
                  <a href="#">Skin product</a>
                  <a href="#">Orthopedic product</a>
                </div>
                <div className="column">
                  <h4>More categories</h4>
                  <hr />
                  <a href="#">Vitamins and supplements</a>
                  <a href="#">Shavingand waxing</a>
                  <a href="#">Bath and personal hygiene</a>
                  <a href="#">Oral hygiene</a>
                  <a href="#">Massagers</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
                <div className="column">
                <img src={Health_Beauty} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Home & Garden</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <h4>Most popular categories</h4>
                  <hr />
                  <a href="#">Workshop Tools and Equipment</a>
                  <a href="#">Patio, garden and outdoors</a>
                  <a href="#">Home improvement</a>
                  <a href="#">Kitchen, diningand bar</a>
                  <a href="#">Lamps, lights and fans</a>
                  <a href="#">Interior decoration</a>
                  <a href="#">Home organization</a>
                  <a href="#">Home appliances</a>
                </div>
                <div className="column">
                  <h4>More categories</h4>
                  <hr />
                  <a href="#">Toys</a>
                  <a href="#">Pets</a>
                  <a href="#">Crafts</a>
                  <a href="#">Art supplies</a>
                  <a href="#">Musical instruments</a>
                  <a href="#">Jewelrynand beads</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
                <div className="column">
                <img src={Home_Garden} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Sports</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <h4>Most popular categories</h4>
                  <hr />
                  <a href="#">cycling</a>
                  <a href="#">Fitness, runnig and yoga</a>
                  <a href="#">Fitness Tech</a>
                  <a href="#">Fishing</a>
                  <a href="#">Camping</a>
                  <a href="#">Scooters</a>
                  <a href="#">Team sports</a>
                </div>
                <div className="column">
                  <h4>More categories</h4>
                  <hr />
                  <a href="#">Watersports</a>
                  <a href="#">Winter sports</a>
                  <a href="#">Box and MMA</a>
                  <a href="#">Swimming</a>
                  <a href="#">GPS & Running Watches</a>
                  <a href="#">Garmin</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
                <div className="column">
                <img src={Sports} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Collectibles and Art</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <h4>Most popular categories</h4>
                  <hr />
                  <a href="#">Collectibles</a>
                  <a href="#">Art</a>
                  <a href="#">Action figures</a>
                  <a href="#">Cartoon characters</a>
                  <a href="#">Movie and TV characters</a>
                  <a href="#">Diecast</a>
                  <a href="#">Musical memorabilia</a>
                </div>
                <div className="column">
                  <h4>More categories</h4>
                  <hr />
                  <a href="#">Sports memorabilia</a>
                  <a href="#">Trading card games</a>
                  <a href="#">Antiques</a>
                  <a href="#">Comics</a>
                  <a href="#">Funko pop</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Industrial equipment</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <h4>Most popular categories</h4>
                  <hr />
                  <a href="#">Dental healthcare</a>
                  <a href="#">Electronic equipment and supplies</a>
                  <a href="#">Metallurgy and manufacturing</a>
                  <a href="#">Motors and industrial automation</a>
                  <a href="#">Heavy equipment parts</a>
                  <a href="#">Light industrial tools</a>
                  <a href="#">Inspection, measurement and testing equipment</a>
                </div>
                <div className="column">
                  <h4>More categories</h4>
                  <hr />
                  <a href="#">Packing and shiping</a>
                  <a href="#">Office supplies and equipment</a>
                  <a href="#">Printingand grapic arts</a>
                  <a href="#">Restaurants and food service</a>
                  <a href="#">Maintenance and safety</a>
                  <a href="#">Retail and services</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
                <div className="column">
                <img src={Industrial} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Motors</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <h4>Car</h4>
                  <hr />
                  <a href="#">Auto and truck parts</a>
                  <a href="#">Toolsand supplies</a>
                  <a href="#">Turbo chargers</a>
                  <a href="#">Clothing and merchandise</a>
                  <a href="#">Shock absorbers</a>
                  <a href="#">Electronic</a>
                  <a href="#">Car Care and Detailing</a>
                  <a href="#">Vintage pieces</a>
                </div>
                <div className="column">
                  <h4>Motorcycle and Offers</h4>
                  <hr />
                  <a href="#">Motorcycle parts</a>
                  <a href="#">Body and frame</a>
                  <a href="#">Engines and parts</a>
                  <a href="#">Accessories</a>
                  <a href="#">Exhausts and systems</a>
                  <a href="#">Rims</a>
                  <a href="#">Deals</a>
                  <a href="#">Sell on eBay</a>
                </div>
                <div className="column">
                <img src={Motors} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Deals</button>
          </div>
        </div>
        <div className="dropdown-wrapper">
          <div className="dropdown">
            <button className="dropbtn">Sell</button>
            <div className="dropdown-content">   
              <div className="row">
                <div className="column">
                  <br />
                  <hr />
                  <a href="#">Create listing</a>
                  <a href="#">Apply as a business</a>
                  <a href="#">Seller center</a>
                </div>
                <div className="column"></div>
                <div className="column">
                <img src={Sell} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-img">
          <div>
            <div className="shop-now">
              <h2>A World of Vehicles</h2>
              <span>Find the parts you need for cars, motorbikes and more.</span>
              <button>Shop Now<i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <img src={Home} />
          </div>
      </div>
  </div>
  )
}

export default Category
import React from 'react'
import Apple from '../components/img/apple.jpg'
import Samsung from '../components/img/samsung.jpg'
import Sony from '../components/img/sony.jpg'
import Ugreen from '../components/img/ugreen.jpg'
import Xiaomi from '../components/img/xiaomi.jpg'
import Nike from '../components/img/nike.jpg'
import Pretty from '../components/img/pretty.jpg'

import Sneakers from '../components/img/sneakers.jpg'
import Beauty from '../components/img/beauty.jpg'
import Watches from '../components/img/watches.jpg'
import Fishing from '../components/img/fishing.jpg'
import Collectibles from '../components/img/collectibles.jpg'
import Smartphone from '../components/img/smartphone.jpg'
import Sell from '../components/img/sell.jpg'

import Light_1 from '../components/img/light-1.jpg'
import Light_2 from '../components/img/light-2.jpg'
import Light_3 from '../components/img/light-3.jpg'
import Light_4 from '../components/img/light-4.jpg'
import Washing from '../components/img/washing.jpg'
import Ssd from '../components/img/ssd.jpg'
import Phone_1 from '../components/img/phone-1.jpg'
import Phone_2 from '../components/img/phone-2.jpg'
const Container = () => {
  return (
    <div className="container-wrapper">
      <div className="container">
        <div className="popular-brands">
          <div className="container-text">
            <h2>Explore popular brands</h2>
            <p>See all</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="brands">
            <a href="#">
            <img src={Apple} />
            <h4>Apple</h4>
            </a>
            <a href="#">
            <img src={Samsung} />
            <h4>Samsung</h4>
            </a>
            <a href="#">
            <img src={Sony} />
            <h4>Sony</h4>
            </a>
            <a href="#">
            <img src={Ugreen} />
            <h4>Ugreen</h4>
            </a>
            <a href="#">
            <img src={Xiaomi} />
            <h4>Xiaomi</h4>
            </a>
            <a href="#">
            <img src={Nike} />
            <h4>Nike</h4>
            </a>
            <a href="#">
            <img src={Pretty} />
            <h4>Born Pretty</h4>
            </a>
          </div>
        </div>
        <div className="popular-categories">
        <div className="container-text">
            <h2>Explore popular Categories</h2>
            <p>See all</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="brands">
            <a href="#">
            <img src={Sneakers} />
            <h4>Sneakers</h4>
            </a>
            <a href="#">
            <img src={Beauty} />
            <h4>Korean beauty</h4>
            </a>
            <a href="#">
            <img src={Watches} />
            <h4>Wristwatches</h4>
            </a>
            <a href="#">
            <img src={Fishing} />
            <h4>Fishing</h4>
            </a>
            <a href="#">
            <img src={Collectibles} />
            <h4>Collectibles</h4>
            </a>
            <a href="#">
            <img src={Smartphone} />
            <h4>Smartphone</h4>
            </a>
            <a href="#">
            <img src={Sell} />
            <h4>Sell</h4>
            </a>
          </div>
        </div>
        <div className="daily-deals">
        <div className="container-text">
            <h2>Daily Deals</h2>
            <p>See all</p>
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="brands">
            <a href="#">
            <img src={Light_1} />
            <h4>$12.82</h4>
            </a>
            <a href="#">
            <img src={Light_2} />
            <h4>$12.39</h4>
            </a>
            <a href="#">
            <img src={Light_3}/>
            <h4>$7.32</h4>
            </a>
            <a href="#">
            <img src={Light_4} />
            <h4>$7.56</h4>
            </a>
            <a href="#">
            <img src={Washing} />
            <h4>$31.59</h4>
            </a>
            <a href="#">
            <img src={Ssd} />
            <h4>$31.58</h4>
            </a>
            <a href="#">
            <img src={Phone_1} />
            <h4>$1,547.60</h4>
            </a>
            <a href="#">
            <img src={Phone_2} />
            <h4>$379.99</h4>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Container
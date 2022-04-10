import React from 'react';
import "./Home.css"
import Product from './Product';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {Carousel} from "react-responsive-carousel"


function Home() {
  return (
    <div className="home">
        <div className='="home__container'>
         <Carousel
          showThumbs={false}
          infiniteLoop
          showArrows={false}
          interval={3000}
          autoPlay
          transitionTime={1500}
          stopOnHover={false}
          swipeable={false}
          emulateTouch
          showIndicators={false}
          showStatus={false}
// let settings = {
// showThumbs={false}
// infinite={false}
// speed={1000}
// arrows={true}
// slidesToShow={5}
// slidesToScroll={4}

          >
        <img
        className="home__image"    
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonPhysicalStores/LandingPages/Store-page-banner._CB1537991313_.jpg"
        alt=""
        />

      <img
        className="home__image"    
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fyGD5AAK5b_DsMS8Yr4LdJmQexKwyNvRhrK67wPwThkCTF-UmEQC0wsvwqiIp5Jv7A&usqp=CAU"
        alt=""
        />

        <img
        className="home__image"    
        src="https://images-na.ssl-images-amazon.com/images/G/01/SBP/2022/WHM/Event_Page/SBE_IWD22_EventPage_Hero_Desktop_1500x300_EN.jpg"
        alt=""
        /> 
</Carousel> 
        {/* <img
        className="home__image"    
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonPhysicalStores/LandingPages/Store-page-banner._CB1537991313_.jpg"
        alt=""
        />   */}


          <div className='home__row'>
          <Product
          id="12321341"
          title="I'm Rising: Determined. Confident. Powerful."
          price={12.49}
          rating={5}
          image="https://m.media-amazon.com/images/I/611v8h6o3gL._AC_SR180,120_QL70_.jpg"
          />
          <Product
          id="23488912"
          title="Ethiopian Alphabet Canvas Poster, Geez Alphabet with English Pronunciation, 24 by 36 Inches (Blue)"
          price={49.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81XGW172ufL._AC_UL320_.jpg"
          />
          <Product
          id="12546325"
          title="Fresh Roast SR540."
          price={209.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/71OfOcUzF5L._AC_UL320_.jpg"
          />
          <Product
          id="128562123"
          title="The Bestseller Code: Anatomy of the Blockbuster Novel."
          price={11.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/51WmZ6UZYdL.jpg"
          />
          </div>
          <div className='home__row'>
          <Product
          id="85221285"
          title="Carolina Herrera Good Girl for Women Eau de Parfum Spray, 5.1 Oz."
          price={148.92}
          rating={5}
          image="https://m.media-amazon.com/images/I/5164BjQdUdL._AC_UL320_.jpg"
          />
          <Product
          id="85279285"
          title="Apple Watch Series 7 GPS + Cellular, 41mm Silver Stainless Steel Case with Starlight Sport Band - Regular"
          price={679.00}
          rating={5}
          image="https://m.media-amazon.com/images/I/71-i7pbrhnL._AC_UY218_.jpg"
          />
          <Product
          id="254628752"
          title="Apple AirPods Pro."
          price={189.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71bhWgQK-cL._AC_UY218_.jpg"
          /> 
          <Product
          id="254697752"
          title="Humble Crew Supersized Wood Toy Storage Organizer, Extra Large, Grey/White."
          price={59.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81vZPv9sVTL._AC_UL320_.jpg"
          />
          </div>
          <div className='home__row'>
          <Product
          id="123234589"
          title="Apple iMac MK462LL/A 27-inch Desktop 5K Display 16GB Ram | 1TB Hard Drive (Renewed)"
          price={1099.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/61WAK+c16fL._AC_UY218_.jpg"
          />
          <Product
          id="123234681"
          title="HP P24v G4 24 Inch FHD IPS LED-Backlit LCD 2-Pack Monitor Bundle with HDMI, Blue Light Filter, Dual Monitor Stand, MK270 Wireless Keyboard and Mouse Combo, Gel Pad."
          price={499.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/71mOdhFJRZL._AC_UL320_.jpg"
          />
          
          </div>
         </div> 
        </div>
    
  );
}

export default Home;
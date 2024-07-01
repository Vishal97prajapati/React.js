import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Globe } from 'lucide-react';
import language from './data/language.json';
import country from './data/country.json';

function Footer({ item }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  console.log(language);
  return (
    <div className="flex flex-col bg-gray-50  p-20 gap-10">
      {/* /Zomato header */}
      <div className="flex flex-row gap-5 ">
        <h1 className="text-4xl font-extrabold">Zomato</h1>
        <div className="mx-auto"></div>
        <div className="relative">
          <button
            className=" flex flex-row justify-between p-2 border border-gray-600 rounded-md w-36"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <img
              className="h-5  w-5"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png"
              alt=""
            />
            Country
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </button>
          {isOpen && (
            <div className="bg-gray-300 w-56 absolute bottom-10 flex  flex-row  rounded-md border border-gray-100 p-2">
              {country.map((item, index) => {
               
                return(   <div className='  '>
                  <div className=' flex flex-row justify-end bg-red-500 w-28'>
                      <img className='h-4 w-5  ' src={item.image} alt="" />
                      </div>
                  <span key={index}>{item.name}</span>
              
                </div>);
             
              })}
            </div>
          )}
        </div>
        <button
          className="flex flex-row justify-between p-2 border border-gray-600 rounded-md w-36"
          onClick={() => setIsClicked((prev) => !prev)}
        >
          <Globe />
          Language
          {isClicked ? <ChevronUp /> : <ChevronDown />}
        </button>
        <div className="relative">
          {isClicked && (
            <div className="bg-gray-300 text-red-600 absolute bottom-10 flex  flex-col items-center rounded-md border border-gray-100 p-3">
              {language.map((item ,index) => {
              
              return <span key={index}>{item.lang}</span>

              }
               
              )}
            </div>
          )}
        </div>
      </div>

      {/* grid links */}
      <div className="flex flow-row justify-between  ">
        <div className="flex flex-col">
          <span className="font-semibold font-sans"> ABOUT ZOMATO</span>
          <span>Who we are</span>
          <span>Blog</span>
          <span>Work with us</span>
          <span>Investor Realations</span>
          <span>Report fraud</span>
          <span>Press kit</span>
          <span>Contact us</span>
        </div>

        <div className="flex flex-col">
          <span className="font-semibold font-sans"> ZOMAVERSE</span>
          <span>Zomato</span>
          <span>Blinkit</span>
          <span>Feeding India</span>
          <span>Hyperpure</span>
          <span>Zomaland</span>
          <span>Weather Union</span>
        </div>

        <div className="flex flex-col">
          <span>FOR RESTAURANT</span>
          <span>Partner with us</span>
          <span>App for you</span>
        </div>
        <div className="flex flex-col">
          <span>FOR RESTAURANT</span>
          <span>Privecy</span>
          <span>Security</span>
          <span>Terms</span>
          <span>Partner with us</span>
          <span>Sitemap</span>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row justify-between gap-2">
            <img
              className="h-5 w-5"
              src="https://static.vecteezy.com/system/resources/previews/018/910/715/non_2x/linkedin-logo-linkedin-symbol-linkedin-icon-free-free-vector.jpg"
              alt=""
            />
            <img
              className="h-5 w-5"
              src="https://img.freepik.com/free-vector/instagram-icon_1057-2227.jpg?size=626&ext=jpg&ga=GA1.1.2025358812.1719552836&semt=ais_user"
              alt=""
            />
            <img
              className="h-5 w-5"
              src="https://wp.inews.co.uk/wp-content/uploads/2023/07/SEI_165641405.jpg?w=2048"
              alt=""
            />
            <img
              className="h-5 w-5"
              src="https://t3.ftcdn.net/jpg/04/74/05/94/360_F_474059464_qldYuzxaUWEwNTtYBJ44VN89ARuFktHW.jpg"
              alt=""
            />
            <img
              className=" h-5 w-5"
              src="https://static.vecteezy.com/system/resources/previews/018/930/698/original/facebook-logo-facebook-icon-transparent-free-png.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="h-15 w-36"
              src="https://w7.pngwing.com/pngs/314/368/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="h-15 w-36"
              src="https://w7.pngwing.com/pngs/314/368/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* footer disclaimer */}
      <div className="flex flex-col gap-4">
        <hr />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
          debitis a, voluptatem exercitationem itaque molestiae nulla iusto
          reprehenderit numquam. Cum modi iusto corporis excepturi.
        </p>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import Slider from './Slider';

function Product() {
  return (
    <>
      {/* item product */}
      <div className="flex flex-row justify-between  h-52 w-full bg-slate-50 p-5">
        <div className="flex flex-col h-30 items-center p-3">
          <img
            src="https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100"
            alt=""
          />
          <h1>Grocery</h1>
        </div>
        <div className="flex flex-col h-26 items-center  p-3">
          <img
            src="https://rukminim1.flixcart.com/flap/96/96/image/22fddf3c7da4c4f4.png?q=100"
            alt=""
          />
          <h1>Mobile</h1>
        </div>
        <div className="flex flex-col h-30 items-center p-3">
          <img
            className='h-24 w-24' src="https://www.shutterstock.com/image-photo/surprised-modern-man-posing-his-260nw-1028171302.jpg"
            alt=""
          />
          <h1>Fashion</h1>
        </div>
        <div className="flex flex-col h-30 items-center p-3">
          <img
            className='h-24 w-24'  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiE5V9Vc0_sB7Nq-HQ0RgaHb4a56kDUS5L_g&s"
            alt=""
          />
          <h1>Electronics</h1>
        </div>
        <div className="flex flex-col h-30 items-center p-3">
          <img
            className='h-24 w-24'  src="https://img.freepik.com/free-psd/armchair-pillow_176382-863.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user"
            alt=""
          />
          <h1>Home & <br /> furniture</h1>
        </div>
        <div className="flex flex-col h-30 items-center p-3">
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/96/96/image/0139228b2f7eb413.jpg?q=100"
            alt=""
          />
          <h1>Appliances</h1>
        </div>
        <div className="flex flex-col h-30 items-center p-3">
          <img
            src="https://rukminim1.flixcart.com/flap/96/96/image/71050627a56b4693.png?q=100"
            alt=""
          />
          <h1>Travel</h1>
        </div>
         <div className='flex flex-col h-30 items-center p-3'>
            <img src="https://rukminim1.flixcart.com/flap/96/96/image/29327f40e9c4d26b.png?q=100" alt="" />
            <h1>Grocery</h1>
        </div>
      </div>
      <Slider/>
    </>
  );
}

export default Product;

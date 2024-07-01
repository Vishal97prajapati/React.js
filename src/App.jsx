import { useState } from 'react';
import Card from './CardComponet/Card';
import Counter from './UseState/Counter';
import Zomato from './Zomato/Zomato';
import GrideComponent from './Zomato/GrideComponent';
import Collection from './Zomato/Collection';
import PopularLocation from './Zomato/PopularLocation';
import Location from './Zomato/Location';
import Apps from './Zomato/Apps';
import ExploreGrid from './Zomato/ExploreGrid';
import Footer from './Zomato/Footer';
import Zerodha from './zerodha/Zerodha';
import FlipNavbar from './Flipkart/FlipNavbar';
import Navbar from './practics/Navbar';
import Protfolio from './Protfolio/Protfolio';
import Connector from './Connector';

// import Navbar from './Router/Navbar';
// import Home from './Router/Home';
// import Login from './Router/Login';
// import About from './Router/About'
// import{createBrowserRouter , RouterProvider} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  // const router =createBrowserRouter ([
  //   {
  //     path: "/home",
  //     element :<><Navbar/><Home/></>
  //   },
  //   {
  //   path: "/login",
  //   element: <><Navbar/><Login/></>
  //   },
  //   {
  //     path : "/about",
  //     element: <><Navbar/><About/></>
  //   },
  // ])

  return (
    <>
      {/* <h1 className="">Hello Props </h1>
      {/* <div className="flex gap-8 py-7 ">
        <Card
          title={'Nitesh'}
          image={
            'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg'
          }
          desc={'super dev '}
          Profile={'click me '}
        />
        <Card
          title={'Nitesh'}
          image={
            'https://www.cyberark.com/wp-content/uploads/2019/11/Developer.jpg'
          }
          desc={'super dev '}
          Profile={'click  me'}
        />
      </div>
      <Counter /> */}

      {/* <Zomato />
      <GrideComponent/>
      <Collection/>
      <PopularLocation/>
      <Location/>
      <Apps/>
      <ExploreGrid/>
      <Footer/> */}
{/* 
      <Zerodha/> */}
{/* 
      <FlipNavbar/> */}
   
      
      {/* <RouterProvider router={router}/> */}
      {/* <Navbar/> */}
      {/* <Protfolio/> */}
      <Connector/>
    </>
  );
}

export default App;

import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Card from './CardComponet/Card';
import Counter from './UseState/Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="">Hello Props </h1>
      <div className="flex gap-8 py-7 ">
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
      <Counter/>
    </>
  );
}

export default App;

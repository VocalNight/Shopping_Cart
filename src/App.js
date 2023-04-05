import { useState } from 'react';
import Router from './components/RouteSwitch'

function App() {

  const [cartItems, setCartItems] = useState([]);

  return (
  <div>
    <div>
      <Router cartItems={cartItems} updateCart={setCartItems}></Router>
    </div>
  </div>
  );
}

export default App;

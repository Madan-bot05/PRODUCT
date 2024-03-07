import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/Navigation/Navigation';
import MainCarosel from './customer/components/HomeCarosel/MainCarosel';
import HomePage from './customer/Pages/HomePage/HomePage';
import Product from './customer/components/Product/Product';
import Footer from './customer/components/footer/Footer';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Checkout from './customer/components/Checkout/Checkout';
import {
  Routes,
  useLocation,
  Route 
} from 'react-router-dom';
import Order from './customer/components/Order/Order';
import OrderDetails from './customer/components/Order/OrderDetails';
import CustomerRouters from './Routers/CustomerRouters';

function App() {
  return (
    <div className="">
      {/* <Routes>
        <Route path='/*' element={<CustomerRouters/>}></Route>
        
      </Routes> */}

    <Navigation/>
    {/* <Product/> */}
    <HomePage/>
    {/* <ProductDetails/> */}
    {/* <Cart/> */}
    {/* <Checkout/> */}
    {/* <Order/> */}
    {/* <OrderDetails/> */}
    <Footer/>
    </div>

   
  );
}

export default App;

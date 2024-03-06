import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import HomePage from '../customer/Pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import { Navigation } from '@mui/icons-material'
import Footer from '../customer/components/footer/Footer'
import Product from '../customer/components/Product/Product'

function CustomerRouters() {
  return (
    <div>
      {/* <Navigation/> */}
        {/* <Routes> 
            <Route path="/" element={<HomePage/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>}></Route> */}
                {/* <Product/> */}
    {/* <ProductDetails/> */}
    {/* <Cart/> */}
    {/* <Checkout/> */}
    {/* <Order/> */}
    {/* <OrderDetails/> */}
        {/* </Routes> */}
        <div><Footer/></div>
    </div>
  )
}

export default CustomerRouters
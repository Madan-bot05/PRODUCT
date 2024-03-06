import React from "react";
import CartItem from "./CartItem";
import { Button } from "@mui/material";
import './button.css';

function Cart() {
  return (
    <div className="mt-40">
      <div className="lg:grid grid-cols-3 lg:px-10 relative mt-5">
        <div className="col-span-2">
          {[1,1,1,1].map((item)=><CartItem/>)}
        </div>

        <div className="px-2 sticky top-0 h-[50vh] mt-5 lg-mt-0   border rounded-md  ">
          <div className="border">
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <hr />
            <div className="space-y-3 font-semibold">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>$54856</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">-$54856</span>
              </div>
              <div className="flex justify-between pt-3">
                <span>Delivery charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3  font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">$5454856</span>
              </div>
            </div>
            <button className="custom-button w-full mt-5"> Check Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import './button.css';

function CartItem() {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top mb-"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-1AaOWTrWE2wlHLpgV3Mqee7pGZQ6PX7SHw&usqp=CAU"
            alt=""
          />
        </div>
        <div>
          <h2 className="font-semibold ml-5">Mens White Shiert with collar</h2>
          <p className="opacity-70">Size: L, White</p>
          <p className="opacity-70 mt-2">Seller : Wyane Enterprises</p>
          <div className="ml-5 space-y-1">
            <div className="flex space-x-5 items-center text-gray-900 mt-6">
              <p className="font-semibold"> 133</p>
              <p className="opacity-50 line-through"> $133</p>
              <p className="text-green-600"> 55% off</p>
            </div>
          </div>
          <div className="lg:flex items-center lg:space-x-10 py-10">
            <div className="flex items-center space-x-2">
              <IconButton sx={{ color: "rgb(63,57,232)" }}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span className="py-1 px-7 border rounded-sm">9</span>
              <IconButton sx={{ color: "rgb(202,91,91)" }}>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
            <div>
              {/* <Button sx={{color:"rgb(202,91,91)"}} >Remove</Button> */}
              <button className="button">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 69 14"
                  class="svgIcon bin-top"
                >
                  <g clip-path="url(#clip0_35_24)">
                    <path
                      fill="black"
                      d="M20.8232 2.62734L19.9948 4.21304C19.8224 4.54309 19.4808 4.75 19.1085 4.75H4.92857C2.20246 4.75 0 6.87266 0 9.5C0 12.1273 2.20246 14.25 4.92857 14.25H64.0714C66.7975 14.25 69 12.1273 69 9.5C69 6.87266 66.7975 4.75 64.0714 4.75H49.8915C49.5192 4.75 49.1776 4.54309 49.0052 4.21305L48.1768 2.62734C47.3451 1.00938 45.6355 0 43.7719 0H25.2281C23.3645 0 21.6549 1.00938 20.8232 2.62734ZM64.0023 20.0648C64.0397 19.4882 63.5822 19 63.0044 19H5.99556C5.4178 19 4.96025 19.4882 4.99766 20.0648L8.19375 69.3203C8.44018 73.0758 11.6746 76 15.5712 76H53.4288C57.3254 76 60.5598 73.0758 60.8062 69.3203L64.0023 20.0648Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_35_24">
                      <rect fill="white" height="14" width="69"></rect>
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 69 57"
                  class="svgIcon bin-bottom"
                >
                  <g clip-path="url(#clip0_35_22)">
                    <path
                      fill="black"
                      d="M20.8232 -16.3727L19.9948 -14.787C19.8224 -14.4569 19.4808 -14.25 19.1085 -14.25H4.92857C2.20246 -14.25 0 -12.1273 0 -9.5C0 -6.8727 2.20246 -4.75 4.92857 -4.75H64.0714C66.7975 -4.75 69 -6.8727 69 -9.5C69 -12.1273 66.7975 -14.25 64.0714 -14.25H49.8915C49.5192 -14.25 49.1776 -14.4569 49.0052 -14.787L48.1768 -16.3727C47.3451 -17.9906 45.6355 -19 43.7719 -19H25.2281C23.3645 -19 21.6549 -17.9906 20.8232 -16.3727ZM64.0023 1.0648C64.0397 0.4882 63.5822 0 63.0044 0H5.99556C5.4178 0 4.96025 0.4882 4.99766 1.0648L8.19375 50.3203C8.44018 54.0758 11.6746 57 15.5712 57H53.4288C57.3254 57 60.5598 54.0758 60.8062 50.3203L64.0023 1.0648Z"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_35_22">
                      <rect fill="white" height="57" width="69"></rect>
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

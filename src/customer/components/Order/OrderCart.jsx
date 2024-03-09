import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

export const OrderCart = () => {
  const navigate=useNavigate();

  return (
    <div onClick={()=>navigate(`/account/order/${5}`)} className="mt-10 p-5 shadow-md shadow-black hover:shadow-2xl border">
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
            <img
              className="w-[5rem] h-[5rem] object-cover object-top"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq2cnoEuEbBH4QBXCD_qA2ui3rKL394ApfDw&usqp=CAU"
              alt=""
            />
            <div className="ml-2 space-y-2">
              <p className="mb-2">7dyqh8budf</p>
              <p className="opacity-50 text-xs font-semibold">uy8gd8ugd7w</p>
              <p className="opacity-50 text-xs font-semibold">bibiufbiuhfiug</p>
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
          <p>$7623578</p>
        </Grid>
        <Grid item xs={4}>
          {true && <div> 
            <p>
                <AdjustIcon xs={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm"/>
              <span>Delivered in march 06</span>
            </p>
            <p className="text-xs"> Your Item has been Delivered</p>
          </div>}
          {false && 
            <p>
              <span>Expected Deilvery</span>
            </p>
          }
        </Grid>
      </Grid>
    </div>
  );
};

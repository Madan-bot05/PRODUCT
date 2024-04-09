import { colors } from "@mui/material"
import { FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS } from "./ActionType";
import { api } from "../../config/apiConfig";


export const findProducts=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCTS_REQUEST})
    const {colors,sizes,minPrice,maxPrice,minDiscount,category,stock,sort,pageNumber,pageSize}=reqData;
    try {
        const {data}= await api.get(`/api/admin/products/all`)
        console.log("product data ",data);
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
};


export const findProductsById=(reqData)=>async(dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const {productId}=reqData;
    console.log("Product Id",productId)
    try {
        const data=await api.get(`/api/products/id/${productId}`)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
        console.log("data",data)
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}
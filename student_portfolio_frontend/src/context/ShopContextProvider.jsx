
import { products } from "../assets/assets";
import {ShopContext, currency, } from "./ShopContext" ;

export const ShopContextProvider = (props) =>{
    


    const value ={
        products,
    } ;

    return (
        <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
    ) ;
} ;

export default ShopContextProvider ;











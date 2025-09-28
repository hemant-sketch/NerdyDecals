'use client';

import {useState, useContext, createContext} from 'react';

const ProductContext = createContext();

export default function ProductProvider(props) {
    const {children} = props;

    const [cart, setCart] = useState({});

    function handleIncrementProduct(price_id, num, data, noIncrement=false) {
        const newCart = {
            ...cart,
        }
        if(price_id in cart) {
            //product alredy in cart
            // newCart[price_id] = newCart[price_id] + num;
            newCart[price_id] = {
                ...data,
                quantity: noIncrement ? num : newCart[price_id]?.quantity + num
            }
        }else{
            newCart[price_id] = {
                ...data,
                quantity: num
            }
        }
        // if newCart[price_id] = 0 in which case we delete it
        if(parseInt(newCart[price_id].quantity) <= 0) {
            delete newCart[price_id]
        }
        
        setCart(newCart);
    }

    const value = {
        cart,
        handleIncrementProduct,
    }


    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProducts = () => useContext(ProductContext)
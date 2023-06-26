import { createContext, useState } from "react";

const OrderContext = createContext();

export const OrderProvider = ({children}) => {

    const [orderMovies, setOrderMovies] = useState("");

    const alterOrder = (info) => {
        setOrderMovies(info);
    }

    return (
        <OrderContext.Provider value={{orderMovies, alterOrder}}>
            {children}
        </OrderContext.Provider>
    )
}

 export default OrderContext;
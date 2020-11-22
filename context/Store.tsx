import { stat } from 'fs';
import React, { createContext, Dispatch, useReducer } from 'react';
import { ProductActions, productReducer, ShoppingCartActions, shoppingCartReducer } from './Reducer';

type ProductType = {
    id: number,
    name: string,
    price: number,
}

type InitialStateType = {
    products: ProductType[],
    shopingCart: number,
}

const initialState = {
    products: [],
    shopingCart: 0
}


const AppContenxt = createContext<{
    state: InitialStateType,
    dispatch: Dispatch<ProductActions | ShoppingCartActions>
}>
    ({
        state: initialState,
        dispatch: () => null
    })


const mainReducer = ({ products, shopingCart }: InitialStateType, action: ProductActions | ShoppingCartActions) => ({
    products: productReducer(products, action),
    shopingCart: shoppingCartReducer(shopingCart, action)
})

const AppProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <AppContenxt.Provider value={{ state, dispatch }}>
            {children}
        </AppContenxt.Provider>
    )
}

export { AppProvider, AppContenxt }
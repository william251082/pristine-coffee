import {CoffeeStore} from "@data/coffeeStores";
import {createContext, useReducer} from "react";

export interface State {
    latLong: string
    coffeeStores: CoffeeStore[]
}

const initialState: State = {
    latLong: '',
    coffeeStores: []
}

export enum CoffeeActionType {
    SET_LAT_LONG = 'SET_LAT_LONG',
    SET_COFFEE_STORES = 'SET_COFFEE_STORES'
}

export type CoffeeStoreAction =
    | SetLatLongAction
    | SetCoffeeStoresAction

export interface SetLatLongAction {
    type: CoffeeActionType.SET_LAT_LONG
    payload: { latLong: string }
}

export interface SetCoffeeStoresAction {
    type: CoffeeActionType.SET_COFFEE_STORES
    payload: { coffeeStores: CoffeeStore[] }
}

export const coffeeStoreReducer = (state: State, action: CoffeeStoreAction) => {
    switch (action.type) {
        case CoffeeActionType.SET_LAT_LONG: {
            return {
                ...state,
                latLong: action.payload.latLong
            }
        }
        case CoffeeActionType.SET_COFFEE_STORES: {
            return {
                ...state,
                coffeeStores: action.payload.coffeeStores
            }
        }
        default:
            throw new Error(`Unhandled action type: ${action}`)
    }
}
export const CoffeeStoreContext = createContext<State | any>(initialState)
export const CoffeeStoreProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(coffeeStoreReducer, initialState)
    return (
        <CoffeeStoreContext.Provider value={{state, dispatch}}>
            {children}
        </CoffeeStoreContext.Provider>
    )
}

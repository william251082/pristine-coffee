import {string} from "prop-types";

export interface CoffeeStoresByLocationResponse {
    [k: string]: any
    error?: ResponseError
    message: string
    err: unknown
}
export interface CreateCoffeeStoreResponse {
    [k: string]: any
}
export interface CoffeeStoreResponse {
    [k: string]: any
}
export interface FavouriteCoffeeStoreResponse {
    [k: string]: any
    message: string
}
export interface ResponseError {
    message: string
}

export interface AirTableRecordFields {
    imgUrl: string
    voting: number
    id: string
    name: string
    address: string
    neighbourhood: string
    recordId: string
}

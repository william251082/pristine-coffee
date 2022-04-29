export interface CoffeeStoresByLocationResponse {
    [k: string]: any
    error?: ResponseError
    message: string
    err: unknown
}
export interface CreateCoffeeStoreResponse {
    [k: string]: any
}
export interface ResponseError {
    message: string
}

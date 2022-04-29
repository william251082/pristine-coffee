export interface CoffeeStoresByLocationResponse {
    [k: string]: any
    error?: ResponseError
    message: string
    err: unknown
}
export interface ResponseError {
    message: string
}

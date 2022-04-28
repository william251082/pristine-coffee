import '@styles/globals.css'
import {AppProps} from "next/app"
import {CoffeeStoreProvider} from "@context/coffeeStoreContext";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <CoffeeStoreProvider>
            <Component {...pageProps} />
        </CoffeeStoreProvider>
    )
}

export default MyApp

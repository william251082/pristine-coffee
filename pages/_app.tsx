import '../styles/globals.css'
import {AppProps} from "next/app"
import Footer from "@components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <div>
            <Component {...pageProps} />
            <Footer />
        </div>
    )
}

export default MyApp

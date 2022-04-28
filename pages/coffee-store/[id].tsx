import {useRouter} from "next/router"
import styles from "@styles/CoffeeStore.module.css"
import Link from "next/link";
import {CoffeeStore, coffeeStores} from "@data/coffeeStores";
import {GetStaticPropsContext} from "next";
import Head from "next/head";

interface CoffeeStoreProps {
    coffeeStore: CoffeeStore
}

export async function getStaticProps({params}: GetStaticPropsContext) {
    return {
        props: {
            coffeeStore: coffeeStores.find((coffeeStore: CoffeeStore) => {
                return coffeeStore.id.toString() === params?.id
            })
        }
    }
}

export async function getStaticPaths() {
    const paths = coffeeStores.map((coffeeStore: CoffeeStore) => {
        return {params: {id: coffeeStore.id.toString()}}
    })
    return {paths, fallback: true}
}

const CoffeeStore = ({coffeeStore}: CoffeeStoreProps) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const {address, name, neighbourhood} = coffeeStore
    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
                <meta name="description" content={`${name} coffee store`} />
            </Head>
            Coffee Store Page {router.query.id}
            <Link href="/"><a>Back to home</a></Link>
            <Link href="/coffee-store/dynamic"><a>Go to Page</a></Link>
            <p>{address}</p>
            <p>{name}</p>
            <p>{neighbourhood}</p>
        </div>
    );
};

export default CoffeeStore;

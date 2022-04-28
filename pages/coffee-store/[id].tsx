import {useRouter} from "next/router"
import styles from "@styles/CoffeeStore.module.css"
import Link from "next/link";
import {CoffeeStore, coffeeStores} from "@data/coffeeStores";
import {GetStaticPropsContext} from "next";

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
    return {
        paths: [
            {params: {id: '0'}},
            {params: {id: '1'}}
        ],
        fallback: true
    }
}

const CoffeeStore = (props: {coffeeStore: CoffeeStore}) => {
    const router = useRouter()
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.layout}>
            Coffee Store Page {router.query.id}
            <Link href="/"><a>Back to home</a></Link>
            <Link href="/coffee-store/dynamic"><a>Go to Page</a></Link>
            <p>{props.coffeeStore.address}</p>
            <p>{props.coffeeStore.name}</p>
        </div>
    );
};

export default CoffeeStore;

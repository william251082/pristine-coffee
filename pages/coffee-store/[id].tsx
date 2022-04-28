import {useRouter} from "next/router"
import styles from "@styles/CoffeeStore.module.css"
import Link from "next/link";
import {CoffeeStore} from "@data/coffeeStores";
import {GetStaticPropsContext} from "next";
import Head from "next/head";
import Image from "next/image"
import cn from "classnames";
import {defaultLatLong, getCoffeeStores} from "@lib/coffeeStores";

interface CoffeeStoreProps {
    coffeeStore: CoffeeStore
}

export async function getStaticProps(staticProps: GetStaticPropsContext) {
    const params = staticProps.params;
    const coffeeStores = await getCoffeeStores(defaultLatLong);
    const findCoffeeStoreById = coffeeStores.find((coffeeStore: CoffeeStore) => {
        return coffeeStore.id === params?.id
    });
    return {
        props: {
            coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {}
        }
    }
}

export async function getStaticPaths() {
    const coffeeStores = await getCoffeeStores(defaultLatLong)
    const paths = coffeeStores.map((coffeeStore: CoffeeStore) => {
        return {params: {id: coffeeStore.id}}
    })
    return {paths, fallback: true}
}

const CoffeeStore = ({coffeeStore}: CoffeeStoreProps) => {
    const router = useRouter()
    const handleUpvoteButton = () => {

    }
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    const {address, name, neighbourhood, imgUrl} = coffeeStore
    return (
        <div className={styles.layout}>
            <Head>
                <title>{name}</title>
                <meta name="description" content={`${name} coffee store`} />
            </Head>
            <div className={styles.container}>
                <div className={styles.col1}>
                    <div className={styles.backToHomeLink}>
                        <Link href="/"><a>← Back to home</a></Link>
                    </div>
                    <div className={styles.nameWrapper}>
                        <h1 className={styles.name}>{name}</h1>
                    </div>
                    <Image
                        src={
                            imgUrl ||
                            "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
                        }
                        width={600}
                        height={360}
                        className={styles.storeImg}
                        alt={name}
                    />
                </div>
                <div className={cn("glass", styles.col2)}>
                    <div className={styles.iconWrapper}>
                        <Image
                            src="/static/icons/places.svg"
                            width="24"
                            height="24"
                            alt="places icon"
                        />
                        <p className={styles.text}>{address}</p>
                    </div>
                    {neighbourhood && (
                        <div className={styles.iconWrapper}>
                            <Image
                                src="/static/icons/nearMe.svg"
                                width="24"
                                height="24"
                                alt="near me icon"
                            />
                            <p className={styles.text}>{neighbourhood}</p>
                        </div>
                    )}
                    <div className={styles.iconWrapper}>
                        <Image
                            src="/static/icons/star.svg"
                            width="24"
                            height="24"
                            alt="star icon"
                        />
                        <p className={styles.text}>votingCount</p>
                    </div>
                    <button className={styles.upvoteButton} onClick={handleUpvoteButton}>
                        Up vote!
                    </button>
                </div>
            </div>

        </div>
    );
};

export default CoffeeStore;

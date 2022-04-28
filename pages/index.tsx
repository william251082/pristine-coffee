import Head from 'next/head';
import {Banner} from "@components/core";
import {bannerData} from "@data/index";
import styles from "@styles/Home.module.css";
import Image from "next/image"
import {Card} from "../components/core";
import {CoffeeStore} from "@data/coffeeStores";
import {InferGetStaticPropsType} from "next";
import {getCoffeeStores} from "@lib/coffeeStores";
import useTrackLocation from "@hooks/useTrackLocation";
import {useEffect} from "react";

export async function getStaticProps() {
    const coffeeStores = await getCoffeeStores('52.3676,4.9041')
    return {props: {coffeeStores}}
}

export default function Home({coffeeStores}: InferGetStaticPropsType<typeof getStaticProps>) {
    const {handleTrackLocation, locationErrorMsg, latLong, isFindingLocation} = useTrackLocation()
    const handleOnBannerBtnClick = () => {
        handleTrackLocation()
    }
    useEffect(() => {
        const handleCoffeeStores = async () => {
            if (latLong) {
                try {
                    const coffeeStores = await getCoffeeStores(latLong)
                } catch (err) {
                    console.error('Error retrieving coffee stores.', err)
                }
            }
        }
        handleCoffeeStores().catch(console.error)
    }, [latLong])

    return (
        <div>
            <Head>
                <title>Pristine Coffee Shops</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="allows you to discover coffee stores"/>
            </Head>
            <main className={styles.main}>
                <Banner
                    handleOnCLick={handleOnBannerBtnClick}
                    buttonText={isFindingLocation ? "Locating..." : bannerData.buttonText}
                />
                {locationErrorMsg && <p>Something went wrong: {locationErrorMsg}</p>}
                <div className={styles.heroImage}>
                    <Image
                        src="/static/hero-image.webp"
                        width={700}
                        height={400}
                        alt="hero image"
                    />
                </div>
                {coffeeStores.length > 0 && (
                    <div className={styles.sectionWrapper}>
                        <h2 className={styles.heading2}>Stores near me</h2>
                        <div className={styles.cardLayout}>
                            {coffeeStores.map((coffeeStore: CoffeeStore) => {
                                return (
                                    <Card
                                        key={coffeeStore.id}
                                        name={coffeeStore.name}
                                        imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                                        href={`/coffee-store/${coffeeStore.id}`}
                                    />
                                )
                            })}
                        </div>
                    </div>
                )}
            </main>
        </div>
    )
}

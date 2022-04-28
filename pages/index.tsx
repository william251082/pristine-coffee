import Head from 'next/head';
import {Banner} from "@components/core";
import {bannerData} from "@data/index";
import styles from "@styles/Home.module.css";
import Image from "next/image"
import {Card} from "../components/core";
import {CoffeeStore} from "@data/coffeeStores";
import {InferGetStaticPropsType} from "next";
import {getCoffeeStores} from "@lib/coffeeStores";

export async function getStaticProps() {
    const data = await getCoffeeStores()
    const coffeeStores = data.results

    return {props: {coffeeStores}}
}

export default function Home({coffeeStores}: InferGetStaticPropsType<typeof getStaticProps>) {
    const handleOnBannerBtnClick = () => {
    };
    return (
        <div>
            <Head>
                <title>Pristine Coffee Shops</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="allows you to discover coffee stores"/>
            </Head>
            <main className={styles.main}>
                <Banner buttonText={bannerData.buttonText} handleOnCLick={handleOnBannerBtnClick} />
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
                                        key={coffeeStore.fsq_id}
                                        name={coffeeStore.name}
                                        imgUrl={coffeeStore.imgUrl || "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"}
                                        href={`/coffee-store/${coffeeStore.fsq_id}`}
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

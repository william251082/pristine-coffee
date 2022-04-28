import Head from 'next/head';
import {Banner} from "@components/core";
import {bannerData} from "@data/index";
import styles from "@styles/Home.module.css";
import Image from "next/image"
import {Card} from "../components/core";
import {CoffeeStore, coffeeStores} from "@data/coffeeStores";
import {InferGetStaticPropsType} from "next";

export async function getStaticProps() {
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
                <div className={styles.cardLayout}>
                    {coffeeStores.map((coffeeStore: CoffeeStore) => {
                        return (
                            <Card
                                key={coffeeStore.id}
                                name={coffeeStore.name}
                                imgUrl={coffeeStore.imgUrl}
                                href={`/coffee-store/${coffeeStore.id}`}
                            />
                        )
                    })}
                </div>
            </main>
        </div>
    )
}

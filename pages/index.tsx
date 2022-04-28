import Head from 'next/head';
import {Banner} from "@components/core";
import {bannerData, cardData} from "@data/index";
import styles from "@styles/Home.module.css";
import Image from "next/image"
import {Card} from "../components/core";

export default function Home() {
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
                <Card name={cardData.name} imgUrl={cardData.imgUrl} href={cardData.href} />
            </main>
        </div>
    )
}

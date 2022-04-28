import Head from 'next/head';
import {Banner} from "@components/core";
import {bannerData} from "@data/index";
import styles from "@styles/Home.module.css";

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
            </main>
        </div>
    )
}

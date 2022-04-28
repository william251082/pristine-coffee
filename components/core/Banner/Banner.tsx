import {FC} from "react";
import styles from "./Banner.module.css";
import {BannerProps} from "@components/core/Banner/BannerTypes";

const Banner: FC<BannerProps> = ({buttonText, handleOnCLick}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Pristine Coffee</span>
                <span className={styles.title2}>Shops</span>
            </h1>
            <p className={styles.subTitle}>Discover Coffee Shops</p>
            <div className={styles.buttonWrapper}>
                <button className={styles.button} onClick={handleOnCLick}>{buttonText}</button>
            </div>
        </div>
    )
}

export default Banner

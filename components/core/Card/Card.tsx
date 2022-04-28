import {FC} from "react";
import styles from "./Card.module.css";
import {CardProps} from "@components/core/Card/CardTypes";
import Image from "next/image";
import Link from "next/link";
import cn from "classnames";

const Card: FC<CardProps> = ({name, imgUrl, href}) => {
    return (
        <Link href={href}>
            <a className={styles.cardLink}>
                <div className={cn("glass", styles.container)}>
                    <div className={styles.cardHeaderWrapper}>
                        <h2 className={styles.cardHeader}>{name}</h2>
                    </div>
                    <div className={styles.cardImageWrapper}>
                        <Image
                            className={styles.cardImage}
                            src={imgUrl}
                            width={260}
                            height={160}
                            alt="card image"
                        />
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default Card

import {FC} from "react";
import styles from "./Card.module.css";
import {CardProps} from "@components/core/Card/CardTypes";
import Image from "next/image";
import Link from "next/link";

const Card: FC<CardProps> = ({name, imgUrl, href}) => {
    return (
        <Link href={href}>
            <a>
                <h2>{name}</h2>
                <Image
                    src={imgUrl}
                    width={260}
                    height={160}
                    alt="card image"
                />
            </a>
        </Link>
    )
}

export default Card

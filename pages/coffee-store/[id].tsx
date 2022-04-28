import {useRouter} from "next/router"
import styles from "@styles/CoffeeStore.module.css"
import Link from "next/link";

const CoffeeStore = () => {
    const router = useRouter()
    return (
        <div className={styles.layout}>
            Coffee Store Page {router.query.id}
            <Link href="/"><a>Back to home</a></Link>
            <Link href="/coffee-store/dynamic"><a>Go to Page</a></Link>
        </div>
    );
};

export default CoffeeStore;

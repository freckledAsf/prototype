import Link from 'next/link';
import styles from '@/styles/utils/button.module.css'

export default function Button({children, url, color, effect}) {
    return (
        <Link href={url} className={`${styles.button} ${styles["button_" + color]} ${styles["button_" + effect + "_" + color]}`}>
            {children}
        </Link>
    )
}
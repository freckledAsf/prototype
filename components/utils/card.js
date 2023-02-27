import Link from 'next/link';
import styles from '@/styles/utils/card.module.css'

export default function Card({url, title, text}) {
    return (
        <Link href={url} className={styles.card}>
            <h4>{title} &rarr;</h4>
            <p>{text}</p>
        </Link>
        
    )
}
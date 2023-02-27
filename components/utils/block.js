import styles from '@/styles/utils/block.module.css'

export default function Block({ children, type, limit}) {
    return (
        <div className={`${styles.default_container} ${styles[type + "_container"]} ${"limit" + limit}`}>
            {children}
        </div>
    )
}
import Button from '@/components/utils/button.js';
import styles from '@/styles/utils/searchbar.module.css'

export default function SearchBar(select) {
    return (
        <div className={styles.search_container}>
            <div className={styles.search_bar}>
                <div className={styles.input}>
                    <input placeholder="Search..." autocapitalize="none" autocorrect="off"
                        spellcheck="false" type="search" className={styles.input_bar} />
                    <span>
                        <svg fill="none" height="20"
                            shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="1.5" viewBox="0 0 24 24">
                            <path d="M11 17.25a6.25 6.25 0 110-12.5 6.25 6.25 0 010 12.5z"></path>
                            <path d="M16 16l4.5 4.5"></path>
                        </svg>
                    </span>
                </div>
            </div>
                <Button url="" color="primary" effect="outline">
                <span>Select...</span>
                <span>
                    <svg
                        data-testid="geist-icon" fill="none" height="20" shape-rendering="geometricPrecision" stroke="currentColor"
                        stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="20">
                        <path d="M6 9l6 6 6-6"></path>
                    </svg>
                </span>
            </Button>
        </div>
    )
}
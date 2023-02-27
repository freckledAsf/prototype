import Layout from '@/components/dashLayout.js';
import SearchBar from '@/components/utils/searchbar.js';
import Block from '@/components/utils/block.js';
import Image from 'next/image';
import styles from '@/styles/Overview.module.css'

export default function Overview() {
    return (
        <>
        <Layout title="Overview">
            <SearchBar/>
            <Block type="dashboard">
                <div className={styles.results}>
                    <div className={styles.profile}>
                        <div>
                            <Image height={100} width={100} src='/avatar.png' alt="lorem ipsum" className={styles.avatar} />
                            <div className={styles.profile_name}>
                                <h5>Username</h5>
                                <p>Identifier: <span id="identifier">4506907</span></p>
                            </div>
                        </div>
                        <div>
                            <p>Location: <span id="location">Office 2.4</span></p>
                            <p>Lorem: <span>Ipsum dolor</span></p>
                        </div>
                        <div>
                            <p>Email: <span id="email">worker1@gmail.com</span></p>
                            <p>Phone Number: <span id="pNumber">123456789</span></p>
                        </div>
                    </div>
                </div>
            </Block>
        </Layout>
        </>
    )
}
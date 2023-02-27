import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/utils/button.js';
import Script from 'next/script';
import styles from '@/styles/layout.module.css'

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className={styles.header}>
                <div className={styles.banner}>
                    <div className={`${styles.inner_banner} limit1024`}>
                        <p>
                            <Link href={'/index2'}>
                                <Image src='https://svgshare.com/i/5vv.svg' height={20} width={20} alt='Lorem ipsum' />
                            </Link>
                        </p>
                        <Link href={'/dashboard/overview'}>Deploy <b>Lorem</b> on blah &rarr;</Link>
                    </div>
                </div>
                <div className={styles.navbar}>
                    <nav className={`${styles.inner_navbar} limit1024`}>
                        <div className={styles.left}>
                            <p>
                                <Link href={'/index2'}>
                                    <Image src='https://svgshare.com/i/5vv.svg' height={20} width={20} alt='Lorem ipsum' />
                                </Link>
                            </p>
                            <p id="showcase">
                                <Link href={'/index2'}>Showcase</Link>
                            </p>
                            <p id="about">
                                <Link href={'/about'}>About</Link>
                            </p>
                        </div>
                        <div className={styles.right}>
                            <Button url={'/'} color="secondary" effect="outline">
                                Lorem
                            </Button>

                            <Button url={'/dashboard/overview'} color="primary" effect="outline">
                                Start
                            </Button>
                        </div>
                    </nav>
                </div>
            </header>
            <main className={styles.main}>
                <div className={styles.inner_main} role='main'>
                    {children}
                </div>
            </main>
            <footer className={styles.footer}>
                <div className={`${styles.footer_grid} limit1024`}>
                    <div>
                        <h4 className={styles.footer_title}>General resources</h4>
                        <p>
                            <Link href={'/index2'}>Showcase</Link>
                        </p>
                        <p>
                            <Link href={'/about'}>About</Link>
                        </p>
                    </div>
                    <div>
                        <h4 className={styles.footer_title}>Dashboard</h4>
                        <p>
                            <Link href={'/dashboard/overview'}>Overview</Link>
                        </p>
                    </div>
                    <div>
                        <h4 className={styles.footer_title}>About Geisoft</h4>
                        <p>
                            <Link href={'/'}>Github</Link>
                        </p>
                        <p>
                            <Link href={'/'}>Discord</Link>
                        </p>
                        <p>
                            <Link href={'/'}>Twitter</Link>
                        </p>
                    </div>
                    <div>
                        <h4 className={styles.footer_title}>Legal</h4>
                        <p>
                            <Link href={'/'}>Privacy Policy</Link>
                        </p>
                        <p>
                            <Link href={'/'}>Cookie Preferences</Link>
                        </p>
                    </div>
                </div>
                <div className={`${styles.footer_copyright} limit1024`}>
                    <Link href={'/index2'}>
                        <Image src='https://svgshare.com/i/5vv.svg' height={20} width={20} alt='Lorem ipsum' />
                    </Link>
                    <p>Copyright © 2023 Geisoft++, Inc. All rights reserved.</p>
                </div>
            </footer>
            <Script>
                url = document.URL.split('/')[3];
                if(url == "showcase") 
                    document.getElementById('showcase').className = 'active';
                else if (url == "about")
                    document.getElementById('about').className = 'active';
            </Script>
        </>
    )
}
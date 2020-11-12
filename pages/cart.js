import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

export default function Cart () {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cart page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>This is the cart page</h1>
            <Link href="/payment"><a>
                <h3>Place order &rarr;</h3>
            </a>
            </Link>
        </div>
    )
}
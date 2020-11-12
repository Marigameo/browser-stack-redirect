import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Payment () {
    return (
        <div className={styles.container}>
            <Head>
                <title>Payment page</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>This is the payment page</h1>
            <Link href="/orderStatus"><a>
                <h3>Pay Now &rarr;</h3>
            </a>
            </Link>
        </div>
    )
}
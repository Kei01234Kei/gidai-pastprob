import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { Text, Button, Spacer } from '@nextui-org/react'
import Header from '../components/header'
import Footer from '../components/footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>gidai-pastprob</title>
        <meta name="description" content="Developed by Keisuke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <Text h3>岐阜大学過去問サイトへようこそ</Text>
        <Spacer/>
        <Link href="/auth">
          <a>
            <Button color="gradient" auto ghost rounded>ログイン</Button>
          </a>
        </Link>
      </main>

      <Footer/>
    </div>
  )
}

export default Home

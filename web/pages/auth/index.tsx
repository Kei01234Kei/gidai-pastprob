import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Text, Button, Spacer, Link } from '@nextui-org/react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Auth = ({ user, signOut }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>gidai-pastprob</title>
        <meta name="description" content="Developed by Keisuke" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <Text h3>岐阜大学過去問サイトへようこそ</Text>
        <Text>ログインメールアドレス: {user.attributes.email}</Text>
        <Text>ユーザID: {user.username}</Text>
        {console.log(user)}
        <Spacer />
        <Link href={`/home?address=${user.attributes.email}`}>
          <a>
            <Button color="gradient" auto ghost rounded>ホーム</Button>
          </a>
        </Link>
        <Spacer />
        <Button onClick={signOut} color="gradient" auto ghost rounded>ログアウト</Button>
      </main>

      <Footer />
    </div>
  )
}

export default withAuthenticator(Auth)

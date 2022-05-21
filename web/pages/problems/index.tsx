import type { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Text, Button, Spacer, Image } from '@nextui-org/react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Problems = ({ user, signOut, problemData }: any) => {
  const router = useRouter()

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
        <Button onClick={signOut} color="gradient" auto ghost rounded>ログアウト</Button>
        <Spacer />
        <Text h2>{router.query.yearOfStudent}年{router.query.semester}</Text>
        <Text h2>{router.query.subjectName}（{router.query.teacher}）</Text>
        <Spacer />
        {
          problemData.map(
            (problem: any) => {
              return (
                <>
                  <Text h3>{problem.yearOfTest}年</Text>
                  <Spacer />
                  <Image src={problem.imageURL} alt="試験問題" autoResize width={1000} height={1000} />
                  <Spacer y={2} />
                </>
              )
            }
          )
        }
      </main>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { subjectName, yearOfStudent, semester, teacher } = ctx.query
  const res = await fetch(`https://liwk0erekc.execute-api.ap-northeast-1.amazonaws.com/prod/getproblemdata?subjectName=${subjectName}&yearOfStudent=${yearOfStudent}&semester=${semester}&teacher=${teacher}`)
  const problemData = await res.json()
  console.log(problemData)
  return { props: { problemData } }
}

export default withAuthenticator(Problems)

import type { GetServerSideProps } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Text, Button, Spacer, Card, Grid, Link, User } from '@nextui-org/react'
import { withAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

const Home = ({ user, signOut, facultyData }: any) => {
  const information = [
    {
      faculty: {
        japanese: {
          name: "工学部"
        },
        english: {
          name: "engineering"
        }
      },
      department: [
        {
          japanese: {
            name: "電気電子・情報工学科",
            course: ["情報コース", "電気電子コース", "応用物理コース"]
          },
          english: {
            name: "electronic_and_computer_engineering",
            course: ["information_course", "electrical_electronic_course", "applied_physics_course"]
          },
        },
        {
          japanese: {
            name: "機械工学科",
            course: ["機械コース", "知能機械コース"]
          },
          english: {
            name: "mechanical_engineering",
            course: ["mechanical_engineering_course", "intelligence_mechanical_engineering_course"]
          }
        },
        {
          japanese: {
            name: "化学・生命工学科",
            course: ["物質化学コース", "生命化学コース"]
          },
          english: {
            name: "chemistry_and_biomolecular_science",
            course: ["materials_chemistry_course", "biomolecular_science_course"]
          }
        }
      ],
    },
    {
      faculty: {
        japanese: {
          name: "応用生物科学部"
        },
        english: {
          name: "applied_biological_sciences"
        }
      },
      department: [
        {
          japanese: {
            name: "生産環境科学科",
            course: ["応用植物科学コース", "応用動物科学コース", "環境生態科学コース"]
          },
          english: {
            name: "agricultural_and_environmental_sciences",
            course: ["plant_production", "animal_science_and_environmental_science", "ecology"]
          }
        },
        {
          japanese: {
            name: "応用生命科学科",
            course: ["分子生命科学コース", "食品生命科学コース"]
          },
          english: {
            name: "food_and_life_sciences",
            course: ["molecular_life_science", "food_science"]
          },
        }
      ],
    },
    {
      faculty: {
        japanese: {
          name: "地域科学部"
        },
        english: {
          name: "regional_studies"
        },
      },
      department: [
        {
          japanese: {
            name: "地域政策学科",
            course: []
          },
          english: {
            name: "policy_studies",
            course: []
          }
        },
        {
          japanese: {
            name: "地域文化学科",
            course: []
          },
          english: {
            name: "cultural_studies",
            course: []
          }
        }
      ],
    }
  ]
  // const getFacultyData = async (user: any) => {
  //     const response = await axios.get('http://localhost:8080/home', {
  //         headers: {
  //             'Content-Type': 'application/x-www-form-urlencoded'
  //         },
  //         params: {address:"z3033012@edu.gifu-u.ac.jp"}
  //     });
  //     console.log(response)
  // }

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
      </main>

      <Grid.Container gap={2}>
        {information.map((information, key) => (
          <Grid xs={12} md={4} key={key}>
            <Card color="gradient">
              <Text h3 css={{ fontWeight: '$bold', color: '$white' }}>
                {information.faculty.japanese.name}
              </Text>
              {information.department.map((department, key) => (
                <Link href={`/list?faculty=${encodeURIComponent(information.faculty.english.name)}&department=${encodeURIComponent(department.english.name)}`} key={key} css={{ color: '$white' }} icon>
                  <a>
                    <Text css={{ fontWeight: '$bold', color: '$white' }} span>・{department.japanese.name}</Text>
                  </a>
                </Link>
              ))}
            </Card>
          </Grid>
        ))}
      </Grid.Container>

      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { address } = ctx.query
  const res = await fetch(`http://localhost:8080/home?address=${address}`)
  const facultyData = await res.json()
  console.log(facultyData)
  return { props: { facultyData } }
}

export default withAuthenticator(Home)

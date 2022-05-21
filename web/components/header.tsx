import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Link } from '@nextui-org/react'

const Header: NextPage = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue500 -20%, $pink500 50%'
          }}
          weight="bold"
        >
          gidai-pastprob.com
        </Text>
      </Link>
    </header>
  )
}

export default Header

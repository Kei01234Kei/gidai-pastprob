import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { Text, Link } from '@nextui-org/react'

const Footer: NextPage = () => {
  return (
    <footer className={styles.footer}>
      Developed by&nbsp;
      <Text b>Keisuke</Text>
    </footer>
  )
}

export default Footer

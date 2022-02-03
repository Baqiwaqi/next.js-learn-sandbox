import styles from '../../styles/Layout.module.css'
import Head from 'next/head'
import Meta from '../../components/Meta'

export default function About() {
  return (
    <div className={styles.container}>
      <Meta title='About' />
      <h1>About</h1>
    </div>)
}

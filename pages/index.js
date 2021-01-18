import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <p>
      <Link href="/1234/abc:123:xyz">Click here</Link> to start testing
    </p>
  )
}

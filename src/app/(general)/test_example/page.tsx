import Link from 'next/link'
import { ReactElement } from 'react'
 
export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </div>
  )
}
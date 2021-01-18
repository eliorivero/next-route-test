import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Test() {
  const router = useRouter()

  const handleClick = () => {
    router.push(
      {
        pathname: '/[id]/[anotherId]/encoded',
        query: { id: router.query.id, anotherId: router.query.anotherId }
      }
    )
  }

  return (
    <>
      <p>This page is ok and was reached using the Link component as shown below.</p>
      <p><pre>
        {
          `  <Link href="/1234/abc:123:xyz">Click here to start testing</Link>`
        }
      </pre></p>
      <p>The : in the URL in the address bar remain in their original <strong>unencoded</strong> form.</p>
      <p>Click <button type="button" onClick={handleClick}>Here</button> to navigate to the test page.</p>
    </>
  )
}
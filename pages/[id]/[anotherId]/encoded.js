export default function Encoded() {

  return (
    <>
      <p>This page is not ok and was reached using Router's <pre className="preinline">push()</pre> as shown below.</p>
      <p><pre>{`  router.push(
    {
      pathname: '/[id]/[anotherId]/encoded',
      query: { id: router.query.id, anotherId: router.query.anotherId }
    }
  )`
      }
      </pre></p>
      <p>The : in the URL in the address bar have been <strong>encoded</strong>.</p>
    </>
  )
}
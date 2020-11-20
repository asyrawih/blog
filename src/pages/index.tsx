import Head from 'next/head'
import Layout from '../layouts/Layout'
import Blogs from '../layouts/sections/blog'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Hanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Blogs />
      </Layout>
    </div>
  )
}

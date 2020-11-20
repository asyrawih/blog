import Head from 'next/head'
import React from 'react'
import Spacer from 'src/components/utils/Spacer'
import Layout from 'src/layouts/Layout'
import Blog from 'src/layouts/sections/blog'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Hanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Blog />
        <Spacer />
      </Layout>
    </div>
  )
}

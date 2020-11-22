import Head from 'next/head'
import React from 'react'
import { Container } from 'src/components/Container'
import Layout from 'src/layouts/Layout'

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Hanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Container>
          <h2 className="text-white">Home Pages</h2>
        </Container>
      </Layout>
    </div>
  )
}

import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import React, { Suspense } from 'react'
import Spacer from 'src/components/utils/Spacer'
import Layout from 'src/layouts/Layout'
import Blog from 'src/layouts/sections/blog'

const fetcher = url => fetch(url).then(r => r.json());

export default function Home({ posts }) {
  return (
    <div>
      <Head>
        <title>Dev Hanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Blog articles={posts.articles} status={posts.status} />
        <Spacer />
      </Layout>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await fetcher(process.env.BASE_URL + 'api/news');
  return {
    props: {
      posts
    }
  }
}
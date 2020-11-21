import { GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
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

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetcher("http://newsapi.org/v2/everything?q=gisel&from=2020-11-19&to=2020-11-19&sortBy=popularity&apiKey=" + process.env.API_KEY);
  return {
    props: {
      posts
    }
  }
}
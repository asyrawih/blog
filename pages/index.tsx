import Head from 'next/head'
import { Card, CardImage, Container, Tag, Tags } from '../components'
import Sidebar from '../components/Sidebar/Sidebar'
import Layout from '../layouts/Layout'
import LandingPages from '../layouts/sections/landingpage'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Hanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <LandingPages />
      </Layout>
    </div>
  )
}

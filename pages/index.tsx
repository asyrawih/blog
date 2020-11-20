import Head from 'next/head'
import { Card, CardImage, Container, Tag, Tags } from '../components'
import Sidebar from '../components/Sidebar/Sidebar'
import Layout from '../layouts/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dev Hanan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Sidebar brand={"Dev Hanan"}>
            <span>lorem</span>
            <span>lorem</span>
            <span>lorem</span>
        </Sidebar>
        <Container>
          <Card>
            <CardImage>
              <span>Card Images</span>
            </CardImage>
            <Tags>
              <Tag name="#mobile" />
              <Tag name="#web" />
              <Tag name="#angular" />
            </Tags>
            <h2 className="text-left text-2xl px-4">
              This Is News
            </h2>
            <p className="px-4 mb-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
              earum odio veniam molestias at ea voluptatum officia dolorem
              sed facilis cum maxime magni ad dolores obcaecati dolor enim. Ex, fugit?
            </p>
          </Card>
        </Container>
      </Layout>
    </div>
  )
}

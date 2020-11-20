import Head from 'next/head'
import React from 'react'
import Layout from 'src/layouts/Layout'

interface Props {

}

const About = (props: Props) => {
    return (
        <div>
            <Head>
                <title>Dev Hanan</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                
            </Layout>
        </div>
    )
}

export default About

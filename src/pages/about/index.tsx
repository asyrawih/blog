import Head from 'next/head'
import React from 'react'
import { Container } from 'src/components/Container'
import Layout from 'src/layouts/Layout'
import { Transition } from '@headlessui/react'
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
                <Container>
                    <Transition
                        show={true}
                        appear={true}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <h1 className="text-gray-300 text-4xl z-auto">Blog Page</h1>
                    </Transition>
                </Container>
            </Layout>
        </div>
    )
}

export default About

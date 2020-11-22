import Head from 'next/head'
import React, { Dispatch, useContext } from 'react'
import { Container } from 'src/components/Container'
import Layout from 'src/layouts/Layout'
import { Transition } from '@headlessui/react'
import { AppContenxt } from 'context/Store'
import { Types } from 'context/Reducer'

const About = () => {
    const { state, dispatch } = useContext(AppContenxt)

    const tambah = () => {
        return dispatch({
            type: Types.Create,
            payload: { id: 1, name: 'test', price: 100 }
        })
    }

    const hapus = () => {
        return dispatch({
            type: Types.Delete,
            payload: { id: 1 }
        })
    }

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
                        <h1 className="text-gray-300 text-4xl z-auto">About Page</h1>
                        <button name="cart" className="bg-gray-200 w-10 h-10" onClick={tambah}>Cart</button>
                        <button name="cart" className="bg-gray-200 w-12 h-10 mx-2" onClick={hapus}>Hapus</button>
                        <h2 className="text-white my-2" >{state.products.length}</h2>
                        <pre className="text-white">
                            {JSON.stringify(state.products, null, 2)}
                        </pre>
                    </Transition>
                </Container>
            </Layout>
        </div>
    )
}

export default About

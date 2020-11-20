import Head from 'next/head'
import React from 'react'
import Layout from 'src/layouts/Layout'

interface Props {

}

const Blogs = (props: Props) => {
	return (
		<div>
			<Head>
				<title>Dev Hanan</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<h1 className="text-gray-300">Learn Some Code </h1>
			</Layout>
		</div>
	)
}

export default Blogs

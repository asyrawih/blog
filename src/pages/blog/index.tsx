import Head from 'next/head'
import React from 'react'
import { Container } from 'src/components/Container'
import Layout from 'src/layouts/Layout'
import { Transition } from '@headlessui/react'
import Blog from 'src/layouts/sections/blog'
import Spacer from 'src/components/utils/Spacer'
import { GetStaticProps } from 'next'
interface Props {

}

const fetcher = url => fetch(url).then(r => r.json());

const Blogs = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Blogs</title>
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
	const posts = await fetcher("http://newsapi.org/v2/everything?q=anime&from=2020-11-19&to=2020-11-19&sortBy=popularity&apiKey=" + process.env.API_KEY);
	return {
		props: {
			posts
		},
		revalidate: 1,
	}
}

export default Blogs

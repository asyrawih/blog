import React from 'react'
import { Articels, Article, Source } from 'src/@types/Articel';
import { Tags, Tag } from 'src/components';
import { Card, CardImage, CardTitle, CardContent } from 'src/components/Card';
import { Container } from 'src/components/Container';

const Blog = ({ articles, status }: Articels) => {

	const Card: JSX.Element[] = [];

	articles.forEach((item, index) => {
		Card.push(<CardSection
			key={index}
			title={item.title}
			author={item.author}
			content={item.content}
			url={item.url}
			urlToImage={item.urlToImage}
			description={item.description}
			publishedAt={item.publishedAt}
		/>)
	});


	return (
		<div className="Blog">
			{Card}
		</div>
	)
}

export const CardSection = ({ title, author, content, url, urlToImage, description, publishedAt }: Article): JSX.Element => {
	return (
		<Container>
			<Card>
				<CardImage>
					<span>{title}</span>
				</CardImage>
				<Tags>
					<Tag name="#mobile" />
					<Tag name="#web" />
					<Tag name="#angular" />
				</Tags>
				<CardTitle title={title} />
				<CardContent content={content} publish={publishedAt} author={author} />
			</Card>
		</Container>
	)
}

export default Blog

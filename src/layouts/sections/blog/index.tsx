import React from 'react'
import { Articels } from 'src/@types/Articel';
import { Tags, Tag } from 'src/components';
import { Card, CardImage, CardTitle, CardContent } from 'src/components/Card';
import { Container } from 'src/components/Container';
const Blog = ({ articles }: Articels) => {

	const CardData: JSX.Element[] = [];

	articles.forEach((item, index) => {
		CardData.push(
			<Card key={index}>
				<CardImage>
					<div className="card-thumb max-w-full object-cover">
						<img className="h-auto" src={item.urlToImage} alt={item.url} height={960} width={540} />
					</div>
				</CardImage>
				<Tags>
					<Tag name="#mobile" />
					<Tag name="#web" />
					<Tag name="#angular" />
				</Tags>
				<CardTitle title={item.title} />
				<CardContent content={item.content} publish={item.publishedAt} author={item.author} />
			</Card>
		)
	});

	return (
		<Container>
			{ CardData}
		</Container>
	)
}

export default Blog

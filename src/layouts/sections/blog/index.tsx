import React from 'react'
import { Tags, Tag } from 'src/components';
import { Card, CardImage, CardTitle, CardContent } from 'src/components/Card';
import { Container } from 'src/components/Container';



interface Props {

}

const LandingPages = (props: Props) => {
	const card: JSX.Element[] = [];

	for (let i = 0; i < 4; i++) {
		card.push(<CardSection key={i} />)
	}

	return (
		<div className="landingpages">
			{card}
		</div>
	)
}

export const CardSection = (): JSX.Element => {

	const cardItem: JSX.Element[] = [];

	for (let i = 0; i < 3; i++) {
		cardItem.push(
			<Card key={i}>
				<CardImage>
					<span>Card Images</span>
				</CardImage>
				<Tags>
					<Tag name="#mobile" />
					<Tag name="#web" />
					<Tag name="#angular" />
				</Tags>
				<CardTitle />
				<CardContent />
			</Card>
		)
	}

	return (
		<Container>
			{cardItem}
		</Container>
	)
}

export default LandingPages

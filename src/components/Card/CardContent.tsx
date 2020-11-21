import React from 'react'
import IconBell from 'src/assets/icons/Bell'
import IconCallender from 'src/assets/icons/Callender'

interface Props {
	content: string
	author: string,
	publish: Date,
}

const CardContent = (props: Props) => {
	return (
		<>
			<p className="px-4 mb-3 font-sans font-light leading-tight">
				{props.content}
			</p>
			<div className="flex px-4 flex-col">
				<div className="authors flex text-center items-center ">
					<IconBell className="text-gray-600 mr-3 text-2xl" />
					<span>{props.author}</span>
				</div>
				<div className="authors flex text-center items-center  ">
					<IconCallender className="text-gray-600 mr-3 text-2xl mt-2" />
					<span className="mt-2">{props.publish}</span>
				</div>
			</div>
			<div className="button px-4 mt-3 mb-2 flex justify-end">
				<div className="btn">
					<button className="bg-gray-900 text-white py-3 px-7 rounded-tr-2xl rounded-bl-2xl cursor-pointer focus:outline-none mb-5">Baca</button>
				</div>
			</div>
		</>
	)
}

export default CardContent

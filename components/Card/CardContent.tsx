import React from 'react'

interface Props {

}

const CardContent = (props: Props) => {
	return (
		<>
			<p className="px-4 mb-3">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
				earum odio veniam molestias at ea voluptatum officia dolorem
				sed facilis cum maxime magni ad dolores obcaecati dolor enim. Ex, fugit?
         </p>
			<div className="button px-4 my-7 flex justify-end cursor-pointer">
				<span className="bg-gray-900 text-white py-3 px-7 rounded-tr-2xl rounded-bl-2xl">Baca</span>
			</div>
		</>
	)
}

export default CardContent

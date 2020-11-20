import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Card = ({ children }: Props) => {
    return (
        <div className="text-left mx-2 my-2 antialiased bg-gray-400 rounded-md  shadow-xl font-semibold text-gray-800 ">
            {children}
        </div>
    )
}

export default Card

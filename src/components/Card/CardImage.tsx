import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const CardImage = ({ children }: Props) => {
    return (
        <div className="bg-gray-200 w-full min-h-0 rounded-sm mb-2">
            {children}
        </div>
    )
}

export default CardImage

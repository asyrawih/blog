import React from 'react'

interface Props {
    name: string
}

const Tag = ({ name }: Props) => {
    return (
        <div className="flex w-20 h-8 bg-gray-300 rounded-md item-center justify-center items-center ml-2">
            <span>{name}</span>
        </div>
    )
}

export default Tag

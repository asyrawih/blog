import React from 'react'

interface Props {
    name: string
}

const Tag = ({ name }: Props) => {
    return (
        <div className="flex w-12 p-3 h-4 bg-gray-300 rounded-md text-xs item-center justify-center items-center ml-2">
            <span>{name}</span>
        </div>
    )
}

export default Tag

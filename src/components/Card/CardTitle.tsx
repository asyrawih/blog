import React from 'react'

interface Props {
    title: string
}

const CardTitle = (props: Props) => {
    return (
        <h2 className="text-left text-2xl px-4">
            {props.title}
        </h2>
    )
}

export default CardTitle

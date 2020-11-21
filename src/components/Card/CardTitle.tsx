import React from 'react'

interface Props {
    title: string
}

const CardTitle = (props: Props) => {
    return (
        <h2 className="text-left text-md px-4">
            {props.title.substr(0 , 40)}
        </h2>
    )
}

export default CardTitle

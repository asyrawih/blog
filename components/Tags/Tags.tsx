import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Tags = ({ children }: Props) => {
    return (
        <div className="tags flex p-2">
            {children}
        </div>
    )
}

export default Tags

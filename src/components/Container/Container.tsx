import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Container = ({ children }: Props) => {
    return (
        <div className="grid grid-flow-row auto-rows-max md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-12 md:ml-32 md:mr-12">
            {children}
        </div>
    )
}

export default Container

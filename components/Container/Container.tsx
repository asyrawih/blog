import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Container = ({ children }: Props) => {
    return (
        <div className="flex md:ml-28">
            <div className="flex flex-col flex-grow flex-nowrap lg:flex-row  lg:flex-auto p-3">
                {children}
            </div>
        </div>
    )
}

export default Container

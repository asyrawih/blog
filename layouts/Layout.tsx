import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}

export default Layout

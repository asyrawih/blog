import React from 'react'
import { Container } from '../components'
import Sidebar from '../components/Sidebar/Sidebar'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Sidebar brand={"Dev Hanan"} />
            {children}
        </div>
    )
}

export default Layout

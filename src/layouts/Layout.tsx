import React from 'react'
import Sidebar from '../components/Sidebar/Sidebar'
import Mobile from 'src/components/Mobile/Mobile'
interface Props {
    children: JSX.Element[] | JSX.Element
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            <Sidebar brand={"Dev Hanan"} />
                {children}
            <Mobile />
        </div>
    )
}

export default Layout

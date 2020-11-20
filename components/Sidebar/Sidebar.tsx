import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element,
    brand?: string
}

const Sidebar = ({ children, brand }: Props) => {
    return (
        <aside className="hidden flex-col justify-between fixed md:flex md:w-20 bg-gray-800  min-h-screen border-gray-400 border-r-2">
            
        </aside>
    )
}

export default Sidebar

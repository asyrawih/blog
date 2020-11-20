import React from 'react'

interface Props {
    brand?: string
}

const Sidebar = ({ brand }: Props) => {
    return (
        <aside className="hidden flex-col fixed md:flex md:w-20 bg-gray-800  min-h-screen border-gray-400 border-r-2">
            <span className="bg-gray-400">Brand Logo</span>
            <div className="menu flex-1">
                <div className="menu_item flex flex-col mt-32 space-y-20 text-center">
                    <div className="item bg-gray-500 mx-2 py-3">Home</div>
                    <div className="item bg-gray-500 mx-2 py-3">About</div>
                    <div className="item bg-gray-500 mx-2 py-3">Blogs</div>
                </div>
            </div>
            <div className="kosong h-24 bg-gray-500">Logo End</div>
        </aside>
    )
}

export default Sidebar

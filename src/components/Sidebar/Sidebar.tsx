import React from 'react'
import IconAt from 'src/assets/icons/At'
import IconGithub from 'src/assets/icons/Github'
import IconHome from 'src/assets/icons/Home'
import IconCode from 'src/assets/icons/IconCode'
import IconInsta from 'src/assets/icons/Instagram'
import IconTerminal from 'src/assets/icons/Terminal'

interface Props {
    brand?: string
}

const Sidebar = ({ brand }: Props) => {
    return (
        <aside className="hidden flex-col fixed md:flex md:w-20 bg-gray-800  min-h-screen border-gray-400 border-r-2 shadow-xl">
            <div className="text-center font-semibold h-20 mt-5 bg-gray-200 rounded-md shadow-lg mx-1">
                <div className="brand-name mx-3 leading-none">
                    <IconTerminal className="text-4xl subpixel-antialiased ml-2 text-white" />
                    {brand}
                </div>
            </div>
            <div className="menu flex-1">
                <div className="menu_item flex flex-col mt-28 space-y-20 text-center items-center">
                    <div className="item mx-2 py-3">
                        <IconHome className="text-gray-300 text-4xl antialiased" />
                    </div>
                    <div className="item mx-2 py-3">
                        <IconAt className="text-gray-300 text-4xl antialiased" />
                    </div>
                    <div className="item mx-2 py-3">
                        <IconCode className="text-gray-300 text-4xl antialiased" />
                    </div>
                </div>
            </div>
            <div className="kosong h-24 flex justify-center items-center">
                <IconGithub className="text-5xl antialiased" />
            </div>
        </aside>
    )
}

export default Sidebar

import React from 'react'
import IconAt from 'src/assets/icons/At'
import IconGithub from 'src/assets/icons/Github'
import IconHome from 'src/assets/icons/Home'
import IconCode from 'src/assets/icons/IconCode'
import IconTag from 'src/assets/icons/Tag'
import IconTerminal from 'src/assets/icons/Terminal'
import NextLink from 'next/link'
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
                <div className="menu_item flex flex-col mt-10 space-y-7 items-center">
                    <div className="item mx-2 py-3">
                        <NextLink href="/">
                            <a>
                                <IconHome className="text-gray-300 text-4xl antialiased cursor-pointer hover:text-yellow-300" />
                            </a>
                        </NextLink>
                    </div>
                    <div className="item mx-2 py-3">
                        <NextLink href="/tags">
                            <a>
                                <IconTag className="text-gray-300 text-4xl antialiased cursor-pointer hover:text-yellow-300" />
                            </a>
                        </NextLink>
                    </div>
                    <div className="item mx-2 py-3">
                        <NextLink href="/about">
                            <a>
                                <IconAt className="text-gray-300 text-4xl antialiased cursor-pointer hover:text-yellow-300" />
                            </a>
                        </NextLink>
                    </div>
                    <div className="item mx-2 py-3">
                        <NextLink href="/blog">
                            <a>
                                <IconCode className="text-gray-300 text-4xl antialiased cursor-pointer hover:text-yellow-300" />
                            </a>
                        </NextLink>
                    </div>
                </div>
            </div>
            <div className="kosong h-24 flex justify-center items-center">
                <IconGithub className="text-5xl antialiased cursor-pointer" />
            </div>
        </aside>
    )
}

export default Sidebar

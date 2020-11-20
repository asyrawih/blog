import React from 'react'
import NextLink from 'next/link'
import IconAt from 'src/assets/icons/At'
import IconHome from 'src/assets/icons/Home'
import IconCode from 'src/assets/icons/IconCode'
interface Props {

}

const Mobile = (props: Props) => {
    return (
        <div className="fixed md:hidden bottom-0 bg-gray-800 h-20 min-w-full border-white border-t-2">
            <div className="mobile_nav_bar">
                <div className="item flex justify-around pt-3">
                    <NextLink href="/">
                        <a>
                            <IconHome className="text-gray-300 text-4xl antialiased cursor-pointer hover:text-yellow-300" />
                            <span className="text-gray-200 hover:text-yellow-300 mb-1">Home</span>
                        </a>
                    </NextLink>
                    <NextLink href="/blog">
                        <a>
                            <IconCode className="text-gray-300 text-4xl text-center items-center antialiased cursor-pointer hover:text-yellow-300" />
                            <span className="text-gray-200 hover:text-yellow-300">Blog</span>
                        </a>
                    </NextLink>
                    <NextLink href="/about">
                        <a>
                            <IconAt className="text-gray-300 text-center text-4xl antialiased cursor-pointer hover:text-yellow-300" />
                            <span className="text-gray-200 hover:text-yellow-300 text-center items-center">About</span>
                        </a>
                    </NextLink>
                </div>
            </div>
        </div>
    )
}

export default Mobile

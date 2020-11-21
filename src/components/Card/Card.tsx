import React from 'react'
import { Transition } from '@headlessui/react'
interface Props {
    children: JSX.Element[] | JSX.Element
}

const Card = ({ children }: Props) => {
    return (
        <Transition
            appear={true}
            show={true}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
        >
            <div className="text-left mx-2 h-auto my-2 antialiased bg-gray-400 rounded-lg shadow-2xl font-semibold text-gray-800 ">
                {children}
            </div>
        </Transition>
    )
}

export default Card

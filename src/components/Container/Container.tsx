import { Transition } from '@headlessui/react'
import React from 'react'

interface Props {
    children: JSX.Element[] | JSX.Element
}

const Container = ({ children }: Props) => {
    return (
        <Transition
            show={true}
            appear={true}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
        >
            <div className="grid grid-flow-row auto-rows-max md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-12 md:ml-32 md:mr-12">
                {children}
            </div>
        </Transition>
    )
}

export default Container

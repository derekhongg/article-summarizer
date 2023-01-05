import React from 'react';
import { Disclosure } from '@headlessui/react'
import '../Nav/Nav.css'


function Nav() {

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div>
                                <a className='text-white' href="/">Article Summarizer</a>
                            </div>
                            <div>
                                <a className="text-white" href="/login">Login</a>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}

export default Nav;
'use client'

import { sideBottomMenu, sideMenu } from '@/constants';

import Image from 'next/image';
import { useState } from 'react';
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section>
            {/* Desktop Navigation */}
            <div className='lg:block hidden pt-12 px-4 bg-zinc-900 min-w-64 h-screen sticky top-0 bottom-0'>
                <div className='mb-12 relative h-12 w-40'>
                    <Image
                        src='/assets/logo.png'
                        alt='logo'
                        className='object-contain'
                        fill
                    />
                </div>

                <div className='flex flex-col gap-3 pl-2'>
                    {sideMenu.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`flex gap-2 items-center py-2 ${activeTab === item.id ? 'transition ease-in-out delay-100 duration-200 text-green-500' : 'text-white'}`}
                        >
                            <div className='text-xl'>{item.icon}</div>
                            <p className='text-sm'>{item.title}</p>
                        </button>
                    ))}
                </div>

                <div className='flex flex-col gap-3 pl-2 absolute bottom-10'>
                    {sideBottomMenu.map((item,) => (
                        <button
                            key={item.id}
                            onClick={() => { }}
                            className={`flex gap-2 items-center py-2 text-white`}
                        >
                            <div className='text-xl'>{item.icon}</div>
                            <p className='text-sm'>{item.title}</p>
                        </button>
                    ))}

                    <div className='pl-0 mx-auto'>
                        <div className='bg-zinc-800 px-3 py-4 flex gap-4 rounded-xl items-center mt-6'>
                            <div className='w-10 h-10 bg-zinc-600 rounded-full'>

                            </div>
                            <div className='flex flex-col'>
                                <h2 className='text-white font-semibold'>User</h2>
                                <p className='text-gray-500'>user@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className='lg:hidden p-6 sticky top-0 bottom-0'>
                <div className='flex items-center justify-between'>
                    <div className='relative h-10 w-32'>
                        <Image
                            src='/assets/logo.png'
                            alt='logo'
                            className='object-contain'
                            fill
                        />
                    </div>
                    <IoMdMenu
                        className='text-3xl text-white'
                        onClick={() => setIsOpen(true)}
                    />
                </div>

                {isOpen && (
                    <div className={`fixed overflow-hidden z-50 h-screen inset-0 transform ease-in-out ${isOpen ? "transition-opacity opacity-100 duration-500 -translate-x-0" : "transition-all delay-400 duration-500 opacity-0 -translate-x-full"}`}>
                        <div className={`w-screen max-w-lg left-0 absolute bg-zinc-900 h-screen shadow-xl delay-400 duration-500 ease-in-out transition-all transform ${isOpen ? "-translate-x-0" : "-translate-x-full"}`}>
                            <div className="relative w-screen max-w-lg p-6 overflow-y-scroll h-full flex flex-col">
                                <IoMdClose
                                    className="text-3xl text-white cursor-pointer mb-10 float-right"
                                    onClick={() => setIsOpen(false)}
                                />

                                <div className='flex flex-col gap-3 pl-2'>
                                    {sideMenu.map((item) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setActiveTab(item.id);
                                                setIsOpen(false);
                                            }}
                                            className={`flex gap-2 items-center py-2 ${activeTab === item.id ? 'transition ease-in-out delay-100 duration-200 text-green-500' : 'text-white'}`}
                                        >
                                            <div className='text-xl'>{item.icon}</div>
                                            <p className='text-sm'>{item.title}</p>
                                        </button>
                                    ))}
                                </div>

                                <div className='flex flex-col gap-3 pl-2 absolute bottom-4'>
                                    {sideBottomMenu.map((item,) => (
                                        <button
                                            key={item.id}
                                            onClick={() => {
                                                setIsOpen(false);
                                            }}
                                            className={`flex gap-2 items-center py-2 text-white`}
                                        >
                                            <div className='text-xl'>{item.icon}</div>
                                            <p className='text-sm'>{item.title}</p>
                                        </button>
                                    ))}

                                    <div className='pl-0 mx-auto'>
                                        <div className='bg-zinc-800 px-3 py-4 flex gap-4 rounded-xl items-center mt-6'>
                                            <div className='w-10 h-10 bg-zinc-600 rounded-full'>

                                            </div>
                                            <div className='flex flex-col'>
                                                <h2 className='text-white font-semibold'>User</h2>
                                                <p className='text-gray-500'>user@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default Sidebar

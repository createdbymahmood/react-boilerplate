import { Fragment, PropsWithChildren, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useOverlayConfig } from '@hooks/overlay/useOverlayConfig';
import { AppRoutesPath, Link } from '@components/common';
import clsx from 'clsx';

const tabs = [
    { name: 'All', href: 'AllUsers' as AppRoutesPath, current: true },
    { name: 'Online', href: 'OnlineUsers' as AppRoutesPath, current: false },
    { name: 'Offline', href: 'OfflineUsers' as AppRoutesPath, current: false },
];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export function CreatePostModal(props: PropsWithChildren<unknown>) {
    const [open, handleClose] = useOverlayConfig({ timeout: 500 });

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                static
                className='fixed inset-0 overflow-hidden'
                open={open}
                onClose={handleClose}
            >
                <div className='absolute inset-0 overflow-hidden'>
                    <Dialog.Overlay className='absolute inset-0' />

                    <div className='fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16'>
                        <Transition.Child
                            as={Fragment}
                            enter='transform transition ease-in-out duration-500 sm:duration-700'
                            enterFrom='translate-x-full'
                            enterTo='translate-x-0'
                            leave='transform transition ease-in-out duration-500 sm:duration-700'
                            leaveFrom='translate-x-0'
                            leaveTo='translate-x-full'
                        >
                            <div className='w-screen max-w-md'>
                                <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
                                    <div className='p-6'>
                                        <div className='flex items-start justify-between'>
                                            <Dialog.Title className='text-lg font-medium text-gray-900'>
                                                Team
                                            </Dialog.Title>
                                            <div className='ml-3 h-7 flex items-center'>
                                                <button
                                                    className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
                                                    onClick={() =>
                                                        handleClose()
                                                    }
                                                >
                                                    <span className='sr-only'>
                                                        Close panel
                                                    </span>
                                                    <XIcon
                                                        className='h-6 w-6'
                                                        aria-hidden='true'
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border-b border-gray-200'>
                                        <div className='px-6'>
                                            <nav
                                                className='-mb-px flex space-x-6'
                                                x-descriptions='Tab component'
                                            >
                                                {tabs.map(tab => (
                                                    <Link
                                                        key={tab.name}
                                                        to={
                                                            tab.href as AppRoutesPath
                                                        }
                                                        activeClassName='border-indigo-500 text-indigo-600'
                                                        className={clsx(
                                                            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                            'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm',
                                                        )}
                                                    >
                                                        {tab.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                    {props.children}
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

import React from 'react';

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HeartIcon, XIcon } from '@heroicons/react/outline';
import { PencilIcon, PlusIcon } from '@heroicons/react/solid';

import { useOverlayConfig } from '@hooks/overlay/useOverlayConfig';

const team = [
    {
        name: 'Tom Cook',
        email: 'tomcook@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Whitney Francis',
        email: 'whitneyfrancis@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Leonard Krasner',
        email: 'leonardkrasner@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Floyd Miles',
        email: 'floydmiles@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Emily Selman',
        email: 'emilyselman@example.com',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];

export function CreatePostModal() {
    const [open, handleCLose] = useOverlayConfig({
        timeout: 500,
    });

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as='div'
                static
                className='fixed z-10 inset-0 overflow-y-auto'
                open={open}
                onClose={handleCLose}
            >
                <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                    </Transition.Child>

                    {/* This element is to trick the browser into centering the modal contents. */}
                    <span
                        className='hidden sm:inline-block sm:align-middle sm:h-screen'
                        aria-hidden='true'
                    >
                        &#8203;
                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                        enterTo='opacity-100 translate-y-0 sm:scale-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                        leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                    >
                        <div className='inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                            <div className='h-full bg-white p-8 overflow-y-auto'>
                                <div className='pb-16 space-y-6'>
                                    <div>
                                        <div className='block w-full aspect-w-16 aspect-h-7 rounded-lg overflow-hidden'>
                                            <img
                                                src='https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80'
                                                alt=''
                                                className='object-cover'
                                            />
                                        </div>
                                        <div className='mt-4 flex items-start justify-between'>
                                            <div>
                                                <h2 className='text-lg font-medium text-gray-900'>
                                                    <span className='sr-only'>
                                                        Details for{' '}
                                                    </span>
                                                    IMG_4985.HEIC
                                                </h2>
                                                <p className='text-sm font-medium text-gray-500'>
                                                    3.9 MB
                                                </p>
                                            </div>
                                            <button
                                                type='button'
                                                className='ml-4 h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                            >
                                                <HeartIcon
                                                    className='h-6 w-6'
                                                    aria-hidden='true'
                                                />
                                                <span className='sr-only'>
                                                    Favorite
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-medium text-gray-900'>
                                            Information
                                        </h3>
                                        <dl className='mt-2 border-t border-b border-gray-200 divide-y divide-gray-200'>
                                            <div className='py-3 flex justify-between text-sm font-medium'>
                                                <dt className='text-gray-500'>
                                                    Uploaded by
                                                </dt>
                                                <dd className='text-gray-900'>
                                                    Marie Culver
                                                </dd>
                                            </div>
                                            <div className='py-3 flex justify-between text-sm font-medium'>
                                                <dt className='text-gray-500'>
                                                    Created
                                                </dt>
                                                <dd className='text-gray-900'>
                                                    June 8, 2020
                                                </dd>
                                            </div>
                                            <div className='py-3 flex justify-between text-sm font-medium'>
                                                <dt className='text-gray-500'>
                                                    Last modified
                                                </dt>
                                                <dd className='text-gray-900'>
                                                    June 8, 2020
                                                </dd>
                                            </div>
                                            <div className='py-3 flex justify-between text-sm font-medium'>
                                                <dt className='text-gray-500'>
                                                    Dimensions
                                                </dt>
                                                <dd className='text-gray-900'>
                                                    4032 x 3024
                                                </dd>
                                            </div>
                                            <div className='py-3 flex justify-between text-sm font-medium'>
                                                <dt className='text-gray-500'>
                                                    Resolution
                                                </dt>
                                                <dd className='text-gray-900'>
                                                    72 x 72
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div>
                                        <h3 className='font-medium text-gray-900'>
                                            Description
                                        </h3>
                                        <div className='mt-2 flex items-center justify-between'>
                                            <p className='text-sm text-gray-500 italic'>
                                                Add a description to this image.
                                            </p>
                                            <button
                                                type='button'
                                                className='-mr-2 h-8 w-8 bg-white rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                            >
                                                <PencilIcon
                                                    className='h-5 w-5'
                                                    aria-hidden='true'
                                                />
                                                <span className='sr-only'>
                                                    Add description
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className='font-medium text-gray-900'>
                                            Shared with
                                        </h3>
                                        <ul className='mt-2 border-t border-b border-gray-200 divide-y divide-gray-200'>
                                            <li className='py-3 flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <img
                                                        src='https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=1024&h=1024&q=80'
                                                        alt=''
                                                        className='w-8 h-8 rounded-full'
                                                    />
                                                    <p className='ml-4 text-sm font-medium text-gray-900'>
                                                        Aimee Douglas
                                                    </p>
                                                </div>
                                                <button
                                                    type='button'
                                                    className='ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                >
                                                    Remove
                                                    <span className='sr-only'>
                                                        {' '}
                                                        Aimee Douglas
                                                    </span>
                                                </button>
                                            </li>
                                            <li className='py-3 flex justify-between items-center'>
                                                <div className='flex items-center'>
                                                    <img
                                                        src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                                                        alt=''
                                                        className='w-8 h-8 rounded-full'
                                                    />
                                                    <p className='ml-4 text-sm font-medium text-gray-900'>
                                                        Andrea McMillan
                                                    </p>
                                                </div>
                                                <button
                                                    type='button'
                                                    className='ml-6 bg-white rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                                >
                                                    Remove
                                                    <span className='sr-only'>
                                                        {' '}
                                                        Andrea McMillan
                                                    </span>
                                                </button>
                                            </li>
                                            <li className='py-2 flex justify-between items-center'>
                                                <button
                                                    type='button'
                                                    className='group -ml-1 bg-white p-1 rounded-md flex items-center focus:outline-none focus:ring-2 focus:ring-indigo-500'
                                                >
                                                    <span className='w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center text-gray-400'>
                                                        <PlusIcon
                                                            className='h-5 w-5'
                                                            aria-hidden='true'
                                                        />
                                                    </span>
                                                    <span className='ml-4 text-sm font-medium text-indigo-600 group-hover:text-indigo-500'>
                                                        Share
                                                    </span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='flex'>
                                        <button
                                            type='button'
                                            className='flex-1 bg-indigo-600 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        >
                                            Download
                                        </button>
                                        <button
                                            type='button'
                                            className='flex-1 ml-3 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>
    );
}

import clsx from 'clsx';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { DotsVerticalIcon } from '@heroicons/react/solid';

const team = [
    {
        name: 'Leslie Alexander',
        handle: 'lesliealexander',
        href: '#',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        status: 'online',
    },
    // More people...
];

export function OfflineUsers() {
    return (
        <ul className='flex-1 divide-y divide-gray-200 overflow-y-auto'>
            {team.map(person => (
                <li key={person.handle}>
                    <div className='relative group py-6 px-5 flex items-center'>
                        <a href={person.href} className='-m-1 flex-1 block p-1'>
                            <div
                                className='absolute inset-0 group-hover:bg-gray-50'
                                aria-hidden='true'
                            />
                            <div className='flex-1 flex items-center min-w-0 relative'>
                                <span className='flex-shrink-0 inline-block relative'>
                                    <img
                                        className='h-10 w-10 rounded-full'
                                        src={person.imageUrl}
                                        alt=''
                                    />
                                    <span
                                        className={clsx(
                                            person.status === 'online'
                                                ? 'bg-green-400'
                                                : 'bg-gray-300',
                                            'absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white',
                                        )}
                                        aria-hidden='true'
                                    />
                                </span>
                                <div className='ml-4 truncate'>
                                    <p className='text-sm font-medium text-gray-900 truncate'>
                                        {person.name}
                                    </p>
                                    <p className='text-sm text-gray-500 truncate'>
                                        {'@' + person.handle}
                                    </p>
                                </div>
                            </div>
                        </a>
                        <Menu
                            as='div'
                            className='ml-2 flex-shrink-0 relative inline-block text-left'
                        >
                            {({ open }) => (
                                <>
                                    <Menu.Button className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                                        <span className='sr-only'>
                                            Open options menu
                                        </span>
                                        <span className='flex items-center justify-center h-full w-full rounded-full'>
                                            <DotsVerticalIcon
                                                className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
                                                aria-hidden='true'
                                            />
                                        </span>
                                    </Menu.Button>
                                    <Transition
                                        show={open}
                                        as={Fragment}
                                        enter='transition ease-out duration-100'
                                        enterFrom='transform opacity-0 scale-95'
                                        enterTo='transform opacity-100 scale-100'
                                        leave='transition ease-in duration-75'
                                        leaveFrom='transform opacity-100 scale-100'
                                        leaveTo='transform opacity-0 scale-95'
                                    >
                                        <Menu.Items
                                            static
                                            className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                                        >
                                            <div className='py-1'>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href='#'
                                                            className={clsx(
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block px-4 py-2 text-sm',
                                                            )}
                                                        >
                                                            View profile
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <a
                                                            href='#'
                                                            className={clsx(
                                                                active
                                                                    ? 'bg-gray-100 text-gray-900'
                                                                    : 'text-gray-700',
                                                                'block px-4 py-2 text-sm',
                                                            )}
                                                        >
                                                            Send message
                                                        </a>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Transition>
                                </>
                            )}
                        </Menu>
                    </div>
                </li>
            ))}
        </ul>
    );
}

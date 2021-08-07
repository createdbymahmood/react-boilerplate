import { Fragment, PropsWithChildren, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import {
    CalendarIcon,
    CogIcon,
    HomeIcon,
    MapIcon,
    MenuIcon,
    SearchCircleIcon,
    SpeakerphoneIcon,
    UserGroupIcon,
    ViewGridAddIcon,
    XIcon,
} from '@heroicons/react/outline';
import {
    ChevronLeftIcon,
    FilterIcon,
    MailIcon,
    PhoneIcon,
    SearchIcon,
} from '@heroicons/react/solid';
import clsx from 'clsx';
import { AppLayout, AppRoutesPath, Link } from '@components';

const user = {
    name: 'Tom Cook',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
    { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
    { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
    { name: 'Teams', href: '#', icon: UserGroupIcon, current: false },
    { name: 'Directory', href: '#', icon: SearchCircleIcon, current: false },
    {
        name: 'Announcements',
        href: '#',
        icon: SpeakerphoneIcon,
        current: false,
    },
    { name: 'Office Map', href: '#', icon: MapIcon, current: false },
];
const secondaryNavigation = [
    { name: 'Apps', href: '#', icon: ViewGridAddIcon },
    { name: 'Settings', href: '#', icon: CogIcon },
];
const tabs = [
    { name: 'Profile', href: 'Profile' as AppRoutesPath, current: true },
    {
        name: 'Calendar',
        href: 'ProfileCalendar' as AppRoutesPath,
        current: false,
    },
    {
        name: 'Recognition',
        href: 'ProfileRecognitionList' as AppRoutesPath,
        current: false,
    },
];
const profile = {
    name: 'Ricardo Cooper',
    imageUrl:
        'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    coverImageUrl:
        'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    about: `
    <p>Tincidunt quam neque in cursus viverra orci, dapibus nec tristique. Nullam ut sit dolor consectetur urna, dui cras nec sed. Cursus risus congue arcu aenean posuere aliquam.</p>
    <p>Et vivamus lorem pulvinar nascetur non. Pulvinar a sed platea rhoncus ac mauris amet. Urna, sem pretium sit pretium urna, senectus vitae. Scelerisque fermentum, cursus felis dui suspendisse velit pharetra. Augue et duis cursus maecenas eget quam lectus. Accumsan vitae nascetur pharetra rhoncus praesent dictum risus suspendisse.</p>
  `,
    fields: {
        Phone: '(555) 123-4567',
        Email: 'ricardocooper@example.com',
        Title: 'Senior Front-End Developer',
        Team: 'Product Development',
        Location: 'San Francisco',
        Sits: 'Oasis, 4th floor',
        Salary: '$145,000',
        Birthday: 'June 8, 1990',
    },
};

export default function Profile(props: PropsWithChildren<unknown>) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <AppLayout>
            <div className='relative h-screen flex overflow-hidden bg-white mt-2 rounded-lg'>
                <Transition.Root show={sidebarOpen} as={Fragment}>
                    <Dialog
                        as='div'
                        static
                        className='fixed inset-0 flex z-40 lg:hidden'
                        open={sidebarOpen}
                        onClose={setSidebarOpen}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter='transition-opacity ease-linear duration-300'
                            enterFrom='opacity-0'
                            enterTo='opacity-100'
                            leave='transition-opacity ease-linear duration-300'
                            leaveFrom='opacity-100'
                            leaveTo='opacity-0'
                        >
                            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
                        </Transition.Child>
                        <Transition.Child
                            as={Fragment}
                            enter='transition ease-in-out duration-300 transform'
                            enterFrom='-translate-x-full'
                            enterTo='translate-x-0'
                            leave='transition ease-in-out duration-300 transform'
                            leaveFrom='translate-x-0'
                            leaveTo='-translate-x-full'
                        >
                            <div className='relative flex-1 flex flex-col max-w-xs w-full bg-white focus:outline-none'>
                                <Transition.Child
                                    as={Fragment}
                                    enter='ease-in-out duration-300'
                                    enterFrom='opacity-0'
                                    enterTo='opacity-100'
                                    leave='ease-in-out duration-300'
                                    leaveFrom='opacity-100'
                                    leaveTo='opacity-0'
                                >
                                    <div className='absolute top-0 right-0 -mr-12 pt-2'>
                                        <button
                                            type='button'
                                            className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                                            onClick={() =>
                                                setSidebarOpen(false)
                                            }
                                        >
                                            <span className='sr-only'>
                                                Close sidebar
                                            </span>
                                            <XIcon
                                                className='h-6 w-6 text-white'
                                                aria-hidden='true'
                                            />
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div className='flex-1 h-0 pt-5 pb-4 overflow-y-auto'>
                                    <div className='flex-shrink-0 flex items-center px-4'>
                                        <img
                                            className='h-8 w-auto'
                                            src='https://tailwindui.com/img/logos/workflow-logo-pink-500-mark-gray-900-text.svg'
                                            alt='Workflow'
                                        />
                                    </div>
                                    <nav aria-label='Sidebar' className='mt-5'>
                                        <div className='px-2 space-y-1'>
                                            {navigation.map(item => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className={clsx(
                                                        item.current
                                                            ? 'bg-gray-100 text-gray-900'
                                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                                                        'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                                                    )}
                                                    aria-current={
                                                        item.current
                                                            ? 'page'
                                                            : undefined
                                                    }
                                                >
                                                    <item.icon
                                                        className={clsx(
                                                            item.current
                                                                ? 'text-gray-500'
                                                                : 'text-gray-400 group-hover:text-gray-500',
                                                            'mr-4 h-6 w-6',
                                                        )}
                                                        aria-hidden='true'
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                        <hr
                                            className='border-t border-gray-200 my-5'
                                            aria-hidden='true'
                                        />
                                        <div className='px-2 space-y-1'>
                                            {secondaryNavigation.map(item => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className='text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md'
                                                >
                                                    <item.icon
                                                        className='text-gray-400 group-hover:text-gray-500 mr-4 flex-shrink-0 h-6 w-6'
                                                        aria-hidden='true'
                                                    />
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    </nav>
                                </div>
                                <div className='flex-shrink-0 flex border-t border-gray-200 p-4'>
                                    <a
                                        href='#'
                                        className='flex-shrink-0 group block'
                                    >
                                        <div className='flex items-center'>
                                            <div>
                                                <img
                                                    className='inline-block h-10 w-10 rounded-full'
                                                    src={user.imageUrl}
                                                    alt=''
                                                />
                                            </div>
                                            <div className='ml-3'>
                                                <p className='text-base font-medium text-gray-700 group-hover:text-gray-900'>
                                                    {user.name}
                                                </p>
                                                <p className='text-sm font-medium text-gray-500 group-hover:text-gray-700'>
                                                    View profile
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </Transition.Child>
                        <div className='flex-shrink-0 w-14' aria-hidden='true'>
                            {/* Force sidebar to shrink to fit close icon */}
                        </div>
                    </Dialog>
                </Transition.Root>

                {/* Static sidebar for desktop */}

                <div className='flex flex-col min-w-0 flex-1 overflow-hidden'>
                    <div className='lg:hidden'>
                        <div className='flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5'>
                            <div>
                                <img
                                    className='h-8 w-auto'
                                    src='https://tailwindui.com/img/logos/workflow-mark-pink-500.svg'
                                    alt='Workflow'
                                />
                            </div>
                            <div>
                                <button
                                    type='button'
                                    className='-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-600'
                                    onClick={() => setSidebarOpen(true)}
                                >
                                    <span className='sr-only'>
                                        Open sidebar
                                    </span>
                                    <MenuIcon
                                        className='h-6 w-6'
                                        aria-hidden='true'
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 relative z-0 flex overflow-hidden'>
                        <main className='flex-1 relative z-0 overflow-y-auto scrollbar-hide focus:outline-none xl:order-last'>
                            {/* Breadcrumb */}
                            <nav
                                className='flex items-start px-4 py-3 sm:px-6 lg:px-8 xl:hidden'
                                aria-label='Breadcrumb'
                            >
                                <a
                                    href='#'
                                    className='inline-flex items-center space-x-3 text-sm font-medium text-gray-900'
                                >
                                    <ChevronLeftIcon
                                        className='-ml-2 h-5 w-5 text-gray-400'
                                        aria-hidden='true'
                                    />
                                    <span>Directory</span>
                                </a>
                            </nav>

                            <article>
                                {/* Profile header */}
                                <div>
                                    <div>
                                        <img
                                            className='h-32 w-full object-cover lg:h-48'
                                            src={profile.coverImageUrl}
                                            alt=''
                                        />
                                    </div>
                                    <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                                        <div className='-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5'>
                                            <div className='flex'>
                                                <img
                                                    className='h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32'
                                                    src={profile.imageUrl}
                                                    alt=''
                                                />
                                            </div>
                                            <div className='mt-6 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1'>
                                                <div className='sm:hidden 2xl:block mt-6 min-w-0 flex-1'>
                                                    <h1 className='text-2xl font-bold text-gray-900 truncate'>
                                                        {profile.name}
                                                    </h1>
                                                </div>
                                                <div className='mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4'>
                                                    <button
                                                        type='button'
                                                        className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                                                    >
                                                        <MailIcon
                                                            className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                                                            aria-hidden='true'
                                                        />
                                                        <span>Message</span>
                                                    </button>
                                                    <button
                                                        type='button'
                                                        className='inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500'
                                                    >
                                                        <PhoneIcon
                                                            className='-ml-1 mr-2 h-5 w-5 text-gray-400'
                                                            aria-hidden='true'
                                                        />
                                                        <span>Call</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='hidden sm:block 2xl:hidden mt-6 min-w-0 flex-1'>
                                            <h1 className='text-2xl font-bold text-gray-900 truncate'>
                                                {profile.name}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                                {/* Tabs */}
                                <div className='mt-6 sm:mt-2 2xl:mt-5'>
                                    <div className='border-b border-gray-200'>
                                        <div className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                                            <nav
                                                className='-mb-px flex space-x-8'
                                                aria-label='Tabs'
                                            >
                                                {tabs.map(tab => (
                                                    <Link
                                                        key={tab.name}
                                                        to={tab.href}
                                                        exact
                                                        activeClassName='border-pink-500 text-gray-900'
                                                        className={clsx(
                                                            'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                                                        )}
                                                    >
                                                        {tab.name}
                                                    </Link>
                                                ))}
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                {/* Description list */}
                                {props.children}
                            </article>
                        </main>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

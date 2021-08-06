import clsx from 'clsx';
import {
    FireIcon,
    HomeIcon,
    TrendingUpIcon,
    UserGroupIcon,
} from '@heroicons/react/outline';
import { AppRoutesPath, Link } from '@components/common';
const navigation = [
    {
        name: 'Home',
        href: 'Index' as AppRoutesPath,
        icon: HomeIcon,
        current: true,
    },
    {
        name: 'Popular',
        href: 'MostAnswers' as AppRoutesPath,
        icon: FireIcon,
        current: false,
    },
    {
        name: 'Communities',
        href: 'MostLikedPosts' as AppRoutesPath,
        icon: UserGroupIcon,
        current: false,
    },
    {
        name: 'Trending',
        href: 'RecentPosts' as AppRoutesPath,
        icon: TrendingUpIcon,
        current: false,
    },
];

const communities = [
    { name: 'Movies', href: '#' },
    { name: 'Food', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Animals', href: '#' },
    { name: 'Science', href: '#' },
    { name: 'Dinosaurs', href: '#' },
    { name: 'Talents', href: '#' },
    { name: 'Gaming', href: '#' },
];

export function Sidebar() {
    return (
        <div className='hidden lg:block lg:col-span-3 xl:col-span-2'>
            <nav
                aria-label='Sidebar'
                className='sticky top-4 divide-y divide-gray-300'
            >
                <div className='space-y-1 bg-white rounded-lg shadow'>
                    {navigation.map(item => (
                        <Link
                            key={item.name}
                            to={item.href as AppRoutesPath}
                            activeClassName='bg-gray-200 text-gray-900'
                            className={clsx(
                                'text-gray-600 hover:bg-gray-50',
                                'group flex items-center px-3 py-2 text-sm font-medium rounded-md',
                            )}
                            aria-current={item.current ? 'page' : undefined}
                            exact
                        >
                            {isActive => {
                                return (
                                    <>
                                        <item.icon
                                            className={clsx(
                                                isActive
                                                    ? 'text-gray-500'
                                                    : 'text-gray-400 group-hover:text-gray-500',
                                                'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                                            )}
                                            aria-hidden='true'
                                        />
                                        <span className='truncate'>
                                            {item.name}
                                        </span>
                                    </>
                                );
                            }}
                        </Link>
                    ))}
                </div>
                {/* <div className='pt-10'>
                    <p
                        className='px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider'
                        id='communities-headline'
                    >
                        My communities
                    </p>
                    <div
                        className='mt-3 space-y-2'
                        aria-labelledby='communities-headline'
                    >
                        {communities.map(community => (
                            <a
                                key={community.name}
                                href={community.href}
                                className='group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50'
                            >
                                <span className='truncate'>
                                    {community.name}
                                </span>
                            </a>
                        ))}
                    </div>
                </div> */}
            </nav>
        </div>
    );
}

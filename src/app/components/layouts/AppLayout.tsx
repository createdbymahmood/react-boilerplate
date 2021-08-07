import {
    Topbar,
    Sidebar,
    FollowSuggestionsList,
    TrendingQuestionsList,
} from '@components';
import { props } from 'lodash/fp';
import { PropsWithChildren } from 'react';

export function AppLayout(props: PropsWithChildren<unknown>) {
    return (
        <div className='relative min-h-screen bg-gray-100'>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Topbar />
            <div className='py-10'>
                <div className='max-w-3xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8'>
                    <div className='hidden lg:block lg:col-span-3 xl:col-span-2'>
                        <Sidebar />
                    </div>
                    <main className='lg:col-span-9 xl:col-span-6'>
                        {props.children}
                    </main>

                    <aside className='hidden xl:block xl:col-span-4'>
                        <div className='sticky top-4 space-y-4'>
                            <FollowSuggestionsList />
                            <TrendingQuestionsList />
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}

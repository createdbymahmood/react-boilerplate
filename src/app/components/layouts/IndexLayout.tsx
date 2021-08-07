import { Topbar, Sidebar } from '@components';
import React, { PropsWithChildren } from 'react';

export function IndexLayout(props: PropsWithChildren<unknown>) {
    return (
        <div className='relative min-h-screen bg-gray-100'>
            {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
            <Topbar />
            <div className='py-10'>
                <div className='w-full mx-auto sm:px-4 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8'>
                    <div className='hidden lg:block lg:col-span-3 xl:col-span-2'>
                        <Sidebar />
                    </div>
                    <main className='col-span-12 md:col-span-10'>
                        {props.children}
                    </main>
                </div>
            </div>
        </div>
    );
}

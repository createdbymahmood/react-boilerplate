import React from 'react';

const team = [
    {
        name: 'Leslie Alexander',
        handle: 'lesliealexander',
        role: 'Co-Founder / CEO',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Michael Foster',
        handle: 'michaelfoster',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Dries Vincent',
        handle: 'driesvincent',
        role: 'Manager, Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        name: 'Lindsay Walton',
        handle: 'lindsaywalton',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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

export function ProfileCard() {
    return (
        <div>
            <div className='mt-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'>
                <dl className='grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2'>
                    {Object.keys(profile.fields).map(field => (
                        <div key={field} className='sm:col-span-1'>
                            <dt className='text-sm font-medium text-gray-500'>
                                {field}
                            </dt>
                            <dd className='mt-1 text-sm text-gray-900'>
                                {profile.fields[field]}
                            </dd>
                        </div>
                    ))}
                    <div className='sm:col-span-2'>
                        <dt className='text-sm font-medium text-gray-500'>
                            About
                        </dt>
                        <dd
                            className='mt-1 max-w-prose text-sm text-gray-900 space-y-5'
                            dangerouslySetInnerHTML={{
                                __html: profile.about,
                            }}
                        />
                    </div>
                </dl>
            </div>
            {/* Team member list */}
            <div className='mt-8 max-w-5xl mx-auto px-4 pb-12 sm:px-6 lg:px-8'>
                <h2 className='text-sm font-medium text-gray-500'>
                    Team members
                </h2>
                <div className='mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2'>
                    {team.map(person => (
                        <div
                            key={person.handle}
                            className='relative rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500'
                        >
                            <div className='flex-shrink-0'>
                                <img
                                    className='h-10 w-10 rounded-full'
                                    src={person.imageUrl}
                                    alt=''
                                />
                            </div>
                            <div className='flex-1 min-w-0'>
                                <a href='#' className='focus:outline-none'>
                                    <span
                                        className='absolute inset-0'
                                        aria-hidden='true'
                                    />
                                    <p className='text-sm font-medium text-gray-900'>
                                        {person.name}
                                    </p>
                                    <p className='text-sm text-gray-500 truncate'>
                                        {person.role}
                                    </p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

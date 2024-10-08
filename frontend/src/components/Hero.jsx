import React from 'react';
import { Link } from 'react-router-dom';

const Hero = ({ darkMode, renter }) => {
    return (
        <main className={`relative isolate px-6 pt-14 custom:px-8 ${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
            <div
                aria-hidden="true"
                className={`absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 ${darkMode ? 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30' : 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30'}`}
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div className={`relative rounded-full px-3 py-1 text-sm leading-6 ${darkMode ? 'text-gray-400 ring-gray-700 hover:ring-gray-600' : 'text-gray-600 ring-gray-900/10 hover:ring-gray-900/20'} ring-1`}>
                        Announcing our next round of funding.{' '}
                        <a href="#" className={`font-semibold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            Read more <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        List and Rent the property of your dreams
                    </h1>
                    <p className="mt-6 text-lg leading-8">
                        PropertySleeze is the best place to find your next home. We have a wide range of properties available for rent. Whether you are looking for a house, apartment, or condo, we have the perfect property for you.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to={renter ? '/show-property' : '/sign-in'}
                            state={{ renter }}
                            className={`rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm ${darkMode ? 'bg-indigo-600 text-white hover:bg-indigo-500' : 'bg-indigo-600 text-white hover:bg-indigo-500'}`}
                        >
                            {renter ? 'Start Renting' : 'Get started'}
                        </Link>
                        <a href="/About" className="text-sm font-semibold leading-6">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
            <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] ${darkMode ? 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30' : 'bg-gradient-to-tr from-[#38b6ff] to-[#5e17eb] opacity-30'}`}
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                />
            </div>
        </main>
    );
}

export default Hero;

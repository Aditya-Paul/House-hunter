import React from 'react';

const Home = () => {
    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/92jwgNf/cover.png)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="flex flex-col items-center space-y-4 text-center text-black">
                        {/* Text content */}
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text">
                                Welcome to <span className='text-white'>Home Hunter</span>
                            </h1>
                            <p className="mx-auto max-w-[700px]">
                                Explore the wide range of Houses. Dive into the world of the Houses.
                            </p>
                        </div>
                        <div className="space-x-4">
                            <button className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50" href="#">
                                Explore Now
                            </button>
                        </div>
                    </div>
            </div>

        </div>
    );
};

export default Home;

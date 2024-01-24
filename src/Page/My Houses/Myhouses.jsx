import React from 'react';
import UseUserHouse from '../../Hook/UseUserHouse';

const Myhouses = () => {
    const [userhouses] = UseUserHouse()
    console.log(userhouses)
    return (
        <div className='flex flex-col items-center justify-center'>
            {
                userhouses.map(item => (
                    <div className=" flex  flex-col md:flex-row  my-20">
                        <div className="relative max-w-[350px] group">
                            <img
                                className="rounded-lg transform scale-105 w-full h-full"
                                src={item.picture}
                                alt="img"
                            />
                        </div>
                        <div className="space-y-12 max-w-[450px] rounded-tr-lg rounded-br-lg md:w-[1050px] text-center p-10 shadow-[0px_7px_30px_2px_rgba(100,100,111,0.2)]">
                            <div className="space-y-1">
                                <h2 className="text-3xl font-medium text-gray-700 text-center font-sans">
                                    {item.name}
                                </h2>
                                <p className="font-sans  text-gray-500">{item.city}</p>
                            </div>
                            <div className="flex flex-wrap space-x-16 justify-center items-center">
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-sm font-sans">Bedroom</p>
                                    <p className="text-3xl tracking-wider text-gray-700">{item.bedrooms}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-sm font-sans">Bathroom</p>
                                    <p className="text-3xl tracking-wider text-gray-700">{item.bathrooms}</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-gray-500 text-sm font-sans">Room size</p>
                                    <p className="text-3xl tracking-wider text-gray-700">{item.roomsize}</p>
                                </div>
                                <div className='flex items-center justify-between p-4'>
                                    <div className="space-y-1">
                                        <p className="text-gray-500 text-sm font-sans">Rent per month</p>
                                        <p className="text-3xl tracking-wider text-gray-700">{item.rent_per_month}</p>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-gray-500 text-sm font-sans">Contact</p>
                                        <p className="text-3xl tracking-wider text-gray-700">{item.phone_number}</p>
                                    </div>
                                </div>
                            </div>
                            {/* <div>
                                <button className="text-sm font-bold text-[#0d87f8] overflow-hidden shadow-lg border border-[#0d87f8] before:block before:absolute before:translate-x-full before:inset-0 before:bg-[#0d87f8] before:hover:translate-x-0 before:duration-300 before:rounded-s-full before:-z-10 after:-z-10 after:rounded-e-full after:duration-300 after:hover:translate-x-0 after:block after:absolute after:-translate-x-full after:inset-0 after:bg-[#0d87f8] relative inline-block hover:text-white py-3 px-6 rounded-full">
                                    SEND MESSAGE
                                </button>
                            </div> */}
                        </div>
                    </div>
                ))
            }

        </div>
    );
};

export default Myhouses;
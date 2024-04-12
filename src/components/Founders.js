import React from 'react';
import mum from "../images/mum.jpg"

function Founders() {
    return (
        <div className="py-24 sm:py-32 rounded-lg items-center justify-center mx-auto">
            <div className="max-w-2xl mx-auto mb-10">
                <h2 className="text-3xl font-bold tracking-tight text-red-200 sm:text-4xl sm:text-center  mx-auto items-center text-center justify-center">Meet our leadership</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
                    This is team behind everything that is happening here in Destiny,
                </p>
            </div>
            <div className="mx-auto max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3 justify-center items-center">
                <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 mx-auto items-center justify-center">
                    {/* {people.map((person) => ( */}
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={mum} alt="mum" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-200">Margaret Umburi</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={mum} alt="mum" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-200">Elihuruma Umburi</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Co-Founder / CTO</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={mum} alt="mama g" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-200">Hellen Mponda</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Assistant organizer</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={mum} alt="Gwen Tillman" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-200">Gwen Tillman</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Sponsor</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center gap-x-6">
                            <img className="h-16 w-16 rounded-full" src={mum} alt="Marisa" />
                            <div>
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-slate-200">Marisa</h3>
                                <p className="text-sm font-semibold leading-6 text-indigo-600">Sponsor</p>
                            </div>
                        </div>
                    </li>
                    {/* ))} */}
                </ul>
            </div>
        </div>
    )
}

export default Founders
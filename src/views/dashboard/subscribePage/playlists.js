import lg1 from '../../../media/lg1.jpg'
import lg2 from '../../../media/lg2.jpg'
import lg3 from '../../../media/lg3.jpg'
import dp from '../../../media/dp.png'
import { Link } from "react-router-dom";



export const Playlists = () => {
    return (
        <>


            <section className='pb-6'>
                <h2 className="font-semibold text-xl text-slate-400 px-5 pt-5">All Playlists <span className='text-sm mx-4'><i className="fa-solid fa-angle-down"></i></span></h2>

                <h2 className="font-bold text-slate-400 border-b border-slate-600 p-5 my-5">Angular Videos</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">


                    <Link to="watching">
                        <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                            <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                            <div className="flex gap-4 items-start p-5">
                                <div>
                                    <img src={dp} alt="displayp" className="rounded-full w-12" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                    <div className="flex gap-3 items-center text-slate-400">
                                        <p>PedroTech</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-slate-400">
                                        <span>124.4M views </span> - <span>2 weeks ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>


                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Arya Star - Rush</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

                <h2 className="font-bold text-slate-400 border-b border-slate-600 p-5 my-5">React Videos</h2>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                    <Link to="watching">
                        <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                            <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                            <div className="flex gap-4 items-start p-5">
                                <div>
                                    <img src={dp} alt="displayp" className="rounded-full w-12" />
                                </div>
                                <div>
                                    <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                    <div className="flex gap-3 items-center text-slate-400">
                                        <p>PedroTech</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="text-slate-400">
                                        <span>124.4M views </span> - <span>2 weeks ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Arya Star - Rush</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Davido - Blow My Mind (Official Video)</h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex gap-4 items-start p-5">
                            <div>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div>
                                <h2 className="font-bold text-white">Dj KayWise Mix </h2>
                                <div className="flex gap-3 items-center text-slate-400">
                                    <p>PedroTech</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="text-slate-400">
                                    <span>124.4M views </span> - <span>2 weeks ago</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>
        </>
    )
}
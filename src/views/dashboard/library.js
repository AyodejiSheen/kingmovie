import lg1 from '../../media/lg1.jpg'
import lg2 from '../../media/lg2.jpg'
import lg3 from '../../media/lg3.jpg'
import dp from '../../media/dp.png'
import { Link } from "react-router-dom";
import { MiniLibrary } from './miniLibrary';


export const Library = () => {
    return (
        <>

            <section className="bg-slate-900 flex justify-between lg:gap-10 px-2 md:px-6 lg:px-10 lg:py-10 py-6">
                <div className="flex-1 space-y-8">
                    <div className='border-b border-slate-600 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-semibold flex gap-2 items-center text-lg">
                                <i class="fa-solid fa-clock-rotate-left"></i> <p className="">History</p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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
                        </section>
                    </div>

                    <div className='border-b border-slate-600 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-semibold flex gap-2 items-center text-lg">
                                <i class="fa-regular fa-clock"></i> <p className="">Watch Later <span className='font-light ml-3 text-slate-400'>72</span></p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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
                        </section>
                    </div>

                    <div className='border-b border-slate-600 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-semibold flex gap-2 items-center text-lg">
                                <i class="fa-solid fa-thumbs-up"></i> <p className="">Liked Videos <span className='font-light ml-3 text-slate-400'>24</span></p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg3} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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

                            <Link to="watching">
                                <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                                    <img src={lg1} alt="video1" className="rounded-t-lg w-full" />

                                    <div className="flex gap-4 items-start p-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div className='text-sm'>
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
                        </section>
                    </div>

                </div>

                <MiniLibrary />
            </section>

        </>
    )
}
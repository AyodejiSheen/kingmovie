import lg1 from '../../media/llg1.jpg'
import lg2 from '../../media/llg2.webp'
import lg3 from '../../media/llg3.webp'
import dp from '../../media/dp.png'
import { useContext } from 'react'
import MainContext from '../../context/context'
import { ShortsVideoOption } from '../../components/shortsVideoOptions'
import { Link, useNavigate } from 'react-router-dom'

export const ShortsVideo = () => {

    let { show, showItem } = useContext(MainContext)
    const navigate = useNavigate()

    return (
        <>

            <section className="bg-slate-900 px-5 p-5 h-max space-y-6 ">
                <h2 className="font-bold text-2xl text-slate-400 border-b border-slate-600 py-5">Short Videos</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4'>
                    <div>

                        <Link to="/dashboard/shortwatch">
                            <div className="bg-slate-700 border-2  border-slate-600  rounded-lg">
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

                                <div className="relative flex justify-between items-start p-5">
                                    <div className='flex gap-4'>
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
                                    <div onClick={() => showItem('shortvid')} className='cursor-pointer text-slate-400 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                    {
                                        show === 'shortvid' && (
                                            <ShortsVideoOption />
                                        )
                                    }
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

                        <div className="relative flex justify-between items-start p-5">
                            <div className='flex gap-4'>
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
                            <div onClick={() => showItem('shortvid')} className='cursor-pointer text-slate-400 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                            {
                                show === 'shortvid' && (
                                    <ShortsVideoOption />
                                )
                            }
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

                        <div className="flex justify-between items-start p-5">
                            <div className='flex gap-4'>
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
                            <div className='text-slate-400 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

                        <div className="flex items-start justify-between p-5">
                            <div className='flex gap-4'>
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
                            <div className='text-slate-400 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                        </div>
                    </div>

                    <div className="bg-slate-700 border-2 border-slate-600  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

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
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

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
                        <img src={lg1} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

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
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

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
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full object-cover h-[30rem]" />

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
                </div>
            </section>

        </>
    )
}
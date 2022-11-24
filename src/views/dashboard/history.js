import lg1 from '../../media/lg1.jpg'
import lg2 from '../../media/lg2.jpg'
import lg3 from '../../media/lg3.jpg'
import dp from '../../media/dp.png'

import { Link } from 'react-router-dom'
import { MiniLibrary } from './miniLibrary'
// LCSFAHWO
export const History = () => {
    return (
        <>
            <section className="bg-slate-900 flex justify-between lg:gap-10 px-2 md:px-6 lg:px-10 lg:py-10 py-6">
                <div className="flex-1 space-y-8">
                    <div className="space-y-3">
                        <div className='space-y-6'>
                            <h2 className="font-bold text-slate-300 border-b border-slate-600 p-5 my-5">Today</h2>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg2} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Introduction - Full Stack Web Development Course [1] | ReactJS, NodeJS, Express, MySQL</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex-1 flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg1} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Stealing A Police Officers Watch 👮&zwj;♀️#shorts</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>

                                    <div className='flex flex-1 justify-between gap-6 lg:gap-10'>
                                        <div className=''>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg3} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Miss world from 2001 to 2020👑</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg2} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Best Tron (TRX) Cloud Mining Sites | TRX New Website Today | TRX Mining Today | TRX Mining</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg1} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>🔥 Create a Responsive Personal Portfolio Website Design Using HTML CSS & JavaScript</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-6'>
                            <h2 className="font-bold text-slate-300 border-b border-slate-600 p-5 my-5">Yesterday</h2>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg2} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Introduction - Full Stack Web Development Course [1] | ReactJS, NodeJS, Express, MySQL</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex-1 flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg1} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Stealing A Police Officers Watch 👮&zwj;♀️#shorts</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>

                                    <div className='flex flex-1 justify-between gap-6 lg:gap-10'>
                                        <div className=''>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg3} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Miss world from 2001 to 2020👑</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg2} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>Best Tron (TRX) Cloud Mining Sites | TRX New Website Today | TRX Mining Today | TRX Mining</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div className='flex gap-6 items-center justify-between '>
                                    <div className='flex justify-between gap-6 lg:gap-10'>
                                        <div>
                                            <Link to="watching">
                                                <div className='flex gap-3 lg:gap-6'>
                                                    <div className='w-40 md:w-56 lg:w-40 xl:w-80'>
                                                        <img src={lg1} alt="subscriber1" className='w-full object-cover' />
                                                    </div>
                                                    <div className='flex-1 lg:space-y-2'>
                                                        <h2 className='text-sm md:text-base xl:text-lg text-slate-200 font-semibold'>🔥 Create a Responsive Personal Portfolio Website Design Using HTML CSS & JavaScript</h2>
                                                        <p className='text-sm text-slate-400'>PedroTech</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>

                                        <div className='flex gap-6 h-max cursor-pointer'>
                                            <div className='text-slate-400 px-3 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <MiniLibrary />
            </section>

        </>
    )
}





import video1 from '../../media/play'
import { MiniNav } from './miniNav'
import dp from '../../media/dp.png'
import lg1 from '../../media/lg1.jpg'
import { useContext } from 'react'
import MainContext from '../../context/context'
import { ShareVideo } from '../shareVideo'

export const WatchVideo = () => {

    let { show, showItem } = useContext(MainContext)

    return (
        <>







            <section className='lg:flex gap-x-10 lg:p-6 bg-slate-900'>
                <div className='lg:w-2/3 space-y-3 pb-4'>
                    <video controls className='w-full h-max'>
                        <source src={video1} type="video/mp4" />
                    </video>

                    <div className='px-3'>
                        <h2 className='font-semibold text-white text-xl'>Adaobi - Official Video by Mavins Ft. Don Jazzy, Reekado Banks, Di'ja, Korede Bello</h2>
                        <div className='xl:flex justify-between gap-10 items-end'>
                            <div className=' space-y-3 py-3'>
                                <p className='text-slate-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt.</p>
                            </div>

                            <div className=' text-xs md:text-sm py-3'>
                                <div className='flex gap-6 h-max cursor-pointer'>
                                    <div className='text-slate-400 px-5 py-2 bg-slate-700 text-sm lg:text-base rounded-full'><i class="fa-solid fa-ellipsis-vertical"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='xl:flex px-3 gap-3 text-sm items-center'>
                        <div className='xl:w-1/2 space-y-3 py-3 border rounded-md border-slate-600'>
                            <div className='flex justify-between'>
                                <div>
                                    <div className="flex gap-4 items-start px-5">
                                        <div>
                                            <img src={dp} alt="displayp" className="rounded-full w-12" />
                                        </div>
                                        <div>
                                            <div className="flex gap-3 items-center text-slate-400">
                                                <p className='font-bold text-slate-300'>PedroTech</p>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            <div className="text-slate-400 ">
                                                <span>124.4M </span> - <span>Subsribers</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                            </div>
                        </div>
                    </div>


                    <div className='flex gap-4 p-3'>
                        <div>
                            <p className='text-slate-400 font-medium'>240074 Comments</p>
                        </div>
                        <div>
                            <div className="flex gap-2 font-medium text-slate-400 items-center">
                                <p>Sort By</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between items-center py-3'>
                        <div className="flex gap-4 items-start px-5">
                            <div className='w-12'>
                                <img src={dp} alt="displayp" className="rounded-full w-12" />
                            </div>
                            <div className='w-3/4'>
                                <input className='bg-transparent border-b border-slate-600 lg:w-96' placeholder='Add a comment'></input>
                            </div>
                        </div>
                    </div>


                    <div>
                        <div className='flex justify-between items-center'>
                            <div>
                                <div className="flex gap-4 items-start px-3">
                                    <div>
                                        <img src={dp} alt="displayp" className="rounded-full w-12" />
                                    </div>
                                    <div className='space-y-1.5'>
                                        <div className="flex gap-3 items-center text-slate-400">
                                            <p className='font-bold text-slate-300'>PedroTech</p>
                                            <p className='text-xs'>2 months ago</p>
                                        </div>
                                        <div className="text-slate-400 ">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor  incididunt.</p>
                                        </div>
                                        <div className='flex gap-3  text-slate-600'>
                                            <div className='flex gap-2'>
                                                <p>104</p>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div className='flex gap-2'>
                                                <p>34</p>
                                                <div>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384" />
                                                    </svg>
                                                </div>
                                            </div>

                                            <div>
                                                <p className='font-semibold'>REPLY</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className='text-slate-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='lg:block lg:w-1/3 space-y-4'>
                    <MiniNav />

                    <div className='px-5 space-y-4'>
                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>

                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>



                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>


                        <div className='flex gap-4'>
                            <div>
                                <img src={lg1} alt="video1" className="rounded-t-lg w-full" />
                            </div>
                            <div className='text-slate-400 text-sm' >
                                <h2 className='font-bold text-slate-200'>So Will I (100 Billion X) - Cross Worship ft. Osby Berry</h2>
                                <p>Cross Worship Music</p>
                                <p>784K views - 1 year agoc</p>
                            </div>
                        </div>






                    </div>
                </div>

                {
                    show === 'share' && (
                        <ShareVideo />
                    )
                }

            </section>


        </>
    )
}
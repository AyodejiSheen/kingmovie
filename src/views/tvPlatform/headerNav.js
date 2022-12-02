import { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ProfileNav } from '../../components/profileNav'
import MainContext from '../../context/context'
import logo from '../../media/logo.png'

import { SideNav } from './sideNav'


export const TvHome = () => {

    let { toggleNav, show, showItem } = useContext(MainContext)

    return (
        <>
            <section className=''>
                <div className="bg-slate-200 z-50 px-2 md:px-6 xl:px-24 2xl:px-36 py-1.5 flex items-center justify-between fixed w-full h-16 lg:h-24 border-b border-slate-200">

                    <div className='flex gap-4 items-center'>
                        <div onClick={toggleNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-slate-900 font-bold w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <div>
                            <div><img src={logo} alt="img" className='w-12 border-2 rounded-full border-slate-900 lg:w-16' /></div>
                        </div>
                        <div>
                            <h2 className='text-slate-900 hidden md:block font-bold text-lg'>KING TV</h2>
                        </div>
                    </div>

                    {/* search bar */}
                    <div>
                        <div className="md:flex justify-center flex-1 hidden">
                            <div className="relative w-full max-w-xl mr-6 focus-within:text-black text-blue-700">
                                <div className="absolute inset-y-0 flex items-center pl-2">
                                    <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                                    </svg>
                                </div>
                                <input className="lg:w-72 xl:w-96    pl-8 pr-2 py-2 text-sm text-gray-700 placeholder-gray-600 bg-gray-100 border-0 rounded-md dark:placeholder-gray-500 dark:focus:shadow-outline-gray dark:focus:placeholder-gray-600 focus:placeholder-gray-500 focus:bg-white focus:border-white focus:outline-none focus:shadow-outline-purple form-input" type="text" placeholder="Search for something here..." aria-label="Search" />
                            </div>
                        </div>
                    </div>

                    <div className='text-slate-900 flex items-center gap-4 md:gap-10 font-medium'>
                        <div>
                            <Link to="/dashboard">
                                <div className='bg-slate-300 px-2 lg:px-4 py-2 rounded-full cursor-pointer items-center'>
                                <i class="fa-solid fa-circle-play"></i>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to="plan">
                                <div className='bg-green-300 px-2 lg:px-4 py-2 rounded-full cursor-pointer items-center'>
                                    <p className='text-xs lg:text-sm text-green-900'>Upgrade to Pro</p>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to="notification">
                                <div className='text-lg  items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                                    </svg>
                                </div>
                            </Link>
                        </div>

                        <div className='relative'>
                            <div onClick={() => showItem('profile')} className='cursor-pointer lg:text-lg flex gap-3 items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <p className='hidden lg:block'>John Doe</p>
                            </div>
                            {
                                show === 'profile' && (
                                    <ProfileNav />
                                )
                            }
                        </div>
                    </div>

                </div>

                <div className='pt-16 lg:pt-24 '>
                    <section className='lg:flex'>
                        <div className=''>
                            <SideNav />
                        </div>
                        <div className='w-full lg:w-full lg:ml-80 xl:ml-72'>
                            <Outlet />
                        </div>
                    </section>
                </div>
            </section>
        </>
    )
}
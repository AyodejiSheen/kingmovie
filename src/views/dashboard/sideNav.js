import { useContext } from "react"
import { Link } from "react-router-dom"
import MainContext from "../../context/context"



export const SideNav = () => {


    let { mobileNav } = useContext(MainContext)


    return (
        <>

            <section className={`z-20 fixed transform h-full lg:translate-x-0 transition py-8 px-12 duration-300 ease-in-out w-5/6 lg:w-80 xl:w-72 overflow-y-auto bg-slate-800 pr-4 md:block ${mobileNav ? "-translate-x-0 bg-opacity-80 backdrop-blur-lg" : "-translate-x-full"}`}>
                <div className="space-y-14">
                    <div className="space-y-4 border-b border-slate-600 pb-6">
                        <div>
                            <Link to="/dashboard">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i class="fa-sharp fa-solid fa-house"></i>
                                    </div>
                                    <p>Home</p>
                                </div>
                            </Link>
                        </div>


                        <div>
                            <Link to="shorts">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                    </div>
                                    <p>Shorts</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="subscribed">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                    </div>
                                    <p>Subscription</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="border-b border-slate-600 space-y-4 pb-6">
                        <div>
                            <Link to="library">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                        </svg>
                                    </div>
                                    <p>Library</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="history">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>
                                    </div>
                                    <p>History</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Link to="watchlater">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p>Watch Later</p>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to="likedvideos">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                    </div>
                                    <p>Liked Videos</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <h2 className="font-bold text-lg text-white">Subscription</h2>
                        </div>

                        <div className="space-y-4 text-lg  ">
                            <Link to="subscribed/user">
                                <p className="text-slate-400">BlackfaceNaija</p>
                            </Link>
                            <p className="text-slate-400">Takpo TV</p>
                            <div className="flex gap-3 text-lg font-medium text-slate-400 items-center">
                                <p>Show more</p>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="space-y-2">
                        <div>
                            <h2 className="font-bold text-lg text-white">Explore</h2>
                        </div>

                        <div className="flex gap-3 text-lg font-medium text-slate-400 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <p>Trending</p>
                        </div>

                        <div className="flex gap-3 text-lg font-medium text-slate-400 items-center">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                                </svg>
                            </div>
                            <p>Music</p>
                        </div>

                    </div>

                </div>
            </section>

        </>
    )
}
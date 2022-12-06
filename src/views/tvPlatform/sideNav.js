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
                            <Link to="/tv_platform">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-fire-flame-curved"></i>
                                    </div>
                                    <p>Trending</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="drama">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                    <i class="fa-solid fa-film"></i>
                                    </div>
                                    <p>Drama</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="border-b border-slate-600 space-y-4 pb-6">
                        <div>
                            <Link to="action_movie">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-clapperboard"></i>
                                    </div>
                                    <p>Action Movie</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="romance">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-clapperboard"></i>
                                    </div>
                                    <p>Romance</p>
                                </div>
                            </Link>
                        </div>
                        <div>
                            <Link to="comedy">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-clapperboard"></i>
                                    </div>
                                    <p>Comedy</p>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <Link to="yoruba">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-clapperboard"></i>
                                    </div>
                                    <p>Yoruba</p>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to="downloads">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-cloud-arrow-down"></i>
                                    </div>
                                    <p>Downloads</p>
                                </div>
                            </Link>
                        </div>

                        <div>
                            <Link to="kids">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-users"></i>
                                    </div>
                                    <p>Kids</p>
                                </div>
                            </Link>
                        </div>

                        <div className="hidden">
                            <Link to="settings">
                                <div className="flex gap-3 text-lg font-medium text-white items-center">
                                    <div>
                                        <i className="fa-solid fa-gear"></i>
                                    </div>
                                    <p>Settings</p>
                                </div>
                            </Link>
                        </div>
                    </div>



                </div>
            </section>

        </>
    )
}
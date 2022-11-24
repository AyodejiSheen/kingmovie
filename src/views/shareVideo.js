// import dp from '../../assets/dp.png'

import { useContext } from "react"
import MainContext from "../context/context"



export const ShareVideo = () => {

    let { showItem } = useContext(MainContext)

    return (
        <>

            <div className="absolute top-0 left-0" >
                <div className="inset-0 fixed bg-slate-900 w-screen z-50 h-[100vh] bg-opacity-90 flex items-center px-3">

                    <div data-aos="fade-down" data-aos-duration="600" data-aos-easing="ease-in-out" className="rounded-lg space-y-4 bg-slate-700 mx-auto w-full lg:w-2/3 2xl:w-1/2 py-3">
                        <div className="flex justify-between items-center  2xl:px-8  border-b dark:border-slate-600 py-4  px-4 md:px-6">
                            <div>
                                <h2 className="text-sm 2xl:text-xl font-bold dark:text-slate-400">Share Video</h2>
                            </div>

                            <div>
                                <button onClick={() => showItem('share')} className="text-lg 2xl:text-2xl dark:text-slate-300"><i class="fa-solid fa-xmark"></i></button>
                            </div>
                        </div>


                        <div className="flex gap-10 py-10 justify-center items-center">
                            <div className="text-center text-slate-300">
                                <i className="text-3xl fa-brands fa-whatsapp"></i>
                                <p>Whatsapp</p>
                            </div>
                            <div className="text-center text-slate-300">
                                <i className="text-3xl fa-brands fa-facebook"></i>
                                <p>Facebook</p>
                            </div>
                            <div className="text-center text-slate-300">
                                <i className="text-3xl fa-brands fa-instagram"></i>
                                <p>Instagram</p>
                            </div>
                            <div className="text-center text-slate-300">
                                <i className="text-3xl fa-brands fa-twitter"></i>
                                <p>Twitter</p>
                            </div>
                            <div className="text-center text-slate-300">
                                <i className="text-3xl fa-brands fa-linkedin"></i>
                                <p>LinkedIn</p>
                            </div>
                            <div className="text-center text-slate-300">
                                <i className="text-3xl fa-brands fa-blogger"></i>
                                <p>Blogger</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
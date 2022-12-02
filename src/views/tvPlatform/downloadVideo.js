import React from 'react'
import lg1 from '../../media/E Tv/1.jpg'
import lg2 from '../../media/E Tv/5.jpg'
import lg3 from '../../media/E Tv/4.jpg'
import dp from '../../media/dp.png'

import { Link } from "react-router-dom";
import { useContext } from 'react';
import MainContext from '../../context/context';


export const DownloadVideo = () => {

    let { show, showItem } = useContext(MainContext)


    return (

        <>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

                <Link to="#">
                    <div className="bg-slate-100 border-2 shadow-md border-white  rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />
                        <div className="flex justify-between gap-10 items-center p-5">
                            <h2 className="font-bold text-lg text-slate-900">Original Madam (Full Movie)</h2>
                            <div><i className="fa-solid fa-trash-can text-red-700"></i></div>
                        </div>
                    </div>
                </Link>


                <Link to="watching">
                    <div className="bg-slate-100 border-2 shadow-md border-white  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />

                        <div className="flex justify-between gap-10 items-center p-5">
                            <h2 className="font-bold text-slate-900 text-lg">Davido - Blow My Mind (Official Video)</h2>
                            <div><i className="fa-solid fa-trash-can text-red-700"></i></div>
                        </div>
                    </div>
                </Link>

                <Link to="watching">
                    <div className="bg-slate-100 border-2 shadow-md border-white  rounded-lg">
                        <img src={lg1} alt="video1" className="rounded-t-lg w-full" />


                        <div className="flex justify-between gap-10 items-center p-5">
                            <h2 className="font-bold text-slate-900 text-lg">Davido - Blow My Mind (Official Video)</h2>
                            <div><i className="fa-solid fa-trash-can text-red-700"></i></div>
                        </div>
                    </div>
                </Link>

                <Link to="watching">
                    <div className="bg-slate-100 border-2 shadow-md border-white  rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />


                        <div className="flex justify-between gap-10 items-center p-5">
                            <h2 className="font-bold text-slate-900 text-lg">Davido - Blow My Mind (Official Video)</h2>
                            <div><i className="fa-solid fa-trash-can text-red-700"></i></div>
                        </div>
                    </div>
                </Link>

                <Link to="watching">
                    <div className="bg-slate-100 border-2 shadow-md border-white rounded-lg">
                        <img src={lg2} alt="video1" className="rounded-t-lg w-full" />


                        <div className="flex justify-between gap-10 items-center p-5">
                            <h2 className="font-bold text-slate-900 text-lg">Davido - Blow My Mind (Official Video)</h2>
                            <div><i className="fa-solid fa-trash-can text-red-700"></i></div>
                        </div>
                    </div>
                </Link>

                <Link to="watching">
                    <div className="bg-slate-100 border-2 shadow-md border-white rounded-lg">
                        <img src={lg3} alt="video1" className="rounded-t-lg w-full" />


                        <div className="flex justify-between gap-10 items-center p-5">
                            <h2 className="font-bold text-slate-900 text-lg">Davido - Blow My Mind (Official Video)</h2>
                            <div><i className="fa-solid fa-trash-can text-red-700"></i></div>
                        </div>
                    </div>
                </Link>
            </section>

        </>


    )
}

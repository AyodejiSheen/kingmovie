import React from 'react'
import lg1 from '../../media/E Tv/1.jpg'
import lg2 from '../../media/E Tv/5.jpg'
import lg3 from '../../media/E Tv/3.jpg'
import { Link } from 'react-router-dom'
import { VideosPage } from './videosPage'

export const ComedyMovie = () => {
    return (

        <>

            <section className="bg-slate-900 flex justify-between lg:gap-10 px-2 md:px-6 lg:px-10 lg:py-10 py-6">
                <div className="flex-1 space-y-8">
                    <h2 className="font-bold text-slate-400 border-b border-slate-600 p-5">Comedy Movies</h2>

                    <div>
                        <VideosPage/>
                    </div>
                </div>
            </section>

        </>

    )
}

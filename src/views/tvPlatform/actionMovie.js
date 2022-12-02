import React from 'react'
import { Link } from 'react-router-dom'
import { VideosPage } from './videosPage'

export const ActionMovie = () => {
    return (

        <>

            <section className="bg-slate-900 flex h-screen justify-between lg:gap-10 px-2 md:px-6 lg:px-10 lg:py-10 py-6">
                <div className="flex-1 space-y-8">
                    <h2 className="font-bold text-slate-400 border-b border-slate-600 p-5">Action Movies</h2>

                    <div>
                        <VideosPage/>
                    </div>
                </div>
            </section>

        </>

    )
}

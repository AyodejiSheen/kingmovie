import lg1 from '../../media/E Tv/1.jpg'
import lg2 from '../../media/E Tv/5.jpg'
import lg3 from '../../media/E Tv/4.jpg'
import dp from '../../media/dp.png'
import { Link } from "react-router-dom";
import { HomeOptions } from '../../components/homeOptions';
import { useContext } from 'react';
import MainContext from '../../context/context';
import { LibraryOptions } from '../../components/libraryOptions';
import { VideosPage } from './videosPage';


export const Home = () => {

    let { show, showItem } = useContext(MainContext)

    return (
        <>

            <section className="bg-slate-900 flex justify-between lg:gap-10 px-2 md:px-6 lg:px-10 lg:py-10 py-6">
                <div className="flex-1 space-y-8">
                    <div className='border-b border-slate-600 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-semibold flex gap-2 items-center text-lg">
                                <i class="fa-solid fa-fire-flame-curved"></i> <p className="">Trending</p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <VideosPage />
                    </div>

                    <div className='border-b border-slate-600 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-semibold flex gap-2 items-center text-lg">
                                <p className="">Drama Video <span className='font-light ml-3 text-slate-400'>72</span></p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <VideosPage />
                    </div>

                    <div className='border-b border-slate-600 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-semibold flex gap-2 items-center text-lg">
                                <p className="">Action Movies <span className='font-light ml-3 text-slate-400'>24</span></p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>
                        <VideosPage />
                    </div>

                    <div className='border-b border-slate-600 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-white font-semibold flex gap-2 items-center text-lg">
                                <p className="">Comedy <span className='font-light ml-3 text-slate-400'>24</span></p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <VideosPage />
                    </div>
                </div>
            </section>

        </>
    )
}
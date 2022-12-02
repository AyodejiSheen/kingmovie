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
                    <div className='border-b-2 border-slate-300 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-slate-100 font-bold flex gap-2 items-center text-xl">
                                <i class="fa-solid fa-fire-flame-curved"></i> <p className="">Trending</p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <VideosPage />
                    </div>

                    <div className='border-b-2 border-slate-300 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-slate-100 font-bold flex gap-2 items-center text-xl">
                                <p className="">Drama Video <span className='font-medium ml-3 text-slate-400'>72</span></p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>

                        <VideosPage />
                    </div>

                    <div className='border-b-2 border-slate-300 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-slate-100 font-bold flex gap-2 items-center text-xl">
                                <p className="">Action Movies <span className='font-medium ml-3 text-slate-400'>24</span></p>
                            </div>

                            <div className="text-blue-600 font-semibold">
                                SEE ALL
                            </div>
                        </div>
                        <VideosPage />
                    </div>

                    <div className=' border-slate-300 pb-6 space-y-4'>
                        <div className="flex justify-between items-center">
                            <div className="text-slate-100 font-bold flex gap-2 items-center text-xl">
                                <p className="">Comedy <span className='font-medium ml-3 text-slate-400'>24</span></p>
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
import { useState } from 'react';
import trend from '../../../media/trending.png'


export const Trending = () => {


    const [active, setActive] = useState("tab1");

    const handleChange = (value) => {
        setActive(value);

        if (value === "tab5" || value === "tab6") {
            showMedia();
        }
    };


    const [media, setMedia] = useState(false);

    const showMedia = () => {
        setMedia(!media)
    }



    return (
        <>

            <section className="bg-slate-900 space-y-4 py-10">
                <div className='w-5/6 mx-auto'>
                    <div className='flex gap-5 items-center'>
                        <div>
                            <img src={trend} alt='tredning' className='w-20' />
                        </div>

                        <div>
                            <h2 className='text-xl font-medium text-slate-300'>Trending</h2>
                        </div>
                    </div>
                </div>


                <section className='w-5/6 mx-auto '>
                    <div className=" flex overflow-x-scroll text-sm border-y border-slate-600 pt-2 gap-4 md:gap-6">
                        <div className="">
                            <button
                                onClick={() => handleChange("tab1")}
                                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500 ${active === "tab1" ? "border-b " : ""}`}
                                active={active === "tab1"}
                            >
                                <span className=" font-bold ">
                                    NOW
                                </span>
                            </button>
                        </div>

                        <div className="">
                            <button
                                onClick={() => handleChange("tab3")}
                                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab3" ? "border-b " : ""}`} active={active === "tab3"}
                            >
                                <span className=" font-bold ">
                                    MUSIC
                                </span>
                            </button>
                        </div>

                        <div className="">
                            <button
                                onClick={() => handleChange("tab4")}
                                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab4" ? "border-b " : ""}`} active={active === "tab4"}
                            >
                                <span className=" font-bold ">
                                    MOVIE
                                </span>
                            </button>
                        </div>

                        <div className="">
                            <button
                                onClick={() => handleChange("tab5")}
                                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab5" ? "border-b" : ""}`} active={active === "tab5"}
                            >
                                <span className=" font-bold ">
                                    GAMING
                                </span>
                            </button>
                        </div>
                    </div>


                    <div>
                        {/* <div hidden={active !== "tab1"}>
                            <Home />
                        </div>

                        <div hidden={active !== "tab3"}>
                            <Playlists />
                        </div>

                        <div hidden={active !== "tab4"}>
                            <Community />
                        </div>

                        <div hidden={active !== "tab5"}>
                            <Channels />
                        </div>


                        <div hidden={active !== "tab6"}>
                            <About />
                        </div>

 */}
                    </div>
                </section>
            </section>

        </>
    )
}
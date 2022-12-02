import React, { useState } from 'react'
import cvdp from '../../media/cvdp2.jpg'
import sub4 from '../../media/9.jpg'
import { Link } from 'react-router-dom';



const Profile = () => {

  const [active, setActive] = useState("tab1");

  const handleChange = (value) => {
    setActive(value);
  };



  return (

    <>
      <section className="bg-slate-900 pb-6">
        <section className="relative">
          <div>
            <img src={cvdp} alt="image" className=' h-80 object-cover w-full' />
          </div>

          <div className='w-5/6 mx-auto space-y-8 py-12'>
            <div className='md:flex space-y-3 md:space-y-0 gap-6 items-center justify-between'>
              <div className="flex gap-6">
                <div>
                  <img src={sub4} alt="new" className="rounded-full w-20" />
                </div>

                <div className='space-y-1'>
                  <h2 className='text-xl text-slate-300 font-bold'>SpaceGalaxy</h2>
                  <p className='text-sm text-slate-400'>@SpaceGalaxy</p>
                  <p className='text-sm text-slate-400'>47.3K subscribers • 465 videos</p>
                </div>
              </div>

              <div className=''>
                <div>
                  <button className='bg-slate-700 text-slate-400 py-3 px-8 font-semibold rounded-lg'>EDIT PROFILE</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='w-5/6 mx-auto '>
          <div className=" flex overflow-x-scroll text-sm border-y border-slate-600 pt-2 gap-4 md:gap-6">
            <div className="">
              <button
                onClick={() => handleChange("tab1")}
                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500 ${active === "tab1" ? "border-b " : ""}`}
                active={active === "tab1"}
              >
                <span className=" font-bold ">
                  HOME
                </span>
              </button>
            </div>

            <div className="">
              <button
                onClick={() => handleChange("tab3")}
                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab3" ? "border-b " : ""}`} active={active === "tab3"}
              >
                <span className=" font-bold ">
                  PLAYLISTS
                </span>
              </button>
            </div>

            <div className="">
              <button
                onClick={() => handleChange("tab4")}
                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab4" ? "border-b " : ""}`} active={active === "tab4"}
              >
                <span className=" font-bold ">
                  COMMUNITY
                </span>
              </button>
            </div>

            <div className="">
              <button
                onClick={() => handleChange("tab5")}
                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab5" ? "border-b" : ""}`} active={active === "tab5"}
              >
                <span className=" font-bold ">
                  CHANNELS
                </span>
              </button>
            </div>

            <div className="">
              <button
                onClick={() => handleChange("tab8")}
                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab5" ? "border-b" : ""}`} active={active === "tab5"}
              >
                <span className=" font-bold ">
                  DOWNLOADS
                </span>
              </button>
            </div>

            <div className="">
              <button
                onClick={() => handleChange("tab6")}
                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab6" ? "border-b" : ""}`} active={active === "tab6"}
              >
                <span className=" font-bold">
                  ABOUT
                </span>
              </button>
            </div>



            <div className="">
              <button
                onClick={() => handleChange("tab7")}
                className={`px-2 md:px-4 hover:text-slate-700 hover:bg-slate-200 py-1 md:py-2 text-slate-500  ${active === "tab6" ? "border-b" : ""}`} active={active === "tab6"}
              >
                <span className=" font-bold">
                  LIVE
                </span>
              </button>
            </div>
          </div>


          {/* <div>
            <div hidden={active !== "tab1"}>
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
          </div>*/}

        </section>
      </section>
    </>

  )
}

export default Profile
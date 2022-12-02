import React from 'react'
import { Link } from 'react-router-dom'
import lg1 from '../../media/2.webp'
import lg2 from '../../media/3.webp'
import lg3 from '../../media/4.webp'
import MiniChannels from '../dashboard/MiniChannels'



const Notification = () => {
  return (
    <section className="bg-slate-900 h-max lg:gap-10 px-2 md:px-6 lg:px-10 ">

      <section className="bg-slate-900 xl:flex justify-between lg:gap-14 px-2 md:px-6 lg:px-10 lg:py-10 py-6">
        <div className="xl:w-2/3 space-y-8">
          <h2 className="font-bold text-slate-400 border-b border-slate-600 p-5">Notifications</h2>
          <div className=" space-y-6">

            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg2} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Zubby Michel is on Live Video</h2>
                      <p className='text-sm text-slate-600'>Now</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>


            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg1} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Zubby Michel is on Live Video</h2>
                      <p className='text-sm text-slate-600'>Now</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>


            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg3} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Zubby Michel is on Live Video</h2>
                      <p className='text-sm text-slate-600'>Now</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>


            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg1} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Desmond Elliot Posted a video Just Now</h2>
                      <p className='text-sm text-slate-600'>Now</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>



            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg3} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Zubby Michel is on Live Video</h2>
                      <p className='text-sm text-slate-600'>Now</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>


            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg2} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Desmond Elliot Posted a video Just Now</h2>
                      <p className='text-sm text-slate-600'>Now</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>



            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg1} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Bolanel Ninalowo Posted a video Just Now</h2>
                      <p className='text-sm text-slate-600'>5 hours ago</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>


            <div className='flex justify-between items-center bg-white p-5 lg:p-8 xl:p-6 rounded-xl gap-6 lg:gap-10'>
              <div>
                <Link to="watching">
                  <div className='flex gap-3 lg:gap-6'>
                    <div className='w-16'>
                      <img src={lg3} alt="subscriber1" className='w-full h-16 rounded-full object-cover' />
                    </div>
                    <div className='flex-1 lg:space-y-2'>
                      <h2 className='text-sm md:text-base xl:text-lg text-slate-800 font-semibold'>Zubby Michel is on Live Video</h2>
                      <p className='text-sm text-slate-600'>Now</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className='flex gap-6 h-max cursor-pointer'>
                <div className='text-slate-200 font-medium  px-3 lg:px-8 py-2 bg-slate-700 text-sm lg:text-base rounded-full'>Watch</div>
              </div>
            </div>





          </div>
        </div>

        <div className='xl:w-1/3'>
          <MiniChannels />
        </div>
      </section>

    </section>
  )
}

export default Notification
import lg2 from '../../media/llg2.webp'
import video1 from '../../media/play'
import sub8 from '../../media/6.jpg'
import sub4 from '../../media/7.jpg'
import sub10 from '../../media/8.jpg'
import dp from '../../media/dp.png'
import { useContext } from 'react'
import MainContext from '../../context/context'
import { ShortComments } from '../../components/shortComments'


export const WatchShort = () => {

    let { showItem, show } = useContext(MainContext)

    return (
        <>

            <section className=" h-screen py-12 lg:flex gap-16 justify-center px-3 lg:px-14 items-center relative">

                <div className="lg:w-2/5 lg:h-[45em] rounded-xl  bg-white">
                    {/* <video controls className='w-full h-full'>
                        <source src={video1} type="video/mp4" />
                    </video> */}
                    <img src={lg2} alt="video1" className="rounded-xl w-full object-cover h-full" />

                    <div className=' flex justify-between p-6 text-slate-500 text-2xl'>
                        <div className='text-center'>
                            <i class="fa-solid fa-share"></i>
                            <p className='text-sm font-medium'>23.5K</p>
                        </div>
                        <div className='text-center'>
                            <i class="fa-solid fa-heart"></i>
                            <p className='text-sm font-medium'>234M</p>
                        </div>
                        <div className='text-center cursor-pointer' onClick={() => showItem('comments')}>
                            <i class="fa-solid fa-comment-dots"></i>
                            <p className='text-sm font-medium'>22.3K</p>
                        </div>
                        <div className='text-center'>
                            <i class="fa-solid fa-flag"></i>
                        </div>
                    </div>
                </div>

                <div className='mx-auto lg:mx-0'>
                    <div className='flex lg:block gap-5'>
                        <img src={dp} alt="users_dp" className='w-10 lg:w-32 rounded-full' />
                        <div>
                            <p className='text-sm font-semibold  text-slate-800'>@EasyTechGeek</p>
                            <p className='text-sm text-slate-400'>47.3K subscribers • 465 videos</p>
                        </div>
                    </div>
                </div>

            </section>



            {
                show === "comments" && (
                    <ShortComments />
                )
            }

        </>
    )
}
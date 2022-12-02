import React from 'react'
import sub4 from '../../media/4.jpg'
import sub5 from '../../media/6.jpg'
import sub6 from '../../media/7.jpg'
import sub7 from '../../media/8.jpg'
import sub9 from '../../media/9.jpg'
import sub10 from '../../media/10.jpg'

const MiniChannels = () => {
    return (
        <section className='space-y-8'>

            <h2 className="font-bold text-slate-400 border-b border-slate-600 p-5">Channels you subscribed to</h2>

            <div className="grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10 items-center justify-center grid-items-center">
                <div className='justify-self-center text-center space-y-2'>
                    <img src={sub4} alt="subscribe" className='rounded-full ' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>

                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub5} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>

                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub6} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>


                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub7} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>


                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub10} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>


                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub9} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>

                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub7} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>


                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub4} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>

                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub6} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>


                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub7} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>

                <div className='justify-self-center space-y-2 text-center'>
                    <img src={sub9} alt="subscribe" className='rounded-full' />
                    <div>
                        <p className='text-slate-300 font-semibold'>Ben Awad</p>
                        <p className='text-xs text-slate-500'>464K subscribers</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MiniChannels
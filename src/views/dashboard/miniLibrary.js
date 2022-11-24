import dp from '../../media/dp.png'


export const MiniLibrary = () => {
    return (
        <>
            <div className="hidden xl:block text-white h-max bg-slate-800 w-1/4 p-10 rounded-xl space-y-4">
                <img src={dp} alt="profile" className='rounded-full w-36 mx-auto' />

                <div className='space-y-4 text-slate-300'>
                    <h2 className='text-center textlg font-medium'>John Doe Stanley</h2>
                    <div>
                        <div className='flex border-y border-slate-600 justify-between p-2 2xl:p-4'>
                            <p>Subscriptions</p>
                            <p>71</p>
                        </div>

                        <div className='flex border-y border-slate-600 justify-between p-2 2xl:p-4'>
                            <p>Uploads</p>
                            <p>0</p>
                        </div>

                        <div className='flex border-y border-slate-600 justify-between p-2 2xl:p-4'>
                            <p>Liked Videos</p>
                            <p>123</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
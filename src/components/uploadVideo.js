import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useContext } from 'react';
import MainContext from '../context/context';
import cvdp from '../media/8.jpg'
import cv2 from '../media/cvdp.jpg'



export const UploadVideo = () => {

    let { showItem } = useContext(MainContext);

    return (
        <>

            <div className="absolute top-0 left-0 " >
                <div className="inset-0 fixed bg-slate-800 w-screen h-screen z-50 bg-opacity-60 flex items-center px-3">
                    <div className="shadow shadow-slate-400 rounded-lg space-y-4 overflow-y-scroll h-max bg-white mx-auto w-full lg:w-2/3 2xl:w-1/2 ">
                        <section className='space-y-6 p-4'>

                            <div className=' border-b pb-2'>
                                <div className='flex justify-between px-4'>
                                    <p className='font-bold text-lg'>Upload Video</p>
                                    <div>
                                        <button onClick={() => showItem('upload')} className="text-slate-600 text-lg 2xl:text-2xl"><i class="fa-solid fa-circle-xmark"></i></button>
                                    </div>
                                </div>
                            </div>

                            <section className='px-6 py-4'>
                                <Formik>
                                    <Form>
                                        <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                            <div className='w-full md:w-1/2'>
                                                <label className="block text-sm">
                                                    <span className="">Upload Video</span>
                                                    <Field
                                                        type="file"
                                                        name="video"
                                                        className="w-full border-2 border-dotted px-4 py-16 rounded text-center border-slate-300"
                                                        placeholder="Upload your video"
                                                    />
                                                    <ErrorMessage name="No video Imported" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>
                                        </div>



                                        <div className='md:flex md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>

                                            <div className='w-full '>
                                                <label className="block text-sm">
                                                    <span className="">Title</span>
                                                    <Field
                                                        type="text"
                                                        name="title"
                                                        className="w-full border px-4 py-3 rounded"
                                                        placeholder="How to make Cake"
                                                    />
                                                    <ErrorMessage name="title" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                                </label>
                                            </div>
                                        </div>

                                        <div className='w-full md:space-x-6 mb-4 lg:mb-0 space-y-4 md:space-y-0 justify-between lg:py-1.5'>
                                            <label className="block text-sm">
                                                <span className="">Description</span>
                                                <Field
                                                    as="textarea"
                                                    type="text"
                                                    name="desc"
                                                    className="w-full border px-4 py-3 rounded"
                                                    placeholder="We are openly opened minded. #openlyopenminded"
                                                />
                                                <ErrorMessage name="desc" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                            </label>
                                        </div>

                                        <button className='bg-slate-600 w-full text-center py-3 text-white rounded-xl'>Save</button>
                                    </Form>
                                </Formik>
                            </section>



                        </section>
                    </div>
                </div>
            </div>

        </>
    )
}
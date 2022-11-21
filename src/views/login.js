import logo from '../media/logo.png';
import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from 'yup';
import { Link } from 'react-router-dom';




export const Login = () => {



    //creating  intialvalues for formik
    const intialValues = {
        email: "",
        password: "",
    }



    //validationSchema--- to integrate validations on the form using Yup
    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required("Enter password"),
    })


    const onSubmit = (data, { resetForm }) => {


    }



    return (
        <>

            <div className="w-11/12 md:w-2/3 xl:w-1/3 bg-slate-500 rounded-xl h-max m-auto shadow-xl p-14 bg-opacity-20 backdrop-blur-lg border-2 border-slate-200" data-aos="zoom-out">
                <div className='space-y-6'>
                    <div><img src={logo} alt="img" className='w-24 mx-auto' /></div>
                    <div>
                        <h2 className='text-3xl text-white font-bold text-center'>Login</h2>
                        <p className='font-medium text-center text-slate-400 '>Sign in to your account</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <Formik initialValues={intialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                        <Form>

                            <div className='my-4 md:mt-0 lg:py-1.5'>
                                <label className="block text-sm">
                                    <span className="text-gray-200">Email Address</span>
                                    <Field
                                        type="email"
                                        name="email"
                                        className="block w-full mt-1 border p-3 text-sm font-medium focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                    />
                                    <ErrorMessage name="email" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                </label>
                            </div>


                            <div className='my-4 md:mt-0 lg:py-1.5'>
                                <label className="block text-sm">
                                    <span className="text-gray-200 dark:text-gray-400">Password</span>
                                    <Field
                                        type="password"
                                        name="password"
                                        className="block w-full mt-1 border p-3 text-sm font-medium focus:border-sky-400 focus:outline-none focus:shadow-outline-purple rounded"
                                    />
                                    <ErrorMessage name="password" component="span" className="text-red-500" /> {/*to display the error message for the field*/}
                                </label>
                            </div>

                            <p className="text-right">
                                <Link to="forgot-password"
                                    className="text-xs md:text-sm  font-semibold text-white hover:underline"
                                >
                                    Forgot your password?
                                </Link>
                            </p>

                            <button
                                className="block w-full px-4 py-3 shadow-lg mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-black border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue" type='submit'
                            >
                                Sign in
                            </button>

                        </Form>
                    </Formik>
                </div>
                <p className='font-medium text-center  text-slate-300 text-xs md:text-sm mt-3'>Not a Member yet? <Link to="/registration" className='text-white'>create an account</Link></p>
            </div>

        </>
    )
}
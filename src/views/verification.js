import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../media/logo.png';




export const Verification = () => {


    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [otpToken, setOtpToken] = useState("");


    const handleChange = (e, index) => {
        setOtp([...otp.map((d, idx) => (idx === index ? e.value : d))]);
        if (e.nextSibling) {
            e.nextSibling.focus();
        }
        setOtpToken(+otp.join("") + e.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(otpToken)
    }   


    return (
        <>
            <div className="w-11/12 md:w-2/3 xl:w-1/3 bg-slate-500 rounded-xl h-max m-auto shadow-xl p-5 md:p-14 bg-opacity-20 backdrop-blur-lg border-2 border-slate-200" data-aos="zoom-out">
                <div className='space-y-6'>
                    <div><img src={logo} alt="img" className='w-24 mx-auto' /></div>
                    <div>
                        <h2 className='text-3xl text-white font-bold text-center'>Verify Email</h2>
                        <p className='font-medium text-center text-slate-400 '>Enter the code sent to maxsmith009@gmail.com</p>
                    </div>
                </div>

                <div className='mt-12 space-y-6 flex justify-center'>

                    <form onSubmit={handleSubmit}>

                        {
                            otp.map((x, index) => (
                                <input
                                    type="number"
                                    onChange={(e) => handleChange(e.target, index)}
                                    onFocus={(e) => e.target.select()}
                                    key={index}
                                    value={x}
                                    name="token"
                                    maxLength={1}
                                    className="w-10 h-10 md:w-14 md:h-14 mx-3 border-2 rounded-md text-xl md:text-2xl font-medium text-center"
                                />
                            ))
                        }


                        <button 
                            className="block w-full px-4 py-3 shadow-lg  mt-6 text-sm font-semibold text-center text-white transition-colors duration-150 bg-black border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue" type='submit'>
                            Verify </button>

                    </form>

                </div>


                <p className='font-medium text-center text-xs md:text-sm mt-3 text-slate-300'> Didn't get the code?<Link to="/" className='text-white'> Resend</Link></p>
            </div>


        </>
    )
}
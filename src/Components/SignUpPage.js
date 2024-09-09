import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import {user} from '../Store/ExternalSlice'
import {useDispatch} from 'react-redux'
import axios from 'axios'
function SignUpPage() {
    const [show, setShow] = useState(false);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const name=useRef();
    const email=useRef();
    const password=useRef();
    const passwordAgain=useRef();
    const handleSighUp =async (e) => {
        e.preventDefault();
        if(name.current.value==="" || email.current.value==="" || password.current.value==="")
           {
            alert("All fields are monderoty");
            return;
           }
          
        if(!password.current.value.includes(passwordAgain.current.value))
        {
            alert("Password must be same");
            return;
        }
        const userData={fullName:name.current.value,email:email.current.value,password:password.current.value};
        try {
            const savedUser=await axios.post('https://sample-worknode.vercel.app/user/register',{userData});
            dispatch(user(savedUser.data));
            console.log("Registration successfull",savedUser.data)
            navigate('/')
        } catch (error) {
            console.log("Error in sighup",error)
        }

    }
    return (
        <>
           
            <div className='h-screen w-screen flex justify-center items-center'>

                <div className=' w-96'>

                    <form action="" onSubmit={handleSighUp}>
                        <input type="text" ref={name} placeholder='Name' className='block outline-none border-2 w-full py-2 px-4 rounded-2 my-4 border-gray-100 rounded-2xl' />
                        <input type="email" ref={email} placeholder='Email' className='block outline-none border-2 w-full py-2 px-4 rounded-2 my-4 border-gray-100 rounded-2xl' />
                        <input type="password" ref={password} placeholder='Password' className='block outline-none border-2 w-full py-2 px-4 rounded-2 my-4 border-gray-100 rounded-2xl' />
                        <div className='relative'>
                            <input type={show?"text":"password"} ref={passwordAgain} placeholder='Confirm Password' className='block pr-2 outline-none border-2 w-full py-2 px-4 rounded-2 my-4 border-gray-100 rounded-2xl' />
                            <span className='absolute top-[10px] cursor-pointer right-2'>
                                {show ? <svg onClick={()=>setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                </svg> : <svg onClick={()=>setShow(!show)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg>
                                }

                            </span>
                        </div>
                        <div className='text-center'>
                            <button className='bg-voilet20 py-3 mt-5 rounded-2xl text-2xl hover:bg-voilet100 w-80 hover:text-white text-voilet100'>Sign Up</button>
                            
                            <div className='my-4'>
                                <p>Already have an account?<Link to={'/login'}> <button className='text-voilet100 underline'>Login</button></Link></p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUpPage
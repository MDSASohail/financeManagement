import React, { useRef, useState } from 'react'

function ExpanseCom() {
    
    const category=useRef();
    const Description=useRef();
    const amount=useRef();

    const handleSubmit=()=>{
        if(amount.current.value<=0 || Description.current.value==="")
        {
            alert("All fields are mondatory");
            return;
        }
        console.log(category.current.value,Description.current.value,amount.current.value)
    }
    return (
        <div className='w-full expenseCom  successBG h-screen flex justify-center items-center'>
            <div className='rounded-md innerDiv bg-red100 w-96 '>
                <div className='h-40 relative redDiv'>
                    <input type="number" ref={amount} className='outline-none absolute  text-2xl text-white bg-transparent bottom-10 w-full' placeholder='How much?' />
                </div>
                <div className='w-full whiteDiv text-light20 pb-8 bg-white p-2 rounded-t-2xl'>
                    <div>
                        <select ref={category} name="" id="" className='w-full border-2 rounded-lg my-2 outline-none p-2'>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                            <option value="Cloths">Cloths</option>
                            <option value="Accessories">Accessories</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder='Description' ref={Description} className='w-full my-2 border-2 rounded-lg  outline-none p-2' />
                    </div>
                    <div className='text-center '>
                    <button onClick={handleSubmit} className='bg-voilet20 py-3 mt-5 rounded-2xl text-2xl hover:bg-voilet100 w-80 hover:text-white text-voilet100'>Sign Up</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExpanseCom
import { useEffect, useState } from 'react'
import BG from '../Images/BG.jpg'
import img1 from '../Images/Imge1.jpg'
import img2 from '../Images/Img2.jpg'
import img3 from '../Images/Img3.jpg'
import { Link } from 'react-router-dom';

function FirstPage() {
  const [toDisplay,setToDisplay]=useState(0);
  const lists=[
    {img:img1,head:"Gain total control of you money",para:"Become your own money manager and make every paise count"},
    {img:img2,head:"Know where your money goes",para:"Track your transection easily, with the category and financial report."},
    {img:img3,head:"Planning ahead",para:"Setup your budget for each category so you in control"}
  ]
  useEffect(()=>{
       const timer=setInterval(()=>{
                   setToDisplay(pre=>{
                     if(pre===2)
                      return 0;
                     return pre+1;
                   })
       },2000);

       return ()=>{
         clearInterval(timer);
       }

  },[])
  return (
    <div className='flex  mainDiv items-center  p-4'>
      <div className='flex-[6]  '>
         <div>
          <img src={lists[toDisplay].img} alt="" className='w-full rounded-md h-[350px]'/>
         </div>
         <div className=' contentDiv h-40 '>
           <h1 className='text-6xl text-center  text-black100'>{lists[toDisplay].head}</h1>
           <p className='text-center text-light20  text-2xl'>{lists[toDisplay].para}</p>
         </div>

      </div>
      <div className='flex-[4]  text-center '>
         <Link to={'/signup'}><button className='bg-voilet20 py-3 mt-5 rounded-2xl text-2xl hover:bg-voilet100 w-80 hover:text-white text-voilet100'>Sign Up</button></Link>
         <Link to={'/login'}><button className='bg-voilet20 py-3 mt-5 rounded-2xl text-2xl hover:bg-voilet100 w-80  hover:text-white text-voilet100'>Login</button></Link>
      </div>

    </div>
  )
}

export default FirstPage
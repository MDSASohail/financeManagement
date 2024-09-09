
import { useDispatch, useSelector } from 'react-redux';
import {setFilterShow,setCategory,setExt,setShortBy,setReset} from '../Store/InternalSlice'
function FilterOptions() {
    
     const {ext,shortBy,category}=useSelector(state=>state.internalData);
   

    const handleInnerClick=(e)=>{
        e.stopPropagation();   
    }
    
    const dispatch=useDispatch();
    return (
        <div  className={`filterOptions  top-0 absolute   w-full h-full flex justify-center items-center  ` } onClick={()=>dispatch(setFilterShow(false))}>
            <div onClick={handleInnerClick} className=' bg-white w-96 p-6  rounded-xl'>
                
                <div  className='flex justify-between'>
                    <h1 className='font-medium'>Filter Transaction</h1>
                    <button className='bg-voilet20  rounded-2xl hover:bg-voilet100  hover:text-white py-1 px-4  text-voilet100' onClick={()=>{dispatch(setReset())}}>Reset</button>

                </div>
                <div className=''>
                    <h1 className='font-medium mb-2'>Filter By</h1>
                    <div className='flex justify-evenly'>
                        <button onClick={()=> dispatch(setExt("Income"))} className={`  rounded-2xl hover:bg-voilet100  hover:text-white py-1 px-4   ${ext==="Income"?"bg-voilet100 text-white":"bg-voilet20 text-voilet100"}`}>Income</button>
                        <button onClick={()=>dispatch(setExt("Expense"))}  className={` rounded-2xl hover:bg-voilet100  hover:text-white py-1 px-4   ${ext==="Expense"?"bg-voilet100 text-white":"bg-voilet20 text-voilet100"}`}>Expense</button>
                    </div>
                </div>
                <div className='my-2'>
                    <h1 className='font-medium mb-2'>Short By</h1>
                    <div className='flex justify-evenly'>
                        <button onClick={()=>{dispatch(setShortBy("Highest"))}} className={`  rounded-2xl hover:bg-voilet100  hover:text-white py-1 px-4   ${shortBy==="Highest"?"bg-voilet100 text-white":"bg-voilet20 text-voilet100"}`} >Highest</button>
                        <button onClick={()=>{dispatch(setShortBy("Lowest"))}} className={`  rounded-2xl hover:bg-voilet100  hover:text-white py-1 px-4   ${shortBy==="Lowest"?"bg-voilet100 text-white":"bg-voilet20 text-voilet100"}`}>Lowest</button>
                        <button onClick={()=>{dispatch(setShortBy("Newest"))}} className={`  rounded-2xl hover:bg-voilet100  hover:text-white py-1 px-4   ${shortBy==="Newest"?"bg-voilet100 text-white":"bg-voilet20 text-voilet100"}`}>Newest</button>
                        <button onClick={()=>{dispatch(setShortBy("Oldest"))}} className={`  rounded-2xl hover:bg-voilet100  hover:text-white py-1 px-4   ${shortBy==="Oldest"?"bg-voilet100 text-white":"bg-voilet20 text-voilet100"}`}>Oldest</button>
                    </div>
                </div>
                <div className='my-2'>
                    <h1 className='font-medium '>Category</h1>
                    <div className='flex mt-4 justify-between'>
                        <h1>Choose Category</h1>
                        {ext==="Expense" && <select value={category} onChange={(e)=>{dispatch(setCategory(e.target.value))}} className=' bg-voilet100  rounded-2xl    py-1 px-4  text-white outline-none' name="" id="">
                            <option value="All">All</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Food">Food</option>
                            <option value="Travel">Travel</option>
                        </select>}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default FilterOptions
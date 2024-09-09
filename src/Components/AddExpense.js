import { useRef } from 'react'
import { setSingleExpense} from '../Store/ExternalSlice'
import { setAddExpense } from '../Store/InternalSlice'
import { useDispatch, useSelector } from 'react-redux'
import {data} from '../Data'
import axios from 'axios';
function AddExpense({ type,setType}) {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.externalData);
  const amount = useRef();
  const category = useRef();
  const description = useRef();
  //TO handle change in Type of expense
  const handleType=(e)=>{
    setType(e.target.value)
  }
  //To handle submit
  const handleSumbit = async (e) => {
    const c=type.split('|');
    e.preventDefault();
    if (amount.current.value === "" || c[0]==="Expense"?category.current.value === "":false || description.current.value === "") {
      alert("All fields are mondatory");
      return;
    }
    

    
    const expense = { userId: user._id, description: description.current.value, amount: amount.current.value, category: [c[0].trim(),c[0].trim()==="Expense"?category.current.value:null] };
    //Saving data on database.
    try {
      const savedData = await axios.post('https://sample-worknode.vercel.app/expense/save', { expense });
      console.log("Saved expensed",savedData.data)
      //Updating only the latest expense and total in the store
      dispatch(setSingleExpense(savedData.data.savedExpense));
      amount.current.value = "";
      category.current.value = "";
      description.current.value = "";
      
    } catch (error) {
      console.log("Error in saving Expense",error.message);
    }
    // console.log(expense);

  }
  return (
    <div className='w-full filterOptions    addExpense  absolute top-0  h-full  flex justify-center items-center'>
      <form action="" onSubmit={handleSumbit}>
        <div className={`mainDiv rounded-lg ${type}`}>
          <div className=' text-white h-1/2 p-4'>
            <div className='relative'>
              <span onClick={() => dispatch(setAddExpense(false))} className='absolute top-2 cursor-pointer'>⬅️</span>
              <p className='text-center text-2xl'>
                <select value={type} onChange={handleType} name="" id="" className='outline-none bg-transparent'>
                  {data.map(item=><option value={`${item.text} | ${item.bg}`} className={`${item.bg}`} key={item.text}>{item.text}</option>)}
                </select>
              </p>
            </div>
            <div className='mt-20'>
              <p>How much?</p>
              <input type="number" ref={amount} placeholder='Rs' className='text-4xl outline-none bg-transparent' />
            </div>
          </div>
          <div className='bg-white flex flex-col justify-center  h-1/2 rounded-t-3xl   px-3 pt-4 '>
           {type.includes("Expense") && <div className='w-full' >
              <select name="" id="" ref={category} className='w-full py-2 outline-none'>
                <option value="Shopping">Shopping</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                
              </select>
            </div>}
            <div className='w-full py-2'>
              <input ref={description} type="text" placeholder='Description' className='w-full text-xl outline-none py-2' />
            </div>
            <div className='w-full text-center py-2'>
              <button className='bg-voilet20 w-full  rounded-2xl text-2xl hover:bg-voilet100 px-6 mt-2 hover:text-white py-1  text-voilet100'>Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddExpense
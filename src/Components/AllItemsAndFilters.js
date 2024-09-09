import { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import ListOfExpenses from './ListOfExpenses'
import {setFilterShow,setAddExpense} from '../Store/InternalSlice'
import FilterOptions from './FilterOptions';
import Pages from './Pages';
import AddExpense from './AddExpense';
function AllItemsAndFilters() {
    const dispatch=useDispatch();
    const {filterShow,addExpense}  =useSelector(state=>state.internalData);
    //Data for addExpense Component
    const [type,setType]=useState('Expense | bg-red100')
    return (
        <div className=' relative allItemsAndFilter '>
            {filterShow && <FilterOptions/>}
            {addExpense && <AddExpense type={type} setType={setType}/>}
            <div className='flex listFlex  justify-between items-center px-4  '>
                <Pages/>
                <div>
                <button onClick={()=>{dispatch(setAddExpense(true))}} className='bg-voilet20 mx-2  rounded-2xl text-2xl hover:bg-voilet100 px-6 mt-2 hover:text-white py-1  text-voilet100'>Add Expense</button>
                <button onClick={()=>{dispatch(setFilterShow(true))}} className='bg-voilet20  rounded-2xl text-2xl hover:bg-voilet100 px-6 mt-2 hover:text-white py-1  text-voilet100' >Filter</button>
                </div>
            </div>
            <div className='allTransections overflow-scroll overflow-x-hidden'>
                <ListOfExpenses />
            </div>
        </div>
    )
}

export default AllItemsAndFilters
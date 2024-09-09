import { useMemo } from 'react';
import {format} from 'timeago.js'
import IMG from '../Images/Shopping.png'
import { useDispatch, useSelector } from 'react-redux'
import { setLengthOfFilteredData ,setPageNo} from '../Store/ExternalSlice'

function ListOfExpenses() {
  const { pageNo,allExpencesToSHow : allExpences } = useSelector(state => state.externalData);
  const { ext, shortBy, category } = useSelector(state => state.internalData);
  const dispatch = useDispatch();
  const filteredData = useMemo(() => {
    let data = allExpences.slice();
    //Filter the list by category
    if (category && category!=="All") {
      
      data = data.filter(item => item.category[0] === category || item.category[1] === category);
    }

    //Filter by Expense and Income.
    if(ext==="Expense")
    {
       data=data.filter(item=>item.category[0].trim()==="Expense");
    }
    else if(ext==="Income")
    {
       data=data.filter(item=>item.category[0].trim()==="Income");
    }

    //Filter data by lowest, Highest, Newest, and oldest.
    if (shortBy) {
      if (shortBy === "Lowest") {
        data = data.sort((a, b) => a.amount - b.amount);

      }
      else if (shortBy === "Highest") {
        
        data = data.sort((a, b) => b.amount - a.amount);
      }else if(shortBy==="Newest")
      {
        data = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

      }else
      {
        data = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));

      }
    }

    
    dispatch(setLengthOfFilteredData(data.length));
    dispatch(setPageNo(0));
    return data;
  }, [ext, shortBy, category, allExpences,dispatch]);

  return (
    <div className='listss'>

      {filteredData.length>0?filteredData.slice(pageNo * 10, (pageNo + 1) * 10).map((item) => <li key={item.id} className='list-none border-b-2 flex p-2'>
        <div className='flex-[2]'>
          <img src={IMG} alt="" />
        </div>
        <div className='flex-[6]'>
          <h1 className='font-bold'>{item.category[1]||item.category[0]}</h1>
          <p className='text-sm text-light20'>{item.description}</p>
        </div>
        <div className='flex-[2]'>
          <h3 className={`font-medium ${item.category[0] === "Income" ? 'text-green100' : "text-red100"}`}>{item.category[0] === "Income" ? '+ ' + item.amount : '- ' + item.amount}</h3>
          <h3 className='text-light20'>{format(item.createdAt)}</h3>
        </div>
      </li>):<div className='flex text-3xl justify-center text-center text-voilet100 items-center h-screen'>
         Add Expense or Income to Display
      </div>}
      
    </div>
  )
}

export default ListOfExpenses
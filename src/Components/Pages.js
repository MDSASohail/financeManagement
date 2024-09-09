import { useDispatch, useSelector } from 'react-redux'
import {setPageNo} from '../Store/ExternalSlice'
function Pages() {
    const {pageNo,lengthOfFilteredData}=useSelector(state=>state.externalData);
    const dispatch=useDispatch();
  return (
    <div className=''>
        <button onClick={()=>{dispatch(setPageNo(pageNo-1))}} className={`text-light20 px-3 rounded-md py-2 border- hover:bg-blue100 hover:text-white transition-colors ${pageNo===0?"invisible":"visible"}`}>⬅️</button> 
         {[...Array(Math.ceil(lengthOfFilteredData/10))].map((_,index)=><button onClick={()=>{dispatch(setPageNo(index))}} key={index} className={`text-light20 px-3 rounded-md py-2 border- hover:bg-blue100 hover:text-white transition-colors ${pageNo===index?'bg-voilet100  text-white':""}`}>{index+1}</button>)}
        <button onClick={()=>{dispatch(setPageNo(pageNo+1))}} className={`text-light20 px-3 rounded-md py-2 border- hover:bg-blue100 hover:text-white transition-colors ${Math.ceil(lengthOfFilteredData/10)-1===pageNo?"invisible":"visible"}`}>➡️</button>
    </div>
  )
}

export default Pages
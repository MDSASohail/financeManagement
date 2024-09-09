import { useDispatch, useSelector } from 'react-redux';
import EachExpense from './EachExpense'
import { useEffect,  useState } from 'react';
import {setMonthlyDetail,setAllExpencesToShow} from '../Store/ExternalSlice'
function MonthlyTransection() {
    //Monthly expense component
    const {allExpences,monthlyDetail}=useSelector(state=>state.externalData);
    const dispatch=useDispatch();
    const [monthYear,setMonthYear]=useState({year:2024,month:"All"});
    useEffect(() => {
        handleChange()
    }, [allExpences.length, monthYear.month, monthYear.year]);
    function handleChange(){
               let Income=0;
               let Expense=0;
               let Shopping=0;
               let Food=0;
               let Travel=0;
               //Total for a year
               if(monthYear.month==="All")
               {
                console.log("In if",allExpences)
                const filteredData= allExpences.filter(item => {
                    const time=new Date(item.createdAt)
                    
                    // const monthh=time.getMonth()+1  ;
                      const yearr=time.getFullYear();
                      if(Number(monthYear.year)===yearr)
                        {
                            
                           if(item.category[0]==="Expense") 
                           {
                               Expense+=item.amount;
                               if(item.category[1]==="Shopping") Shopping+=item.amount;
                               else if(item.category[1]==="Food") Food+=item.amount;
                               else Travel+=item.amount
                           }
                           else if(item.category[0]==="Income") Income+=item.amount;
                           return item
                        }
                       
                 });
                 dispatch(setAllExpencesToShow(filteredData))
               }
               else
               {
                const filteredData=allExpences.filter(item=>{
                    const time=new Date(item.createdAt)
                     const monthh=time.getMonth()+1  ;
                     const yearr=time.getFullYear();
                     console.log(monthh,yearr)
                       
                     if(Number(monthYear.month)===monthh && Number(monthYear.year)===yearr)
                     {
                        if(item.category[0]==="Expense") 
                        {
                            Expense+=item.amount;
                            if(item.category[1]==="Shopping") Shopping+=item.amount;
                            else if(item.category[1]==="Food") Food+=item.amount;
                            else Travel+=item.amount
                        }
                        else if(item.category[0]==="Income") Income+=item.amount;
                        return item
                     }
                                      
                   })
                   dispatch(setAllExpencesToShow(filteredData))
               }
               //Filter by month and year
            dispatch(setMonthlyDetail([
                { text: "Expense", amount: Expense, bg: "bg-red100",bgColor:"#fd3c4a",category:[{text:"Shopping",amount:Shopping,bg: "bg-red100",bgColor:"#fd3c4a"},{text:"Travel",amount:Travel,bg: "bg-green-900",bgColor:"#00a86b"},{text:"Food",amount:Food,bg: "bg-voilet100",bgColor:"#7f3dff"}] },
                { text: "Income", amount: Income, bg: "bg-green-900",bgColor:"#00a86b" },
                { text: "Balance", amount: Income-Expense, bg: "bg-voilet100",bgColor:"#7f3dff" },
            ]))
            
    }
  return (
    <div className="Total2">
                        <div className='text-center'>
                            <select onChange={(e)=>{setMonthYear(pre=>({...pre,year:e.target.value}))}}  name="" id="" className='mx-2 bg-voilet20  rounded-2xl text-2xl hover:bg-voilet100 px-6  hover:text-white py-1  text-voilet100 outline-none'>
                                <option value="2024">2024</option>
                                <option value="2023">2023</option>
                                <option value="2022">2020</option>
                                <option value="2021">2021</option>
                                
                            </select>
                            <select onChange={(e)=>{setMonthYear(pre=>({...pre,month:e.target.value}))}}  name="" id="" className='bg-voilet20  rounded-2xl text-2xl hover:bg-voilet100 px-6  hover:text-white py-1  text-voilet100 outline-none' >
                                <option value="All">All</option>
                                <option value="1">January</option>
                                <option value="2">February</option>
                                <option value="3">March</option>
                                <option value="4">April</option>
                                <option value="5">May</option>
                                <option value="6">June</option>
                                <option value="7">July</option>
                                <option value="8">August</option>
                                <option value="9">September</option>
                                <option value="10">October</option>
                                <option value="11">November</option>
                                <option value="12">December</option>
                            </select>
                        </div>
                        <div className='flex  flex-wrap justify-around allExpenseDiv'>
                            {monthlyDetail.map((item, index) => <EachExpense key={index} bg={item.bg} amount={item.amount} text={item.text} />)}

                        </div>
                    </div>
  )
}

export default MonthlyTransection
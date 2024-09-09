import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import MonthlyDetail from './MonthlyDetail'
import EachExpense from './EachExpense'
import AllItemsAndFilters from './AllItemsAndFilters';
import { useSelector,useDispatch  } from 'react-redux';
import {user} from '../Store/ExternalSlice'
function MonthlyTransection() {
    const {monthlyDetail,user:{fullName}}=useSelector(state=>state.externalData);
    //Piechart for Month
    const chartData = {
        labels: monthlyDetail.map(item => item.text),
        datasets: [
            {
                data: monthlyDetail.map(item => item.amount),
                backgroundColor: monthlyDetail.map(item => item.bgColor)
            }
        ]
    };

    //Piechart for category
    const categoryData = {
        labels: monthlyDetail[0]?.category?.map(item => item.text),
        datasets: [
            {
                data: monthlyDetail[0]?.category?.map(item => item.amount),
                backgroundColor: monthlyDetail[0]?.category?.map(item => item.bgColor)
            }
        ]
    };
    const dispatch=useDispatch();
    const logOutUser=()=>
    {
        try {
            localStorage.removeItem("financeUser");
            dispatch(user(null))
        } catch (error) {
            console.log("User deleted")
        }
    }
    return (
        <div className='    '>
            
           <div className='text-end mx-5 mt-3'>
           <button onClick={logOutUser} className='bg-voilet20 mx-2  rounded-2xl text-2xl hover:bg-voilet100 px-6 mt-2 hover:text-white py-1  text-voilet100'>Logout</button>
           </div>
                    
                            <div >
                                <h1 className='text-center text-2xl font-medium'>Welcome {fullName}</h1>
                                <div className='flex justify-around  box-border px-4 totalDivMT'>
                                    <div className='flex flex-col mt-4 '>
                                        <MonthlyDetail />
                                        <div className='max-w-96 mx-auto'>
                                            <h2 className='bg-voilet20 mb-4 text-center w-40 mx-auto  rounded-2xl text-2xl  px-6   py-1  text-voilet100 '>Pie Chart</h2>
                                            <Pie data={chartData} />
                                        </div>
                                    </div>
                                    <div className='flex flex-col  mt-4  border-gray-400'>
                                        <div className=''>
                                            <h1 className='bg-voilet20 text-center w-40 mx-auto  rounded-2xl text-2xl  px-6   py-1  text-voilet100 '>Category</h1>
                                            <div className='flex flex-wrap  w-full mx-auto justify-around monthlyTransectionEachExpense'>
                                                {monthlyDetail[0]?.category?.map(item => <EachExpense key={item.id} bg={item.bg} amount={item.amount} text={item.text} />)}
                                            </div>
                                        </div>
                                        <div className='max-w-96 mx-auto'>
                                            <h2 className='bg-voilet20 mb-4 text-center w-40 mx-auto  rounded-2xl text-2xl  px-6   py-1  text-voilet100 '>Pie Chart</h2>
                                            <Pie data={categoryData} />
                                        </div>

                                    </div>
                                </div>
                    

                        <AllItemsAndFilters />
            </div>
        </div>
    )
}

export default MonthlyTransection
import IMG from '../Images/Home.png'
function EachExpense({ bg, img, amount, text }) {
    //Income Expend and Balance Component
    return (
        <div className={` items-center m-2 text-white  flex p-2 rounded-md ${bg}`}>
            <img src={IMG} alt="" className='w-8 h-8' />
            <div className='flex ml-2 flex-col'>
                <span>{text}</span>
                <h1 className='font-bold'>Rs {amount}</h1>
            </div>
        </div>
    )
}

export default EachExpense;
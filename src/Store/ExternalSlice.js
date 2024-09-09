import {createSlice} from '@reduxjs/toolkit'
import {data} from '../Data'
const ExternalSlice=createSlice({
    name:"ExternalSlice",
    initialState:{user:JSON.parse(localStorage.getItem("financeUser"))||null,pageNo:0 ,allExpences:[],allExpencesToSHow:[],lengthOfFilteredData:0,monthlyDetail:data},
    reducers:{
        user:(state,action)=>{
            state.user=action.payload
        },
        setPageNo:(state,action)=>{
            state.pageNo=action.payload
        },
        setAllExpences:(state,action)=>{
            state.allExpences=action.payload;
            state.allExpencesToSHow=action.payload
        },
        setLengthOfFilteredData:(state,action)=>{
            state.lengthOfFilteredData=action.payload
        },
        setAllExpencesToShow:(state,action)=>{
           state.allExpencesToSHow=action.payload
        },
    
        setSingleExpense:(state,action)=>{
            state.allExpences=[action.payload,...state.allExpences]
        },
        setMonthlyDetail:(state,action)=>{
            state.monthlyDetail=action.payload
        }
    }
})

export const {user,setPageNo,setAllExpences,setLengthOfFilteredData,setTotal,setSingleExpense,setMonthlyDetail,setAllExpencesToShow}=ExternalSlice.actions;
export default ExternalSlice.reducer;
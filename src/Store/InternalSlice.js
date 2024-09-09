import {createSlice} from '@reduxjs/toolkit';

const InternalSlice=createSlice({
    name:"InternalSlice",
    initialState:{showHide:true,filterShow:false,filterShowForMT:false,addExpense:false,ext:false,shortBy:false,category:false},
    reducers:{
        setShowHide:(state)=>{
            state.showHide=!state.showHide
        },
        setFilterShow:(state,action)=>{
            state.filterShow=action.payload
        },
        setFilterShowForMT:(state)=>{
            state.filterShowForMT=!state.filterShowForMT
        },
        setAddExpense:(state,action)=>{
            state.addExpense=action.payload
        },
        setExt:(state,action)=>{
            if(action.payload===state.ext)
            {
                state.ext=null;
                return;
            }
            state.ext=action.payload
        },
        setShortBy:(state,action)=>{
            if(action.payload===state.shortBy)
            {
                state.shortBy=null;
                return;
            }
            state.shortBy=action.payload
        },
        setCategory:(state,action)=>{
            if(state.category===action.payload) return;
            state.category=action.payload
        },
        setReset:(state)=>{
            state.ext = false;
            state.category = "All";
            state.shortBy = false;
            
        }
        

    }
});

export const {setShowHide,setFilterShow,setFilterShowForMT,setAddExpense,setCategory,setExt,setShortBy,setReset}=InternalSlice.actions;
export default InternalSlice.reducer;
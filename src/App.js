// React and third-party imports
import  { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

// Component imports

import FirstPage from './Components/FirstPage';
import SignUpPage from './Components/SignUpPage';
import Login from './Components/Login';
import MonthlyTransection from './Components/Monthly Transection';

// Store imports
import { setAllExpences } from './Store/ExternalSlice';

// CSS import
import './App.css';

function App() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.externalData);
  const dispatch = useDispatch();

  // Fetching all expenses only when we have a user
  useEffect(() => {
    if (user) {
      const fetchExpenses = async () => {
        try {
          const allExpenses = await axios.post('https://sample-worknode.vercel.app/expense/allExpense', {
            userId: user._id,
          });
          dispatch(setAllExpences(allExpenses.data));
        } catch (error) {
          console.log('Error in fetching Expenses');
        }
      };
      fetchExpenses();
    } else {
      navigate('/');
    }
  }, [user]);
// console.log("User is ",user)
  return (
    <Routes>
      {/* <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
      <Route path="/splitwise" element={<SplitWiseHome />} /> */}
      <Route path="/" element={user ? <Navigate to="/home" /> : <FirstPage />} />
      <Route path="/login" element={user ? <Navigate to="/home" /> : <Login />} />
      <Route path="/signup" element={user ? <Navigate to="/home" /> : <SignUpPage />} />
      <Route path="/home" element={user?<MonthlyTransection />:<Navigate to={'/'}/>} />
    </Routes>
  );
}

export default App;

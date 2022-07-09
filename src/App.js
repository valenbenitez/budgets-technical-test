import './App.css';
import AddressForm from './components/FormCreate';
import DashboardBudgets from './components/Dashboard';
import SignInSide from './components/FormAuth';
import { Route, Routes } from 'react-router-dom'
import DenseAppBar from './components/AppBar';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignInSide />} />
        <Route exact path='/create' element={<AddressForm />} />
        <Route exact path='/budget' element={<DashboardBudgets />} />
        <Route path='*' element={<SignInSide />} />
      </Routes>
    </>
  );
}

export default App;

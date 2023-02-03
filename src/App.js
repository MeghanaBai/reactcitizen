import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Citizen from './components/Citizen';
import Applylic from './components/Applylic';
import Applypre from './components/Applypre';
import Applyreg from './components/Applyreg';
import Viewlic from './components/Viewlic';
import Viewpre from './components/Viewpre';
import Viewreg from './components/Viewreg';
import Viewdetailspre from './components/Viewdetailspre';
import Viewdetailsreg from './components/Viewdetailsreg';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='Citizen' element={<Citizen />}></Route>
      <Route path='Applylic' element={<Applylic />}></Route>
      <Route path='Applypre' element={<Applypre />}></Route>
      <Route path='Applyreg' element={<Applyreg />}></Route>
      <Route path='Viewlic' element={<Viewlic />}></Route>
      <Route path='Viewpre' element={<Viewpre />}></Route>
      <Route path='Viewreg' element={<Viewreg />}></Route>
      <Route path='Viewdetailspre' element={<Viewdetailspre />}></Route>
      <Route path='Viewdetailsreg' element={<Viewdetailsreg />}></Route>
    </Routes>
     
    </>
  );
}

export default App;

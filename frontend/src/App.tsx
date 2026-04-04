import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home/HomePage';
import Topbar from './components/Topbar';

function App() {

  const getData = async ()=>{
    try {
      // const response = await fetch('http://localhost:5000/api');
      // const data = await response.json();
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getData();
  }, []);

  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App;
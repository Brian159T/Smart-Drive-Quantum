import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Quienes from './Pages/Quienes';
import Calculadora from './Pages/Calculadora';
import ComoFunciona from './Pages/Comofunciona';
import Contactos from './Pages/Contactos';
import Empresa from './Pages/Empresa';
import Vehiculos from './Pages/Vehiculos';

import Alquiler from './Pages/Alquiler';


const App = () => {
  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme? current_theme :'light');

  useEffect(()=>{
    localStorage.setItem('current_theme',theme);



  },[theme])

  return (
    <div className={`container ${theme}`}>

      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path='/' element={<Quienes />} />
        <Route path='/Alquiler' element={<Alquiler />} />
        <Route path='/Calculadora' element={<Calculadora />} />
        <Route path='/ComoFunciona' element={<ComoFunciona />} />
        <Route path='/Contactos' element={<Contactos />} />
        <Route path='/Empresa' element={<Empresa />} />
        <Route path='/Vehiculos' element={<Vehiculos />} />
      
      </Routes>
     

    </div>
    
    
  );
};

export default App;
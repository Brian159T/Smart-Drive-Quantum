import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Quienes from './Pages/Quienes';
import Calculadora from './Pages/Calculadora';
import ComoFunciona from './Pages/Comofunciona';
import Contactos from './Pages/Contactos';
import Empresa from './Pages/Empresa';
import Vehiculos from './Pages/Vehiculos';
import Alquilermpv from './Pages/Alquilermpv';
import Alquilernexus from './Pages/Alquilernexus';
import Alquilertrooper from './Pages/Alquilertrooper';
import Alquilermate from './Pages/Alquilermate';
import Alquiler from './Pages/Alquiler';

const App = () => {

  return (
    <div className="container">

      <Navbar />

      <Routes>
        <Route path='/' element={<Quienes />} />
        <Route path='/Alquiler' element={<Alquiler />} />
        <Route path='/Alquiler/Nexus' element={<Alquilernexus />} />
        <Route path='/Alquiler/Trooper' element={<Alquilertrooper />} />
        <Route path='/Alquiler/MPV' element={<Alquilermpv />} />
        <Route path='/Alquiler/Mate' element={<Alquilermate />} />
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
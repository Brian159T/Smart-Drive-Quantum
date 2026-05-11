import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Quienes from './Pages/Quienes';
import Calculadora from './Pages/Calculadora';
import ComoFunciona from './Pages/Comofunciona';
import Contactos from './Pages/Contactos';

import Vehiculos from './Pages/Vehiculos';
import Alquilermpv from './Pages/Alquilermpv';
import Alquilernexus from './Pages/Alquilernexus';
import Alquilertrooper from './Pages/Alquilertrooper';
import Alquilermate from './Pages/Alquilermate';
import Alquiler from './Pages/Alquiler';
import Alquilerurban from './Pages/Alquilerurban';
import ScrollToTop from './Components/ScrollToTop';
import Inversiones from './Pages/Inversiones';
import Estaciones from './Pages/Estaciones';
import Noticias from './Pages/Noticias';

const App = () => {

  return (
    <div className="container">

      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path='/' element={<Quienes />} />
        <Route path='/Alquiler' element={<Alquiler />} />
        <Route path='/Alquiler/Nexus' element={<Alquilernexus />} />
        <Route path='/Alquiler/Trooper' element={<Alquilertrooper />} />
        <Route path='/Alquiler/MPV' element={<Alquilermpv />} />
        <Route path='/Alquiler/Mate' element={<Alquilermate />} />
        <Route path='/Alquiler/Urban' element={<Alquilerurban/>} />
        <Route path='/Calculadora' element={<Calculadora />} />
        <Route path='/ComoFunciona' element={<ComoFunciona />} />
        <Route path='/Contactos' element={<Contactos />} />
        <Route path='/Vehiculos' element={<Vehiculos />} />
        <Route path='/Inversiones' element={<Inversiones/>} />
        <Route path='/Estaciones' element={<Estaciones/>} />
        <Route path='/Noticias' element={<Noticias/>} />
      </Routes>

    </div>
  );
};

export default App;
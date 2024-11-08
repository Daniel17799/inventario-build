import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Vista_lateral';
import Categorias from './Components/Categorias';
import Productos from './Components/Productos';
import Ventas from './Components/Ventas';
import Ventaslista from './Components/Ventaslista';
import Footer from './Components/Footer';
import VideoPlayer from './Components/Video';


const App = () => {
    return (
        <Router>
            <Sidebar />
            <div className="main-content">
                <Routes>
                    <Route path="/productos" element={<><Ventas /><Productos /></>} />
                    <Route path="/categorias" element={<Categorias />} />
                    <Route path="/ventaslista" element={<Ventaslista />} />
                    <Route 
                      path="/video" 
                      element={<VideoPlayer videoSrc={process.env.PUBLIC_URL + '/video/InventarioVideo.mp4'} videoTitle="Funcionalidad Inventario" />} 
                    />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;

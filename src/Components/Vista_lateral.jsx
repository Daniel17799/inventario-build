import React from 'react';
import { Link } from 'react-router-dom';
import "../Style/Sidebar.css";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2 className='titulo'>Administrador</h2>
      <ul className='lista-general'>
        <li className='lista-lateral'>
          <Link to="/productos">Productos</Link>
        </li>
        <li className='lista-lateral'>
          <Link to="/categorias">Categorías</Link>
        </li>
        <li className='lista-lateral'>
          <Link to="/ventaslista">Ventas</Link>
        </li>
        <li className='lista-lateral'>
          <Link to="/video">Ver Video</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

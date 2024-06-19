import React from 'react';

const Sidebar = () => {
  // Lógica para determinar qué elementos mostrar según el perfil de usuario (simulado)
  const perfil = sessionStorage.getItem("perfil");

  // Función para renderizar los elementos del menú según el perfil
  const renderMenuItems = () => {
    if (perfil === "Administrador") {
      return (
        <>
          <li className="active">
            <a href="inicio">
              <i className="fa fa-home"></i>
              <span>Inicio</span>
            </a>
          </li>
          <li>
            <a href="usuarios">
              <i className="fa fa-user"></i>
              <span>Usuarios</span>
            </a>
          </li>
        </>
      );
    }

    if (perfil === "Administrador" || perfil === "Especial") {
      return (
        <>
          <li>
            <a href="categorias">
              <i className="fa fa-money"></i>
              <span>Tarifas</span>
            </a>
          </li>
          <li>
            <a href="productos">
              <i className="fa fa-indent"></i>
              <span>Ingresos</span>
            </a>
          </li>
          <li>
            <a href="salidas">
              <i className="fa fa-sign-out"></i>
              <span>Salidas</span>
            </a>
          </li>
        </>
      );
    }

    if (perfil === "Administrador" || perfil === "Vendedor") {
      return (
        <li>
          <a href="clientes">
            <i className="fa fa-users"></i>
            <span>Abonados</span>
          </a>
        </li>
      );
    }

    // Caso para Vendedor específicamente
    if (perfil === "Administrador" || perfil === "Vendedor") {
      return (
        <>
          <li>
            <a href="cajas">
              <i className="fa fa-cart-plus"></i>
              <span>Caja</span>
            </a>
          </li>
          <li>
            <a href="crear-venta">
              <i className="fa fa-usd"></i>
              <span>Pagos</span>
            </a>
          </li>
          {perfil === "Administrador" && (
            <li>
              <a href="reportes">
                <i className="fa fa-line-chart"></i>
                <span>Reporte de ventas</span>
              </a>
            </li>
          )}
        </>
      );
    }

    return null; // Retorna null si el perfil no coincide con ninguno de los casos anteriores
  };

  return (
    <aside className="main-sidebar" style={{ position: 'absolute', top: 0, left: 0, width: '232px', paddingTop: '78px', minHeight: '100%', backgroundColor: '#000000', borderRight: '2px solid #e3aa00' }}>
      <section className="sidebar">
        <ul className="sidebar-menu">
          {renderMenuItems()}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;

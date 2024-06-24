import React from 'react';

const Sidebar = () => {
  // Recuperar y parsear la sesión desde localStorage
  const sesionString = localStorage.getItem("session");
  const sesion = sesionString ? JSON.parse(sesionString) : null;

  if (!sesion || !sesion.user) {
    console.error("No se encontró la sesión o el usuario en localStorage");
    return null; // Retorna null si no se encuentra la sesión
  }

  console.log('Perfil del usuario:', sesion.user.perfil);

  // Función para renderizar los elementos del menú según el sesion.user.perfil
  const renderMenuItems = () => {
    const perfil = sesion.user.perfil;

    let menuItems = [];

    // Menú común para "Administrador"
    if (perfil === "Administrador") {
      menuItems.push(
        <li className="active" key="inicio">
          <a href="inicio">
            <i className="fa fa-home"></i>
            <span>Inicio</span>
          </a>
        </li>,
        <li key="usuarios">
          <a href="usuarios">
            <i className="fa fa-user"></i>
            <span>Usuarios</span>
          </a>
        </li>
      );
    }

    // Menú común para "Administrador" y "Especial"
    if (perfil === "Administrador" || perfil === "Especial") {
      menuItems.push(
        <li key="categorias">
          <a href="categorias">
            <i className="fa fa-money"></i>
            <span>Tarifas</span>
          </a>
        </li>,
        <li key="productos">
          <a href="productos">
            <i className="fa fa-indent"></i>
            <span>Ingresos</span>
          </a>
        </li>,
        <li key="salidas">
          <a href="salidas">
            <i className="fa fa-sign-out"></i>
            <span>Salidas</span>
          </a>
        </li>
      );
    }

    // Menú común para "Administrador" y "Vendedor"
    if (perfil === "Administrador" || perfil === "Vendedor") {
      menuItems.push(
        <li key="clientes">
          <a href="clientes">
            <i className="fa fa-users"></i>
            <span>Abonados</span>
          </a>
        </li>
      );
    }

    // Menú específico para "Administrador" y "Vendedor"
    if (perfil === "Administrador" || perfil === "Vendedor") {
      menuItems.push(
        <li key="cajas">
          <a href="cajas">
            <i className="fa fa-cart-plus"></i>
            <span>Caja</span>
          </a>
        </li>,
        <li key="crear-venta">
          <a href="crear-venta">
            <i className="fa fa-usd"></i>
            <span>Pagos</span>
          </a>
        </li>
      );

      if (perfil === "Administrador") {
        menuItems.push(
          <li key="reportes">
            <a href="reportes">
              <i className="fa fa-line-chart"></i>
              <span>Reporte de ventas</span>
            </a>
          </li>
        );
      }
    }

    return menuItems;
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

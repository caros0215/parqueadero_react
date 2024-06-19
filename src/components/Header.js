import React from 'react';

const Header = () => {
  return (
    <header className="main-header">
      {/* LOGOTIPO */}
      <a href="inicio" className="logo" style={{ paddingBottom: '6%', backgroundColor: '#000000', borderBottom: '2px solid #e3aa00' }}>
        {/* logo mini */}
        <span className="logo-mini" style={{ paddingBottom: '0%' }}>
          <img src="../assets/plantilla/logo11.png" className="img-responsive" style={{ padding: '8px', marginTop: '15%' }} alt="Logo Mini" />
        </span>
        {/* logo normal */}
        <span className="logo-lg" style={{ paddingBottom: '6%' }}>
          <img src="../assets/plantilla/logo_final_2.png" style={{ display: 'block', maxWidth: '88%', height: 'auto', marginTop: '1%' }} alt="Logo Normal" />
        </span>
      </a>

      {/* BARRA DE NAVEGACIÓN */}
      <nav className="navbar navbar-static-top" role="navigation" style={{ backgroundColor: '#000000', borderBottom: '2px solid #e3aa00', borderLeft: '2px solid #e3aa00' }}>
        {/* Botón de navegación */}
        <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
          <span className="sr-only">Toggle navigation</span>
        </a>

        {/* perfil de usuario */}
        <div className="navbar-custom-menu">
          <ul className="nav navbar-nav">
            <li className="dropdown user user-menu">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" style={{ marginTop: '10%', zoom: '113%' }}>
                {/* Imagen de usuario */}
                { /* Puedes manejar la lógica de la imagen de usuario en React utilizando el estado y props, o si estás usando sesión en el backend */}
                <img src={sessionStorage.getItem("foto") !== "" ? sessionStorage.getItem("foto") : 'vistas/img/usuarios/default/anonymous.png'} className="user-image" alt="Imagen de Usuario" />
                <span className="hidden-xs">{sessionStorage.getItem("nombre")}</span>
              </a>
              {/* Dropdown-toggle */}
              <ul className="dropdown-menu">
                <li className="user-body">
                  <div className="pull-right">
                    <a href="salir" className="btn btn-default btn-flat">Salir</a>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;

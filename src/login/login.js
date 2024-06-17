import React from 'react';
import './login.css';

function Login() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Aquí iría la lógica de login, similar a la función ctrIngresoUsuario en tu código PHP
    console.log("Login submitted");
  };

  return (
    <div id="back">
      <div className="login-box">
        <div className="login-box-body" style={{ borderRadius: '21px' }}>
          <div className="login-logo">
            <img
              src="vistas/img/plantilla/logo_final_2.png"
              className="img-responsive"
              style={{ padding: '1px 30px 0px 30px' }}
              alt="Logo"
            />
          </div>
          <p className="login-box-msg">Ingresar al sistema</p>
          <form onSubmit={handleLogin}>
            <div className="form-group has-feedback">
              <input
                type="text"
                className="form-control"
                placeholder="Usuario"
                name="ingUsuario"
                required
              />
              <span className="glyphicon glyphicon-user form-control-feedback"></span>
            </div>
            <div className="form-group has-feedback">
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                name="ingPassword"
                required
              />
              <span className="glyphicon glyphicon-lock form-control-feedback"></span>
            </div>
            <div className="row">
              <div className="col-xs-4">
                <button type="submit" className="btn btn-primary btn-block btn-flat">Ingresar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

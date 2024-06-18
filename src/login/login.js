import React, { useState } from 'react';
import '../assets/css/adminlte.css';
import './login.css';
import Img from "../assets/plantilla/logo_final_2.png";
import Img2 from "../assets/plantilla/parqueadero.jpeg";
import { Image } from "react-bootstrap";

const LoginForm = () => {
    const [ingUsuario, setIngUsuario] = useState('');
    const [ingPassword, setIngPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here (e.g., API call, validation)
        console.log('Username:', ingUsuario);
        console.log('Password:', ingPassword);
    };

    return (
        <div id="back" className="banner">
       
       {/* <Image src={Img2} className="banner"   /> */}
            <div className="login-box">
            
                <div className="login-box-body" style={{ borderRadius: '21px' }}>
                    <div className="login-logo">
                        <Image src={Img}  className="img-responsive" style={{ padding: '1px 30px 0px 30px' }}  />
                    </div>
                    <p className="login-box-msg" style={{ fontFamily: 'Anton, sans-serif', color:'white',marginTop: '31%' }}>Ingresar al sistema</p>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group has-feedback">
                            <input type="text" className="form-control" style={{ fontFamily: 'Anton, sans-serif', }} placeholder="Usuario" name="ingUsuario" value={ingUsuario} onChange={(e) => setIngUsuario(e.target.value)} required />
                            <span className="fas fa-user form-control-feedback"></span>
                        </div>
                        <div className="form-group has-feedback">
                            <input type="password" className="form-control" style={{ fontFamily: 'Anton, sans-serif' }} placeholder="Contraseña" name="ingPassword" value={ingPassword} onChange={(e) => setIngPassword(e.target.value)} required />
                            <span className="fas fa-lock form-control-feedback2"></span>
                        </div>
                        <div className="row" style={{ alignItems: 'center',justifyContent: 'center', marginTop:'11%' }}>
                            <div className="col-xs-4">
                                <button type="submit" style={{ fontFamily: 'Anton, sans-serif' }} className="btn btn-primary btn-block btn-flat">Ingresar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    );
};

export default LoginForm;

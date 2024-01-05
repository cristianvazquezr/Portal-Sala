import "./Portada.css"

function Portada(){


    return(
        <>

        <div className="portada">
            {/* <div className="encabezadoPortada">
                Portal sala de bebidas
            </div> */}
            <div className="bodyPortada">
                <div className="message">
                    <h1>BIENVENIDO AL PORTAL DE SALA DE BEBIDA</h1>
                </div>
                <div className="loginContenedor" >
                    <div className="login">
                        <div className="tituloLogin">
                            <h5>Inicio de sesión / Registro</h5>
                            <hr />
                        </div>
                        <form className="formLogin" action="">
                            <div className="inputForm">
                                <label for="usuario">Legajo</label>            
                                <input className="form-control inputLogin" type="text" id="usuario" defaultValue='usuario'/>
                                <label for="password">Contraseña </label>            
                                <input className="form-control inputLogin" type="password" id="password" defaultValue='password'/>
                            </div>
                            <div>
                                <h6>Olvide mi contraseña</h6>
                            </div>
                            <div className="buttonForm">
                                <button type="submit" class="btn btn-dark">Iniciar sesión</button>
                                <button type="submit" class="btn btn-dark">Registrarme</button>
                            </div>
                                
                        </form>
                    </div>
                </div>
            </div>
            

        </div>
       
        
        </>
    )
}

export default Portada
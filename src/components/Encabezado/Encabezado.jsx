import IconUser from '../Icons/IconUser'
import './Encabezado.css'

function Encabezado(){
    return(
        <>
        <div className='encabezado sticky-top'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light  navbarSala">
                <div class="container-fluid">
                    <a class="navbar-brand anchorNavBar" href="#"><img className="logoNavBar" src="./src/components/Images/logo.png" alt="logo" /></a>
                    <div className='user-menu'>
                        <div class="dropdown">
                            <span className="btn btn-danger nameUser">Cristian Vazquez</span>
                            <button class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                
                                <IconUser></IconUser>
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="./">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./PedidoProduccion">Planificación</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="./Produccion">Producción</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" role="button" id="dropdownMenuCamarista" data-bs-toggle="dropdown" aria-expanded="false">Camarista</a>
                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuCamarista">
                                        <li><a class="dropdown-item" href="./Ingresos">Ingresos</a></li>
                                        <li><a class="dropdown-item" href="./Cargas">Cargas</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        
        
        </>
    )
}

export default Encabezado
import Encabezado from '../Encabezado/Encabezado'
import IconDelete from '../Icons/IconDelete'
import IconEdit from '../Icons/IconEdit'
import './Produccion.css' 

function Produccion(){
    return(
        <>
            <Encabezado></Encabezado>
            <div className='bodyProduccion'>
                <div className='produccion'>
                    <div className='tituloProd'>
                        <h1>Solicitud de elaboraciones</h1>
                        <h4>Generar las cargas a producir de los distintos sabores</h4>
                    </div>
                    <div className='formProduccion'>
                        <div class="row rowProd">
                            <div class="col-4">
                                <div class="list-group" data-bs-theme="dark" id="list-tab" role="tablist">
                                <a class="list-group-item list-group-item-action active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
                                    <div className='itemProd'>
                                        <span>01/01/2024</span>
                                        <span>coca cola</span>
                                        <span>894</span>
                                    </div>
                                </a>
                                <a class="list-group-item list-group-item-action" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">
                                    <div className='itemProd'>
                                        <span>01/01/2024</span>
                                        <span>Sprite</span>
                                        <span>280</span>
                                    </div>
                                </a>
                                <a class="list-group-item list-group-item-action" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">
                                    <div className='itemProd'>
                                        <span>01/01/2024</span>
                                        <span>Coca Cola SA</span>
                                        <span>320</span>
                                    </div>
                                </a>
                                <a class="list-group-item list-group-item-action" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">
                                    <div className='itemProd'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                                </div>
                            </div>
                            <div class="col-5 contFormElab">
                                <div class="tab-content formElab" id="nav-tabContent">
                                    <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">
                                        <form className="formElaboraciones" action="">
                                            <div className="inputForm">
                                                <div className='itemForm'>
                                                    <label for="unidades">Unidades</label>            
                                                    <input className="form-control inputLogin" type="number" id="unidades" defaultValue='Unidades'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="tanque">Tanque</label>            
                                                    <input className="form-control inputLogin" type="number" id="tanque" defaultValue='Tanque'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="disolutor">Disolutor</label>            
                                                    <input className="form-control inputLogin" type="number" id="disolutor" defaultValue='Disolutor'/> 
                                                </div>
                                            </div>
                                            <div className="buttonForm">
                                                <button type="submit" class="btn btn-dark">Crear</button>
                                            </div>
                                        </form>  
                                    </div>
                                    <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">
                                        <form className="formElaboraciones" action="">
                                            <div className="inputForm">
                                                <div className='itemForm'>
                                                    <label for="unidades">Unidades</label>            
                                                    <input className="form-control inputLogin" type="number" id="unidades" defaultValue='Unidades'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="tanque">Tanque</label>            
                                                    <input className="form-control inputLogin" type="number" id="tanque" defaultValue='Tanque'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="disolutor">Disolutor</label>            
                                                    <input className="form-control inputLogin" type="number" id="disolutor" defaultValue='Disolutor'/> 
                                                </div>
                                            </div>
                                            <div className="buttonForm">
                                                <button type="submit" class="btn btn-dark">Crear</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">
                                        <form className="formElaboraciones" action="">
                                            <div className="inputForm">
                                                <div className='itemForm'>
                                                    <label for="unidades">Unidades</label>            
                                                    <input className="form-control inputLogin" type="number" id="unidades" defaultValue='Unidades'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="tanque">Tanque</label>            
                                                    <input className="form-control inputLogin" type="number" id="tanque" defaultValue='Tanque'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="disolutor">Disolutor</label>            
                                                    <input className="form-control inputLogin" type="number" id="disolutor" defaultValue='Disolutor'/> 
                                                </div>
                                            </div>
                                            <div className="buttonForm">
                                                <button type="submit" class="btn btn-dark">Crear</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">
                                        <form className="formElaboraciones" action="">
                                            <div className="inputForm">
                                                <div className='itemForm'>
                                                    <label for="unidades">Unidades</label>            
                                                    <input className="form-control inputLogin" type="number" id="unidades" defaultValue='Unidades'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="tanque">Tanque</label>            
                                                    <input className="form-control inputLogin" type="number" id="tanque" defaultValue='Tanque'/> 
                                                </div>
                                                <div className='itemForm'>
                                                    <label for="disolutor">Disolutor</label>            
                                                    <input className="form-control inputLogin" type="number" id="disolutor" defaultValue='Disolutor'/> 
                                                </div>
                                            </div>
                                            <div className="buttonForm">
                                                <button type="submit" class="btn btn-dark">Crear</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lineaDivisora'> <hr /> </div>
                    <div className='elaboracionesParciales'>
                        <div className='TablaDatos'>
                            <table class="table table-secondary table-striped table-hover">
                                <thead>
                                    <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">FECHA</th>
                                    <th scope="col">SCADISTA</th>
                                    <th scope="col">SABOR</th>
                                    <th scope="col">CANTIDAD</th>
                                    <th scope="col">TANQUE</th>
                                    <th scope="col">DISOLUTOR</th>
                                    <th scope="col">ELABORADOR</th>
                                    <th scope="col">SAP</th>
                                    <th scope="col">ACIDEZ</th>
                                    <th scope="col">BRIX</th>
                                    <th scope="col">RENDIMIENTO</th>
                                    <th scope="col">ELIMINAR</th>
                                    <th scope="col">EDITAR</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>01/03/2024</td>
                                        <td>Roberto</td>
                                        <td>COCA COLA</td>
                                        <td>447</td>
                                        <td>-</td>
                                        <td>-</td>
                                        <td>CWC</td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#SAP" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="SAP" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR SAP</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div >
                                                            <label htmlFor="sap">SAP</label>
                                                            <input id='sap' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#ACIDEZ" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="ACIDEZ" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR ACIDEZ Y BRIX</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div>
                                                            <label htmlFor="acidez">ACIDEZ</label>
                                                            <input id='acidez' type="text" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="brix">BRIX</label>
                                                            <input id='brix' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#BRIX" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="BRIX" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR ACIDEZ Y BRIX</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div>
                                                            <label htmlFor="acidez">ACIDEZ</label>
                                                            <input id='acidez' type="text" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="brix">BRIX</label>
                                                            <input id='brix' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#RENDIMIENTO" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="RENDIMIENTO" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR RENDIMIENTO</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div>
                                                            <label htmlFor="brix">RENDIMIENTO</label>
                                                            <input id='brix' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td><IconDelete></IconDelete></td>
                                        <td><IconEdit></IconEdit></td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>01/03/2024</td>
                                        <td>Marcelo</td>
                                        <td>SPRITE</td>
                                        <td>320</td>
                                        <td>55</td>
                                        <td>2</td>
                                        <td>CWC</td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#SAP" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="SAP" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR SAP</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div >
                                                            <label htmlFor="sap">SAP</label>
                                                            <input id='sap' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#ACIDEZ" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="ACIDEZ" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR ACIDEZ Y BRIX</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div>
                                                            <label htmlFor="acidez">ACIDEZ</label>
                                                            <input id='acidez' type="text" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="brix">BRIX</label>
                                                            <input id='brix' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#BRIX" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="BRIX" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR ACIDEZ Y BRIX</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div>
                                                            <label htmlFor="acidez">ACIDEZ</label>
                                                            <input id='acidez' type="text" />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="brix">BRIX</label>
                                                            <input id='brix' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#RENDIMIENTO" aria-controls="offcanvasExample">CARGAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="RENDIMIENTO" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGAR RENDIMIENTO</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div>
                                                            <label htmlFor="brix">RENDIMIENTO</label>
                                                            <input id='brix' type="text" />
                                                        </div>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td><IconDelete></IconDelete></td>
                                        <td><IconEdit></IconEdit></td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>


            </div>
        
        </>
    )
}

export default Produccion
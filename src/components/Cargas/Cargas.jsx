import { useState } from 'react'
import Encabezado from '../Encabezado/Encabezado'
import IconDelete from '../Icons/IconDelete'
import './Cargas.css'
import BarcodeScannerComponent from "react-qr-barcode-scanner";



function Cargas(){

    const [data,setData]=useState('not found')

    return(
        <>
            <Encabezado></Encabezado>
            <div className='bodyProduccion'>
                <div className='produccion'>
                    <div className='tituloProd'>
                        <h1>Preparación de cargas</h1>
                        <h4>Preparar las cargas a producir de los distintos sabores</h4>
                    </div>
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
                                    <th scope="col">PREPARAR</th>
                                    <th scope="col">ELIMINAR</th>
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
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#PREPARACION" aria-controls="offcanvasExample">PREPARAR</button>
                                            <div class="offcanvas offcanvas-start offcanvasCargas" tabindex="-1" id="PREPARACION" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGUE LOS INGREDIENTES</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div >
                                                            <label htmlFor="QR">CODIGO DE BARRA</label>
                                                            <input id='QR' type="text" />
                                                        </div>
                                                        <div>
                                                        <BarcodeScannerComponent
                                                            torch={true}
                                                            width={500}
                                                            height={500}
                                                            onUpdate={(err, result) => {
                                                            if (result) setData(result.text);
                                                            else setData("Not Found");
                                                            }}
                                                        />
                                                        <p>{data}</p>
                                                        </div>




                                                        <div className='lineaDivisora'> <hr /> </div>
                                                        <table class="table table-secondary table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                <th scope="col">NUMERO MATERIAL</th>
                                                                <th scope="col">MATERIAL</th>
                                                                <th scope="col">CANTIDAD</th>
                                                                <th scope="col">LOTE</th>
                                                                <th scope="col">ELIMINAR</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1414396</th>
                                                                    <td>JCE ORANGE CNC #59 16UN</td>
                                                                    <td>5</td>
                                                                    <td>0020264030</td>
                                                                    <td><IconDelete></IconDelete></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td><IconDelete></IconDelete></td>

                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>01/03/2024</td>
                                        <td>Marcelo</td>
                                        <td>SPRITE</td>
                                        <td>80</td>
                                        <td>55</td>
                                        <td>2</td>
                                        <td>MM1</td>
                                        <td>
                                            <button className='btn btn-success' type="button" data-bs-toggle="offcanvas" data-bs-target="#PREPARACION" aria-controls="offcanvasExample">PREPARAR</button>
                                            <div class="offcanvas offcanvas-start" tabindex="-1" id="PREPARACION" aria-labelledby="offcanvasExampleLabel">
                                                <div class="offcanvas-header">
                                                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">CARGUE LOS INGREDIENTES</h5>
                                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                                </div>
                                                <div class="offcanvas-body">
                                                    <form className='bodyForm' action="">
                                                        <div >
                                                            <label htmlFor="QR">CODIGO DE BARRA</label>
                                                            <input id='QR' type="text" />
                                                        </div>
                                                        <div className='lineaDivisora'> <hr /> </div>
                                                        <table class="table table-secondary table-striped table-hover">
                                                            <thead>
                                                                <tr>
                                                                <th scope="col">NUMERO MATERIAL</th>
                                                                <th scope="col">MATERIAL</th>
                                                                <th scope="col">CANTIDAD</th>
                                                                <th scope="col">LOTE</th>
                                                                <th scope="col">ELIMINAR</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">1414396</th>
                                                                    <td>JCE ORANGE CNC #59 16UN</td>
                                                                    <td>5</td>
                                                                    <td>0020264030</td>
                                                                    <td><IconDelete></IconDelete></td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                        <button className='btn btn-dark'>CARGAR</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </td>
                                        <td><IconDelete></IconDelete></td>
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

export default Cargas
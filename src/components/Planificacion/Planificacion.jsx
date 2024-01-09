import Encabezado from '../Encabezado/Encabezado'
import IconDelete from '../Icons/IconDelete'
import IconEdit from '../Icons/IconEdit'
import './Planificacion.css'

function Planificacion(){
    
    return(
        <>
        <Encabezado></Encabezado>
        <div className='bodyPlanificacion'>
            <div className='planificacion'>
                <div className='titulo'>
                    <h1>Planificación de la producción</h1>
                    <h4>Cargar las cantidad planificadas por planeamiento</h4>
                </div>
                <div className='container flavorButton'>
                    <div className='saboresPrincipales row'>
                        <button className="btn col-4 btn-danger botonSabores btnCoca" type="button" data-bs-toggle="offcanvas" data-bs-target="#CocaCola" aria-controls="offcanvasWithBothOptions"></button>
                        <button className="btn col-4 btn-success botonSabores btnSprite" type="button" data-bs-toggle="offcanvas" data-bs-target="#Sprite" aria-controls="offcanvasWithBothOptions"></button>
                        <button className="btn col-4 btn-warning botonSabores btnSchw" type="button" data-bs-toggle="offcanvas" data-bs-target="#Schweppes" aria-controls="offcanvasWithBothOptions"></button>
                        <button className="btn col-4 btn-warning botonSabores btnFanta" type="button" data-bs-toggle="offcanvas" data-bs-target="#Fanta" aria-controls="offcanvasWithBothOptions"></button>
                        <button className="btn col-4 btn-success botonSabores btnAq" type="button" data-bs-toggle="offcanvas" data-bs-target="#Aquarius" aria-controls="offcanvasWithBothOptions"></button>
                        <button className="btn col-4 btn-warning botonSabores btnCrush" type="button" data-bs-toggle="offcanvas" data-bs-target="#Crush" aria-controls="offcanvasWithBothOptions"></button>
                        <button className="btn col-4 btn-dark botonSabores btnMonster" type="button" data-bs-toggle="offcanvas" data-bs-target="#Monster" aria-controls="offcanvasWithBothOptions"></button>
                    </div>
                    {/* COCA COLA */}
                    <div>
                        <div class="offcanvas offcanvas-start skuCocaCola" data-bs-scroll="true" tabindex="-1" id="CocaCola" aria-labelledby="offcanvasWithBothOptionsLabel"> 
                            <div class="offcanvas-header">
                                <img className='imagenDesplegable' src="./src/components/Images/CC.png" alt="" />
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p className='textSabores'>Introduzca la cantidad total programada por planeamiento <hr /></p>
                                
                                <form className='skuLista saboresCocaCola'>
                                    <div className='sabores'>
                                        <label for="cocaCola" class="form-label btn btn-dark">COCA COLA</label>
                                        <input type="number" class="form-control" id="cocaCola" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="cocaColaBIB" class="form-label btn btn-dark">COCA COLA BIB</label>
                                        <input type="number" class="form-control" id="cocaColaBIB" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="CocaColaLight" class="form-label btn btn-dark">COCA COLA LIGHT</label>
                                        <input type="number" class="form-control" id="CocaColaLight" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="CocaColaLightBIB" class="form-label btn btn-dark">COCA COLA LIGHT BIB</label>
                                        <input type="number" class="form-control" id="CocaColaLightBIB" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="cocaColaEin" class="form-label btn btn-dark">COCA COLA EIN</label>
                                        <input type="number" class="form-control" id="cocaColaEin" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="CocaColaSa" class="form-label btn btn-dark">COCA COLA KAISEN</label>
                                        <input type="number" class="form-control" id="CocaColaSa" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="CocaColaSaBIB" class="form-label btn btn-dark">COCA COLA SA BIB</label>
                                        <input type="number" class="form-control" id="CocaColaSaBIB" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="cocaColaCafe" class="form-label btn btn-dark">COCA COLA CAFE</label>
                                        <input type="number" class="form-control" id="cocaColaCafe" aria-describedby="number"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary">CREAR ORDEN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* SPRITE */}
                    <div>
                        <div class="offcanvas offcanvas-start skuSprite" data-bs-scroll="true" tabindex="-1" id="Sprite" aria-labelledby="offcanvasWithBothOptionsLabel"> 
                            <div class="offcanvas-header">
                                <img className='imagenDesplegable' src="./src/components/Images/SP.png" alt="" />
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p className='textSabores'>Introduzca la cantidad total programada por planeamiento <hr /></p>
                                <form className='skuLista saboresSprite'>
                                    <div className='sabores'>
                                        <label for="sprite" class="form-label btn btn-dark">SPRITE</label>
                                        <input type="number" class="form-control" id="sprite" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="spriteSa" class="form-label btn btn-dark">SPRITE SIN AZUCAR </label>
                                        <input type="number" class="form-control" id="spriteSa" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="spriteSaBIB" class="form-label btn btn-dark">SPRITE SA BIB </label>
                                        <input type="number" class="form-control" id="spriteSaBIB" aria-describedby="number"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary">CREAR ORDEN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* SCHWEPPES */}
                    <div>
                        <div class="offcanvas offcanvas-start skuSchweppes" data-bs-scroll="true" tabindex="-1" id="Schweppes" aria-labelledby="offcanvasWithBothOptionsLabel"> 
                            <div class="offcanvas-header">
                                <img className='imagenDesplegable' src="./src/components/Images/Schw.png" alt="" />
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p className='textSabores'>Introduzca la cantidad total programada por planeamiento <hr /></p>
                                <form className='skuLista saboresSchweppes'>
                                    <div className='sabores'>
                                        <label for="schweppesPomSa" class="form-label btn btn-dark">SCHWEPPES POMELO SA</label>
                                        <input type="number" class="form-control" id="schweppesPomSa" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="schweppesPomSaBIB" class="form-label btn btn-dark">SCHW POMELO SA BIB </label>
                                        <input type="number" class="form-control" id="schweppesPomSaBIB" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="schweppesTonica" class="form-label btn btn-dark">SCHWEPPES TÓNICA </label>
                                        <input type="number" class="form-control" id="schweppesTonica" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="schweppesTonicaSa" class="form-label btn btn-dark">SCHWEPPES TÓNICA SA </label>
                                        <input type="number" class="form-control" id="schweppesTonicaSa" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="schweppesCitrus" class="form-label btn btn-dark">SCHWEPPES CITRUS </label>
                                        <input type="number" class="form-control" id="schweppesCitrus" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="schweppesVodCitrus" class="form-label btn btn-dark">SCHWEPPES VODKA CITRUS </label>
                                        <input type="number" class="form-control" id="schweppesVodCitrus" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="schweppesGin" class="form-label btn btn-dark">SCHWEPPES GIN TÓNIC </label>
                                        <input type="number" class="form-control" id="schweppesVodGin" aria-describedby="number"/>
                                    </div>

                                    <button type="button" className="btn btn-secondary">CREAR ORDEN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* FANTA */}
                    <div>
                        <div class="offcanvas offcanvas-start skuFanta" data-bs-scroll="true" tabindex="-1" id="Fanta" aria-labelledby="offcanvasWithBothOptionsLabel"> 
                            <div class="offcanvas-header">
                                <img className='imagenDesplegable' src="./src/components/Images/FN.png" alt="" />
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p className='textSabores'>Introduzca la cantidad total programada por planeamiento <hr /></p>
                                <form className='skuLista saboresFanta'>
                                    <div className='sabores'>
                                        <label for="fantaNaranja" class="form-label btn btn-dark">FANTA NARANJA</label>
                                        <input type="number" class="form-control" id="fantaNaranja" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="fantaNaranjaSA" class="form-label btn btn-dark">FANTA NARANJA SA</label>
                                        <input type="number" class="form-control" id="fantaNaranjaSA" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="fantaLimon" class="form-label btn btn-dark">FANTA LIMÓN</label>
                                        <input type="number" class="form-control" id="fantaLimon" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="fantaPomelo" class="form-label btn btn-dark">FANTA POMELO</label>
                                        <input type="number" class="form-control" id="fantaPomelo" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="fantaUva" class="form-label btn btn-dark">FANTA UVA</label>
                                        <input type="number" class="form-control" id="fantaUva" aria-describedby="number"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary">CREAR ORDEN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* AQUARIUS */}
                    <div>
                        <div class="offcanvas offcanvas-start skuAquarius" data-bs-scroll="true" tabindex="-1" id="Aquarius" aria-labelledby="offcanvasWithBothOptionsLabel"> 
                            <div class="offcanvas-header">
                                <img className='imagenDesplegable' src="./src/components/Images/Aq.png" alt="" />
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p className='textSabores'>Introduzca la cantidad total programada por planeamiento <hr /></p>
                                <form className='skuLista saboresAquarius'>
                                    <div className='sabores'>
                                        <label for="aquairusManzana" class="form-label btn btn-dark">AQUARIUS MANZANA</label>
                                        <input type="number" class="form-control" id="aquairusManzana" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="aquairusNaranja" class="form-label btn btn-dark">AQUARIUS NARANJA</label>
                                        <input type="number" class="form-control" id="aquairusNaranja" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="aquairusPera" class="form-label btn btn-dark">AQUARIUS PERA</label>
                                        <input type="number" class="form-control" id="aquairusPera" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="aquariusPomelo" class="form-label btn btn-dark">AQUARIUS POMELO</label>
                                        <input type="number" class="form-control" id="aquariusPomelo" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="aquariusLimonada" class="form-label btn btn-dark">AQUARIUS LIMONADA</label>
                                        <input type="number" class="form-control" id="aquariusLimonada" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="aquariusLimonada" class="form-label btn btn-dark">AQUARIUS LIMONADA</label>
                                        <input type="number" class="form-control" id="aquariusLimonada" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="aquariusCitrus" class="form-label btn btn-dark">AQUARIUS CITRUS</label>
                                        <input type="number" class="form-control" id="aquariusCitrus" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="aquariusLimonadaSA" class="form-label btn btn-dark">AQUARIUS LIMONADA SA</label>
                                        <input type="number" class="form-control" id="aquariusLimonadaSA" aria-describedby="number"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary">CREAR ORDEN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* MONSTER */}
                    <div>
                        <div class="offcanvas offcanvas-start skuMonster" data-bs-scroll="true" tabindex="-1" id="Monster" aria-labelledby="offcanvasWithBothOptionsLabel"> 
                            <div class="offcanvas-header">
                                <img className='imagenDesplegable' src="./src/components/Images/Monster.png" alt="" />
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p className='textSabores'>Introduzca la cantidad total programada por planeamiento <hr /></p>
                                <form className='skuLista saboresMonster'>
                                    <div className='sabores'>
                                        <label for="monsterGreen" class="form-label btn btn-dark">MONSTER GREEN</label>
                                        <input type="number" class="form-control" id="monsterGreen" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="monsterML" class="form-label btn btn-dark">MONSTER MANGO LOCO</label>
                                        <input type="number" class="form-control" id="monsterML" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="monsterSunrise" class="form-label btn btn-dark">MONSTER SUNRISE</label>
                                        <input type="number" class="form-control" id="monsterSunrise" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="monsterParadise" class="form-label btn btn-dark">MONSTER PARADISE</label>
                                        <input type="number" class="form-control" id="monsterParadise" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="monsterUltraZero" class="form-label btn btn-dark">MONSTER ULTRA ZERO</label>
                                        <input type="number" class="form-control" id="monsterUltraZero" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="monsterVRossi" class="form-label btn btn-dark">MONSTER V ROSSI</label>
                                        <input type="number" class="form-control" id="monsterVRossi" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="monsterWMelon" class="form-label btn btn-dark">MONSTER WATERMELON</label>
                                        <input type="number" class="form-control" id="monsterWMelon" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="monsterPineapple" class="form-label btn btn-dark">MONSTER PINEAPPLE</label>
                                        <input type="number" class="form-control" id="monsterPineapple" aria-describedby="number"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary">CREAR ORDEN</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* CRUSH */}
                    <div>
                        <div class="offcanvas offcanvas-start skuCrush" data-bs-scroll="true" tabindex="-1" id="Crush" aria-labelledby="offcanvasWithBothOptionsLabel"> 
                            <div class="offcanvas-header">
                                <img className='imagenDesplegable' src="./src/components/Images/Crush.png" alt="" />
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p className='textSabores'>Introduzca la cantidad total programada por planeamiento <hr /></p>
                                <form className='skuLista saboresCrush'>
                                    <div className='sabores'>
                                        <label for="crushNaranja" class="form-label btn btn-dark">CRUSH NARANJA</label>
                                        <input type="number" class="form-control" id="crushNaranja" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="crushPomelo" class="form-label btn btn-dark">CRUSH POMELO</label>
                                        <input type="number" class="form-control" id="crushPomelo" aria-describedby="number"/>
                                    </div>
                                    <div className='sabores'>
                                        <label for="crushLimaLimon" class="form-label btn btn-dark">CRUSH LIMA LIMÓN</label>
                                        <input type="number" class="form-control" id="crushLimaLimon" aria-describedby="number"/>
                                    </div>
                                    <button type="button" className="btn btn-secondary">CREAR ORDEN</button>
                                </form>
                            </div>
                        </div>
                    </div> 
                    
                </div>
                

                
            </div>
            <div className='datos'>
                
                <div className='TablaDatos'>
                    <table class="table table-secondary table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">ID</th>
                            <th scope="col">FECHA</th>
                            <th scope="col">SABOR</th>
                            <th scope="col">CANTIDAD</th>
                            <th scope="col">SUPERVISOR</th>
                            <th scope="col">ELIMINAR</th>
                            <th scope="col">EDITAR</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>01/03/2024</td>
                            <td>COCA COLA</td>
                            <td>894</td>
                            <td>Guille</td>
                            <td><IconEdit></IconEdit></td>
                            <td><IconDelete></IconDelete></td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>01/03/2024</td>
                            <td>SPRITE</td>
                            <td>320</td>
                            <td>Cristian</td>
                            <td><IconEdit></IconEdit></td>
                            <td><IconDelete></IconDelete></td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td >01/03/2024</td>
                            <td>COCA COLA SA</td>
                            <td>240</td>
                            <td>Javier</td>
                            <td><IconEdit></IconEdit></td>
                            <td><IconDelete></IconDelete></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
        
        
        </>
    )
}

export default Planificacion
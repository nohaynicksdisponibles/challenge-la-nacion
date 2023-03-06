import lanacionLogo from "../../assets/lanacionlogo.png"
import magnifyingGlass from "../../assets/magnifying-glass.png" 

export default function Header(){
    let ubicacionPrincipal = window.pageYOffset;

    window.onscroll = function(){
        let desplazamientoActual = window.pageYOffset;
        if(ubicacionPrincipal >= desplazamientoActual){
            document.getElementById("headerId")!.style.top = "0"
        }else{
            document.getElementById("headerId")!.style.top = "-100px"
        }
        ubicacionPrincipal = desplazamientoActual;
}

    return (
        <header className="header" id="headerId" style={{marginBottom: "500px"}}>
            <div className="lay">
                <div className="row">
                    <div className="col-4 header__left">
                        <div className="com-hamburger">
                            <span className="com-hamburger__bar"></span>
                            <span className="com-hamburger__bar"></span>
                            <span className="com-hamburger__bar"></span> 
                        </div>
                        <form className="com-search ">
                            <input type="text" className="com-search__input" placeholder="Buscar" />
                            {/*<i className="icon-search"></i>*/}
                            <div className="icon-search-div">
                                <img className="icon-search" src={magnifyingGlass} alt="Lupa"/>
                            </div>     
                            <input type="submit" value="Buscar" className="--btn --primary com-search__submit" />
                        </form>
                    </div>
                    <div className="col-4  header__middle">
                            <a href="/" className="header__middle__logo">
                                {/*<i className="logo-la-nacion"></i>*/}
                                <img className="logo-la-nacion" src={lanacionLogo} alt="La Nacion"/>
                            </a>
                    </div>
                    <div className="col-4 header__right">
                        <div className="com-usuario">
                            <button className="--btn --highlight hlp-marginRight-35 idSus">Suscribite</button>
                            <button className="--btn --secondary idIngresar">Ingresar</button>
                        </div>                      
                    </div>
                </div>
            </div>
        </header>
    )
}
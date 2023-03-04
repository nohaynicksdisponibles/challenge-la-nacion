/* eslint-disable jsx-a11y/anchor-is-valid */
import lanacionLogo from "../../assets/lanacionlogo.png"
import home from "../../assets/home.png"
import card from "../../assets/card.png"
import comment from "../../assets/comment.png"
import hamburger from "../../assets/hamburger.png"

export default function HeaderMobile(){
    return(
        <>  
        <header className="header-mobile">
            <div className="lay">
                <div className="row">
                    <div className="col-6">
                        <a href="/" className="header-mobile__logo">
                            {/*<i className="logo-la-nacion"></i>*/}
                            <img className="logo-la-nacion-mobile" src={lanacionLogo} alt="La Nacion"/>
                        </a>
                    </div>
                    <div className="col-6 hlp-text-right">
                        <a>Suscribite</a>
                    </div>
                </div>
            </div>
        </header>
        <nav className="com-nav-mobile">
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    <div className="com-nav-monile-child-div">
                        <a href="" className="item-foo"><img alt="Home" src={home} className="home"/><p>Home</p></a>
                    </div>
                    <div className="com-nav-monile-child-div">
                        <a href="" className="item-foo"><img alt="Card" src={card} className="card"/><p> Club LA NACION</p></a>
                    </div>
                    <div className="com-nav-monile-child-div">
                        <a href="" className="item-foo"><img alt="Comment" src={comment} className="comment"/><p>Mi cuenta</p></a>
                    </div>
                    <div className="com-nav-monile-child-div">
                        <a href="" className="item-foo"><img alt="Menu" src={hamburger} className="hamburger"/><p>Menú</p></a>
                    </div>
                </div>
        </nav>
        </>
    )
}
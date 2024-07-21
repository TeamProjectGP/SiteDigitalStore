import { NavLink } from "react-router-dom";
import {HeaderLogo} from "../components/Logo"

const Header = () => {
    return (
        <>
        <header>
            <section class="HeaderTop">
            <HeaderLogo />
            <div class="HeaderInput">
                <input type="text" placeholder="Pesquisar Produto..."/>
                <box-icon id="SearchButton" name='search'></box-icon>
            </div>
            <div class="HeaderButtons">
                <a id="CadastroButton">Cadastre-se</a>
                <a id="LoginButton">Entrar</a>
            </div>
            <div class="CartContainer">
                <img src="../src/assets/mini-cart.svg" id="CartButton" size="cssSize" alt="cart"></img>
                <div class="CartNumber">
                    <h6 for="CartButton">2</h6>
                </div>
            </div>
            </section>
            <nav>
            <ul>
                <li id="Home"><NavLink className="LinkHeader" to={"/"}>Home</NavLink></li>
                <li id="Categorias"><NavLink className="LinkHeader" to={"/categorias"}>Categorias</NavLink></li>
                <li id="Produtos"><NavLink className="LinkHeader" to={"/produtos"}>Produtos</NavLink></li>
                <li id="Pedidos"><NavLink className="LinkHeader"to={"/pedidos"}>Pedidos</NavLink></li>
            </ul>
        </nav>
            <br />
        </header>
        </>
        
    );
}
 
export default Header;
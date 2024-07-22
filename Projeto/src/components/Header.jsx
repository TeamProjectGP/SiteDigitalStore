import { Link, NavLink } from "react-router-dom";
import {HeaderLogo} from "../components/Logo"

const Header = () => {
    return (
        <>
        <header>
            <section class="HeaderTop">
            <HeaderLogo />
            <div id="HeaderInput">
                <input type="text" placeholder="Pesquisar Produto..." />
                <box-icon id="SearchButton" name='search'></box-icon>
            </div>
            <div class="HeaderButtons">
                <Link to={"/cadastro"}id="CadastroButton">Cadastre-se</Link>
                <Link to={"/login"} id="LoginButton">Entrar</Link>
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
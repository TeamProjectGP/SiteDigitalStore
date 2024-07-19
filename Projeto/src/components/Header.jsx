import Logo from "./Logo";

const Header = () => {
    return (
        <>
        <header>
            <section class="HeaderTop">
            <Logo />
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
            <br />
            <nav>
                <ul>
                    <li>
                        <a id="Home" href="#">Home</a>
                        <a id="Produtos" href="#">Produtos</a>
                        <a id="Categorias" href="#">Categorias</a>
                        <a id="Pedidos" href="#">Meus Pedidos</a>
                    </li>
                </ul>
            </nav>
        </header>
        </>
        
    );
}
 
export default Header;
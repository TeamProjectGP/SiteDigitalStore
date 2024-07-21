import { Link } from "react-router-dom";
import { FooterLogo } from "./Logo";

const Footer = () => {
    return (
        <>
        <footer>
            <div class="FooterContainer">
                <div class="FooterBox">
                    <div class="FooterStartObjects">
                        <FooterLogo />
                        <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</h5>
                        <div class="FooterSocialContainer">
                            <img src="./src/assets/facebook.svg" alt="Facebook-Logo" />
                            <img src="./src/assets/instagram.svg" alt="Instagram-Logo" />
                            <img src="./src/assets/twitter.svg" alt="Twitter-Logo" />
                        </div>
                    </div>
                    <div class="FooterInformationContainer">
                        <h3>Informação</h3>
                        <h4><a href="#">Sobre Drip Store</a></h4>
                        <h4><a href="#">Segurança</a></h4>
                        <h4><a href="#">Wishlist</a></h4>
                        <h4><a href="#">Blog</a></h4>
                        <h4><a href="#">Trabalhe conosco</a></h4>
                        <h4><a href="#">Meus Pedidos</a></h4>
                    </div>
                    <div class="FooterCategoryContainer">
                        <h3>Categorias</h3>
                        <h4><Link to={"/categorias"}>Camisetas</Link></h4>
                        <h4><Link to={"/categorias"}>Calças</Link></h4>
                        <h4><Link to={"/categorias"}>Bonés</Link></h4>
                        <h4><Link to={"/categorias"}>Headphones</Link></h4>
                    </div>
                    <div class="FooterContatoContainer">
                        <h3>Contato</h3>
                        <h4>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</h4>
                        <h4>(85) 3051-3411</h4>
                    </div>
                </div>
                <hr />
                <p class="Copyright">@ 2022 Digital College</p>
            </div>
        </footer>
        </>
    );
}
 
export default Footer;
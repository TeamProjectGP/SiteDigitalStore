import Footer from "./Footer";
import Header from "./Header";

export const SliderHomePage = () => {
    return (
        <section class="HomeSlide">
                <section class="HomeSlideContainer">
                    <div class="HomeSlideTexts">
                        <h6>Melhores ofertas personalizadas</h6>
                        <h1>Queima de Estoque Nike<span>🔥</span></h1>
                        <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.</p>
                        <div class="HomeSlideButton">
                            <button>Ver Ofertas</button>
                        </div>
                    </div>
                    <gallery id="HomeSlideImg">
                        <img id="ShowSlide1" src="./public/Home-slide-1.png" alt="NikeWhiteRed" />
                        <img id="ShowSlide2" src="./public/Home-slide-2.png" alt="Nike2" />
                        <img id="ShowSlide3" src="./public/Home-slide-3.png" alt="Nike3" />
                        <img id="ShowSlide4" src="./public/Home-slide-4.png" alt="Nike4" />
                    </gallery>
                </section>
                <div class="HomeSliderCounterContainer">
                    <section id="SliderBall1" class="HomeSlideCounter" onClick={() => {
                        SliderBall1.classList.remove("inactive");
                        ShowSlide1.classList.remove("inactive");
                        SliderBall2.classList.remove("active");
                        ShowSlide2.classList.remove("active"); 
                        SliderBall3.classList.remove("active");
                        ShowSlide3.classList.remove("active");
                        SliderBall4.classList.remove("active");
                        ShowSlide4.classList.remove("active"); 
                    }}></section>
                    <section id="SliderBall2" class="HomeSlideCounter" onClick={() => {
                        SliderBall1.classList.add("inactive");
                        ShowSlide1.classList.add("inactive") 
                        SliderBall2.classList.add("active");
                        ShowSlide2.classList.add("active");
                        SliderBall3.classList.remove("active");
                        ShowSlide3.classList.remove("active"); 
                        SliderBall4.classList.remove("active");
                        ShowSlide4.classList.remove("active");
                    }} ></section>
                    <section id="SliderBall3" class="HomeSlideCounter" onClick={() => {
                       SliderBall1.classList.add("inactive");
                       ShowSlide1.classList.add("inactive");
                       SliderBall2.classList.remove("active");
                       ShowSlide2.classList.remove("active"); 
                       SliderBall3.classList.add("active");
                       ShowSlide3.classList.add("active"); 
                       SliderBall4.classList.remove("active");
                       ShowSlide4.classList.remove("active");  
                    }}></section>
                    <section id="SliderBall4" class="HomeSlideCounter" onClick={() => {
                       SliderBall1.classList.add("inactive");
                       ShowSlide1.classList.add("inactive"); 
                       SliderBall2.classList.remove("active");
                       ShowSlide2.classList.remove("active"); 
                       SliderBall3.classList.remove("active");
                       ShowSlide3.classList.remove("active"); 
                       SliderBall4.classList.add("active");
                       ShowSlide4.classList.add("active");
                    }}></section>
                </div>
            </section>
    );
}

export const ColecaoDestaque = () => {
    return (
        <>
        <section id="ColecoesDetaque">
            <div class="ColecoesDestaqueContainer">
                <h2 id="DestaqueTitulo">Coleções em Destaque</h2>
                <div class="ColecoesCardContainer">
                    <div class="ColecoesCard">
                        <div class="Card1ElementsContainer">
                            <h2 id="CardDiscount">30% off</h2>
                            <button id="CardDestaqueBtn">Comprar</button>
                        </div>
                        <div class="Card2ElementsContainer">
                            <h2 id="CardDiscount">30% off</h2>
                            <button id="CardDestaqueBtn">Comprar</button>
                        </div>
                        <div class="Card3ElementsContainer">
                            <h2 id="CardDiscount">30% off</h2>
                            <button id="CardDestaqueBtn">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="DestaquesCategorias">
            <div className="DestaquesCategoriasContainer">
                <h2 id="DestaqueTitulo">Coleções em Destaque</h2>
            </div>
            <div className="DestaquesCategoriasIcons">
                <span><img id="CategoriaIcons" src="../public/Shirt.png" alt="Shirt-Categories"/></span>
                <span><img id="CategoriaIcons" src="../public/Pants.png" alt="Pants-Categories"/></span>
                <span><img id="CategoriaIcons" src="../public/Cap.png" alt="Cap-Categories"/></span>
                <span><img id="CategoriaIcons" src="../public/Headphones.png" alt="Headphones-Categories"/></span>
                <span><img id="CategoriaIcons" src="../public/Shoes.png" alt="Shoes-Categories"/></span>
            </div>
            <div className="DestaquesCategoriasTexts">
                <h5 id="CategoriasSubtitiles1">Camisetas</h5>
                <h5 id="CategoriasSubtitiles2">Calças</h5>
                <h5 id="CategoriasSubtitiles3">Bonés</h5>
                <h5 id="CategoriasSubtitiles4">Headphones</h5>
                <h5 id="CategoriasSubtitiles5">Tênis</h5>    
            </div>
        </section>
        </>
    );
}

export const Layout = ({children}) => {
    return (
        <>
        <div>
            <Header />
            {children}
            <Footer />
        </div>
        </>
    );
}
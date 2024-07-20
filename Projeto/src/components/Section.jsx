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
                        <img src="./public/Home-slide-1.png" alt="" />
                    </gallery>
                </section>
                <div class="HomeSliderCounterContainer">
                    <section id="SliderBall1" class="HomeSlideCounter" onClick={() => {
                        SliderBall1.classList.remove("inactive");
                        SliderBall2.classList.remove("active"); 
                        SliderBall3.classList.remove("active"); 
                        SliderBall4.classList.remove("active"); 
                    }}></section>
                    <section id="SliderBall2" class="HomeSlideCounter" onClick={() => {
                        SliderBall1.classList.add("inactive"); 
                        SliderBall2.classList.add("active"); 
                        SliderBall3.classList.remove("active"); 
                        SliderBall4.classList.remove("active");  
                    }} ></section>
                    <section id="SliderBall3" class="HomeSlideCounter" onClick={() => {
                       SliderBall1.classList.add("inactive");
                       SliderBall2.classList.remove("active"); 
                       SliderBall3.classList.add("active"); 
                       SliderBall4.classList.remove("active");  
                    }}></section>
                    <section id="SliderBall4" class="HomeSlideCounter" onClick={() => {
                       SliderBall1.classList.add("inactive"); 
                       SliderBall2.classList.remove("active"); 
                       SliderBall3.classList.remove("active"); 
                       SliderBall4.classList.add("active");  
                    }}></section>
                </div>
            </section>
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
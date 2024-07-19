import Header from "../components/Header";

export const Layout = ({Children}) => {
    return (
        <>
        <Header />
        </>
    );
}
const HomePage = () => {
    return (
        <>
        <Layout />
        <main>
            <section class="HomeSlide">
                <section class="HomeSlideContainer">
                    <div class="HomeSlideTexts">
                        <h6>Melhores ofertas personalizadas</h6>
                        <h1>Queima de Estoque Nike</h1>
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
                        SliderBall1.classList.add("active"); 
                        SliderBall2.classList.remove("active"); 
                        SliderBall3.classList.remove("active"); 
                        SliderBall4.classList.remove("active"); 
                    }}></section>
                    <section id="SliderBall2" class="HomeSlideCounter" onClick={() => {
                        SliderBall1.classList.remove("active"); 
                        SliderBall2.classList.add("active"); 
                        SliderBall3.classList.remove("active"); 
                        SliderBall4.classList.remove("active");  
                    }} ></section>
                    <section id="SliderBall3" class="HomeSlideCounter" onClick={() => {
                        SliderBall1.classList.remove("active"); 
                       SliderBall2.classList.remove("active"); 
                       SliderBall3.classList.add("active"); 
                       SliderBall4.classList.remove("active");  
                    }}></section>
                    <section id="SliderBall4" class="HomeSlideCounter" onClick={() => {
                       SliderBall1.classList.remove("active"); 
                       SliderBall2.classList.remove("active"); 
                       SliderBall3.classList.remove("active"); 
                       SliderBall4.classList.add("active");  
                    }}></section>
                </div>
            </section>
        </main>
        </>
    );
}
export default HomePage;
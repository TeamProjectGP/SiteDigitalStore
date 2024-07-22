import  { ColecaoDestaque, Layout, OfertaEspecial, ProdutosAlta, SliderHomePage } from "../components/Section";

const HomePage = () => {
    return (
        <Layout>
            <main>
                <section>
                    <SliderHomePage />
                    <ColecaoDestaque />
                    <ProdutosAlta />
                    <OfertaEspecial />
                </section>
            </main>
        </Layout>
    );
}
export default HomePage;
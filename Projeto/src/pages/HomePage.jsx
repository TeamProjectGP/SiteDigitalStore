import  { ColecaoDestaque, Layout, SliderHomePage } from "../components/Section";

const HomePage = () => {
    return (
        <Layout>
            <main>
                <section>
                    <SliderHomePage />
                    <ColecaoDestaque />
                </section>
            </main>
        </Layout>
    );
}
export default HomePage;
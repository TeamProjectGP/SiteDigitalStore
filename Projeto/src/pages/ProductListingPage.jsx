import ProductListing from "../components/ProductListing";
import { Layout } from "../components/Section";

const ProductListingPage = () => {
    return (
        <Layout>
            <main>
                <ProductListing />
            </main>
        </Layout>
    );
}
 
export default ProductListingPage;
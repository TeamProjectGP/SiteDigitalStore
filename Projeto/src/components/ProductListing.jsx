const ProductListing = () => {
    return (
        <section class="ProductListingContainerMain">
            <div className="ProductListingQuantidade">
                <h5 id="ProductResultName">Resultados para “Tênis” - </h5>
                <h6 id="ProductQuantity">389 Produtos</h6>
            </div>
            <div className="ProductListingFilterContainer">
                <h5 id="Textfilter">Filtrar por</h5>
                <hr></hr>
                <div class="ProductsMarkaContainer">
                    <h5 id="TextCheckbox">Marka</h5>
                    <div class="FilterCheckBoxMainContainer">
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Adidas" id="MarkaProductFilter" />
                            <h6>Adidas</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Calenciaga" id="MarkaProductFilter" />
                            <h6>Calenciaga</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="K-Swiss" id="MarkaProductFilter" />
                            <h6>K-Swiss</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Nike" id="MarkaProductFilter" />
                            <h6>Nike</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Puma" id="MarkaProductFilter" />
                            <h6>Puma</h6>
                        </div>
                    </div>
                </div>
                <div class="ProductsCategoriasContainer">
                    <h5 id="TextCheckbox">Categorias</h5>
                    <div class="FilterCheckBoxMainContainer">
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="EsporteELazer" id="CategoriaProductFilter" />
                            <h6>Esporte e Lazer</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Casual" id="CategoriaProductFilter" />
                            <h6>Casual</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Utilitario" id="CategoriaProductFilter" />
                            <h6>Utilitário</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Corrida" id="CategoriaProductFilter" />
                            <h6>Corrida</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="checkbox" name="Puma" id="CategoriaProductFilter" />
                            <h6>Puma</h6>
                        </div>
                    </div>
                </div>
                <div class="ProductsCategoriasContainer">
                    <h5 id="TextCheckbox">Estado</h5>
                    <div class="FilterCheckBoxMainContainer">
                        <div class="FilterCheckBoxContainer">
                            <input type="radio" name="Novo" id="EstadoProductFilter" />
                            <h6>Novo</h6>
                        </div>
                        <div class="FilterCheckBoxContainer">
                            <input type="radio" name="Usado" id="EstadoProductFilter" />
                            <h6>Usado</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ProductListing;
import { Link } from "react-router-dom";

const ProductListing = () => {
    return (
        <section class="ProductListingContainerMain">
            <div className="ProductsListingTop">
                <div className="ProductListingQuantidade">
                    <h5 id="ProductResultName">Resultados para “Tênis” - </h5>
                    <h6 id="ProductQuantity">389 Produtos</h6>
                </div>
                <div className="OrdenarProdutosContainer">
                    <select name="OrdenarProdutosSeletor" id="OrdenarProdutos">
                            <option class="OrdenarProdutosOption">
                                <h5 id="h5ProdutosSelect">Ordenar por: </h5>
                                <span>mais relevantes</span>
                            </option>
                    </select>
                    <div className="OrdenarProdutosSeletorIcon">
                        <i  class="fa-solid fa-angle-down"></i>
                    </div>
                </div>
            </div>
            <div className="ProductsListingMain">
                <div className="ProductListingFilterContainer">
                    <h5 id="Textfilter">Filtrar por</h5>
                    <hr></hr>
                    <div class="ProductsMarkaContainer">
                        <h5 id="TextCheckbox">Marka</h5>
                        <div class="FilterCheckBoxMainContainer">
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" class="MarkaProductFilter" name="MarkaProductFilter" id="Adidas" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="Adidas">Adidas</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" class="MarkaProductFilter" name="Calenciaga" id="Calenciaga" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="Calenciaga">Calenciaga</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" class="MarkaProductFilter" name="K-Swiss" id="K-Swiss" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="K-Swiss">K-Swiss</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" name="MarkaProductFilter" id="Nike" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="Nike">Nike</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" name="MarkaProductFilter" id="Puma" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="Puma">Puma</label>
                            </div>
                        </div>
                    </div>
                    <div class="ProductsCategoriasContainer">
                        <h5 id="TextCheckbox">Categorias</h5>
                        <div class="FilterCheckBoxMainContainer">
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" name="CategoriaProductFilter" id="EsporteELazer" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="EsporteELazer">Esporte e Lazer</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                            <div class="Switch-checkbox">
                                    <input type="checkbox" name="CategoriaProductFilter" id="Casual" />
                                    <span class="checkboxmark"></span>
                                    </div>
                                <label for="Casual">Casual</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" name="CategoriaProductFilter" id="Utilitario" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="Utilitario">Utilitário</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" name="CategoriaProductFilter" id="Corrida" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="Corrida">Corrida</label>
                            </div>
                        </div>
                    </div>
                    <div class="ProductsCategoriasContainer">
                        <h5 id="TextCheckbox">Gênero</h5>
                        <div class="FilterCheckBoxMainContainer">
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" name="GeneroProductFilter" id="Masculino" />
                                    <span class="checkboxmark"></span>
                                </div>
                                <label for="Masculino">Masculino</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                            <div class="Switch-checkbox">
                                    <input type="checkbox" name="GeneroProductFilter" id="Feminino" />
                                    </div>
                                <label for="Feminino">Feminino</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-checkbox">
                                    <input type="checkbox" name="GeneroProductFilter" id="Unisex" />
                                </div>
                                <label for="Unisex">Unisex</label>
                            </div>
                        </div>
                    </div>
                    <div class="ProductsCategoriasContainer">
                        <h5 id="TextCheckbox">Estado</h5>
                        <div class="FilterCheckBoxMainContainer">
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-Radio">
                                    <input type="radio" name="EstadoProductFilter" id="NovoEstado" />
                                </div>
                                <label for="NovoEstado">Novo</label>
                            </div>
                            <div class="FilterCheckBoxContainer">
                                <div class="Switch-Radio">
                                    <input type="radio" name="EstadoProductFilter" id="UsadoEstado" />
                                </div>
                                <label for ="UsadoEstado">Usado</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ProdutosFilterContainer">
                    <div className="ProdutosFilterCardContainer">
                        <div class="ProdutosFilterCard">
                            <h2 id="CardDiscountAlta">30% off</h2>
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <h2 id="CardDiscountAlta">30% off</h2>
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCardReferences">
                            <div className="ProdutosCardReferenceType">
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                            </div>
                            <div className="ProdutosCardReferenceName">
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                            </div>
                            <div className="ProdutosCardReferencePrices">
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ProdutosFilterCardContainer">
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCardReferences">
                            <div className="ProdutosCardReferenceType">
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                            </div>
                            <div className="ProdutosCardReferenceName">
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                            </div>
                            <div className="ProdutosCardReferencePrices">
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ProdutosFilterCardContainer">
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCardReferences">
                            <div className="ProdutosCardReferenceType">
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                            </div>
                            <div className="ProdutosCardReferenceName">
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                            </div>
                            <div className="ProdutosCardReferencePrices">
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ProdutosFilterCardContainer">
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCardReferences">
                            <div className="ProdutosCardReferenceType">
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                            </div>
                            <div className="ProdutosCardReferenceName">
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                            </div>
                            <div className="ProdutosCardReferencePrices">
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ProdutosFilterCardContainer">
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCard">
                            <div class="ProdutosFilterCardImg">
                                <Link to={"/produtos/:Id"}><img src="../public/ProdutoAlta.png" alt=""/></Link>
                            </div>
                        </div>
                        <div class="ProdutosFilterCardReferences">
                            <div className="ProdutosCardReferenceType">
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                                <h5 id="ProdutoTipo">Tênis</h5>
                            </div>
                            <div className="ProdutosCardReferenceName">
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                <h2><Link to={"/produtos/:Id"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                            </div>
                            <div className="ProdutosCardReferencePrices">
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                                <h3 id="ProdutoOldPrice">$200</h3>
                                <h3 id="ProdutoNewPrice">$100</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default ProductListing;
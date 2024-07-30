import { Link } from "react-router-dom";
import { ProdutosAlta } from "./Section";

const ProductDetails = () => {
    return (
        <section>
                <div className="ProductsDetailsContainerMain">
                    <div className="ProductsDetailsTopContainer">
                        <h6>Home</h6>
                        <h5> / Produtos / Tênis / Nike / Tênis Nike Revolution 6 Next Nature Masculino</h5>
                    </div>
                    <div className="ProductsDetailsMainContainer">
                        <div className="SliderGalleryProduct">
                            <box-icon name='chevron-left' size="cssSize"></box-icon>
                            <img src="../public/Home-slide-1.png" alt="" />
                            <box-icon name='chevron-right' size="cssSize"></box-icon>
                        </div>
                        <div class="ProductsDetailsMainRightContainer">
                            <div class="ProductsDetailsMainTexts">
                                    <h2>Tênis Nike Revolution 6 Next Nature Masculino</h2>
                                <div className="ProductsDetailsText">
                                    <h5>Casual | Nike | REF:38416711</h5>
                                </div>
                            <div class="ProductsDetailsRatingContainer">
                                <div>
                                    <box-icon id="RatingStars" type='solid' name='star' size="cssSize"></box-icon>
                                    <box-icon id="RatingStars" type='solid' name='star' size="cssSize"></box-icon>
                                    <box-icon id="RatingStars" type='solid' name='star' size="cssSize"></box-icon>
                                    <box-icon id="RatingStars" type='solid' name='star' size="cssSize"></box-icon>
                                    <box-icon id="RatingStars" name='star' size="cssSize"></box-icon>
                                </div>
                                    <span>4.7 <box-icon id="RatingStarSpan" type='solid' name='star' size="cssSize"></box-icon></span>
                                    <h4>(90 Avaliações)</h4>
                                </div>
                                <div class="ProductsDetailsPrices">
                                    <h4>R$</h4>
                                    <h3><span>219</span>,00</h3>
                                    <h5>219,00</h5>
                                </div>
                                <div className="ProductDetailsDesc">
                                    <h3>Descrição do Produto</h3>
                                    <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</h4>
                                </div>
                                <div className="ProductDetailsSize">
                                    <h3>Tamanho</h3>
                                <div className="ProductDetailsSizes">
                                    <span id="productDetailsSizesSpan1" onClick={() => {
                                            productDetailsSizesSpan1.classList.add("active");
                                            productDetailsSizesSpan2.classList.remove("active");
                                            productDetailsSizesSpan3.classList.remove("active");
                                            productDetailsSizesSpan4.classList.remove("active");
                                            productDetailsSizesSpan5.classList.remove("active");
                                        }}>39</span>
                                    <span id="productDetailsSizesSpan2" onClick={() => {
                                            productDetailsSizesSpan1.classList.remove("active");
                                            productDetailsSizesSpan2.classList.add("active");
                                            productDetailsSizesSpan3.classList.remove("active");
                                            productDetailsSizesSpan4.classList.remove("active");
                                            productDetailsSizesSpan5.classList.remove("active");
                                        }}>40</span>
                                    <span id="productDetailsSizesSpan3" onClick={() => {
                                            productDetailsSizesSpan1.classList.remove("active");
                                            productDetailsSizesSpan2.classList.remove("active");
                                            productDetailsSizesSpan3.classList.add("active");
                                            productDetailsSizesSpan4.classList.remove("active");
                                            productDetailsSizesSpan5.classList.remove("active");
                                        }}>41</span>
                                    <span id="productDetailsSizesSpan4" onClick={() => {
                                            productDetailsSizesSpan1.classList.remove("active");
                                            productDetailsSizesSpan2.classList.remove("active");
                                            productDetailsSizesSpan3.classList.remove("active");
                                            productDetailsSizesSpan4.classList.add("active");
                                            productDetailsSizesSpan5.classList.remove("active");
                                        }}>42</span>
                                    <span id="productDetailsSizesSpan5" onClick={() => {
                                            productDetailsSizesSpan1.classList.remove("active");
                                            productDetailsSizesSpan2.classList.remove("active");
                                            productDetailsSizesSpan3.classList.remove("active");
                                            productDetailsSizesSpan4.classList.remove("active");
                                            productDetailsSizesSpan5.classList.add("active");
                                        }}>43</span>
                                </div>
                            </div>
                                <div className="ProductDetailsColours">
                                    <h3>Cores</h3>
                                    <div className="ProductDetailsSpansColours">
                                        <span id="BlueColour"></span>
                                        <span id="RedColour"></span>
                                        <span id="BlackColour"></span>
                                        <span id="PurpleColour"></span>
                                    </div>
                                    <div className="ProductDetailsButton">
                                        <button>Comprar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ProductsDetailsSliderMiniaturesContainer">
                        <div className="ProductsDetailsSliderMiniature" id="ProductsDetailsSliderMiniature1">
                            <img src="../public/Home-slide-1.png" alt="" />
                        </div>
                        <div className="ProductsDetailsSliderMiniature" id="ProductsDetailsSliderMiniature2">
                            <img src="../public/Home-slide-1.png" alt="" />
                        </div>
                        <div className="ProductsDetailsSliderMiniature" id="ProductsDetailsSliderMiniature3">
                            <img src="../public/Home-slide-1.png" alt="" />
                        </div>
                        <div className="ProductsDetailsSliderMiniature" id="ProductsDetailsSliderMiniature4">
                            <img src="../public/Home-slide-1.png" alt="" />
                        </div>
                        <div className="ProductsDetailsSliderMiniature" id="ProductsDetailsSliderMiniature5">
                            <img src="../public/Home-slide-1.png" alt="" />
                        </div>
                    </div>
                    <div class="ProdutosAltaContainer">
                        <div class="ProdutosAltaTitles">
                            <h4 id="ProdutosAltaTitulo">Produtos Relacionados</h4>
                            <Link to={"/produtos"}><h5>Ver todos <box-icon size="cssSize" name='right-arrow-alt'></box-icon></h5></Link>
                        </div>
                        <div className="ProdutosAltaCardContainer">
                            <div class="ProdutosAltaCard">
                                <h2 id="CardDiscountAlta">30% off</h2>
                                <div class="ProdutosAltaCardImg">
                                    <Link to={"/produtos"}><img src="../public/ProdutoAlta.png"></img></Link>
                                </div>
                            </div>
                            <div class="ProdutosAltaCard">
                                <h2 id="CardDiscountAlta">30% off</h2>
                                <div class="ProdutosAltaCardImg">
                                    <Link to={"/produtos"}><img src="../public/ProdutoAlta.png"></img></Link>
                                </div>
                            </div>
                            <div class="ProdutosAltaCard">
                                <div class="ProdutosAltaCardImg">
                                    <Link to={"/produtos"}><img src="../public/ProdutoAlta.png"></img></Link>
                                </div>
                            </div>
                            <div class="ProdutosAltaCard">
                                <div class="ProdutosAltaCardImg">
                                    <Link to={"/produtos"}><img src="../public/ProdutoAlta.png"></img></Link>
                                </div>
                            </div>
                            <div class="ProdutosAltaCardReferences">
                                <div className="ProdutosCardReferenceType">
                                    <h5 id="ProdutoTipo">Tênis</h5>
                                    <h5 id="ProdutoTipo">Tênis</h5>
                                    <h5 id="ProdutoTipo">Tênis</h5>
                                    <h5 id="ProdutoTipo">Tênis</h5>
                                </div>
                                <div className="ProdutosCardReferenceName">
                                    <h2><Link to={"/produtos"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                    <h2><Link to={"/produtos"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                    <h2><Link to={"/produtos"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                    <h2><Link to={"/produtos"} id="ProdutoName">K-Swiss V8 - Masculino</Link></h2>
                                </div>
                                <div className="ProdutosCardReferencePrices">
                                    <h3 id="ProdutoOldPrice">$200</h3>
                                    <h3 id="ProdutoNewPrice">$100</h3>
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

export default ProductDetails;
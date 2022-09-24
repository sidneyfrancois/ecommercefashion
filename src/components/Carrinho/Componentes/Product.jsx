import './Product.css';

const Product = () => {
    return ( 
            <section id="produtos-do-carrinho">
                    <img src="./img/blazer.jpg" alt="Blzar branco"/>
                    <p class="remover">Remover item</p>
                    <p class="nome">Brazer Branco</p>
                    <p class="preco">R$ 159,90</p>
                    <div class="tamanho">Tam.:M</div>
                    <p class="parcela">3x R$ 53,30</p>
                    <div class="quantidades">        
                        <button class="menos">-</button>
                        <spam class="quantidade">5</spam>
                        <button class="mais">+</button>
                    </div>
            </section>
     );
}
 
export default Product;
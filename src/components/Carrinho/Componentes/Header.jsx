import React from 'react';
import './Header.css'

const header = () => {
    return (
        <div>
            <section id="titulo-carrinho">
                <a href="/index.html" class="seta"><i class="fa-solid fa-arrow-left"></i></a>
                <h2>Carrinho (<spam>3</spam>)</h2>
            </section>
        </div>
    );
};
 
export default header;
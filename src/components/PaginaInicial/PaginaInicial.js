import React, { Component } from "react";
import classes from './PaginaInicial.css';
import imagem_inicial from "../../assets/img/imagem-pagina-inicial.png";

class PaginaInicial extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        return (
            <div className="full-page">

                <div className="div-img">
                    <img className="paginal-inicial-imagem" alt="imagem-inicial-pessoas" src={imagem_inicial} />
                </div>

                <div>
                    <div>
                        <h1>Adote um Aluno</h1>
                    </div>
                    <div>
                        Mais do que nunca, precisamos de uma comunidade forte. Precisamos do SEU apoio para sairmos dessa.
                    </div>

                    <div>
                        <div>
                            <h1>Quero ajudar</h1>
                        </div>

                        <div>
                            <h1>Preciso de ajuda</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaginaInicial;
import React, { Component } from "react";
import classes from './PaginaInicial.css';
import imagem_inicial from "../../assets/img/imagem-pagina-inicial.png";

class PaginaInicial extends Component {

    render() {
        return (
            <div className="full-page">


                <div className="conteudo-paginal-inicial">
                        <div className="div-img div-card">
                            <img className="" alt="imagem-inicial-pessoas" src={imagem_inicial} />
                        </div>

                    <div className="div-card">

                        <div>
                            <h1>Adote um Aluno</h1>
                        </div>
                        <div>
                            Mais do que nunca, precisamos de uma comunidade forte. Precisamos do SEU apoio para sairmos dessa.
                    </div>

                        <div>
                            <div onClick={(e) => this.props.routeTo("cadastro")} >
                                <h1>Quero ajudar</h1>
                            </div>

                            <div onClick={(e) => this.props.routeTo("cadastro")} >
                                <h1>Preciso de ajuda</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PaginaInicial;
import React from 'react';
import './Adopt.css';
import books from '../../assets/img/books.png'

const Adopt = (props) => {
    return(
        <div className="main">
            <h2 className="title"> Adotar um Aluno </h2>
            <h2 className="sub-title"> Muito obrigado pela ajuda. Escolha a opção que mais se adequa ao seu perfil :) </h2>
            <div className="divOptions">
                <div className="divBook">
                    <h2 className="titleOption">
                        Ajudar com <br/> Material Didático
                    </h2>
                    <h2 className="subtitleOption">
                        Gostaria de ajudar fornecendo livros, artigos <br/> e quaisquer outros materiais que possam auxiliar
                        no estudo do meu aluno.
                    </h2>
                </div>
                <div className="divAnotherBook">
                    <h2 className="titleOption">
                        Ajudar com <br/> Material Didático
                    </h2>
                    <h2 className="subtitleOption">
                        Gostaria de ajudar fornecendo livros, artigos <br/> e quaisquer outros materiais que possam auxiliar
                        no estudo do meu aluno.
                    </h2>
                </div>
            </div>

        </div>
    )
}

export default Adopt;
import React from 'react';
import './Adopt.css';
import books from '../../assets/img/books.png'

const Adopt = (props) => {
    const [step, setStep] = React.useState(0);

    const getStep = () =>{
        switch (step) {
            case 0:
                return(
                    <React.Fragment>
                        <h2 className="title"> Adotar um Aluno </h2>
                        <h2 className="sub-title"> Muito obrigado pela ajuda. Escolha a opção que mais se adequa ao seu perfil :) </h2>
                        <div className="divOptions">
                            <div className="divBook" onClick={() => setStep(1)}>
                                <h2 className="titleOption">
                                    Ajudar com <br/> Material Didático
                                </h2>
                                <h2 className="subtitleOption">
                                    Gostaria de ajudar fornecendo livros, artigos <br/> e quaisquer outros materiais que possam auxiliar
                                    no estudo do meu aluno.
                                </h2>
                            </div>
                            <div className="divAnotherBook" onClick={() => setStep(1)}>
                                <h2 className="titleOption">
                                    Ajudar com <br/> Material e Mentoria
                                </h2>
                                <h2 className="subtitleOption">
                                    Gostaria de ajudar fornecendo livros, artigos <br/> e quaisquer outros materiais que
                                    possam auxiliar no estudo do aluno, bem como auxiliá-lo no entendimento da matéria e afins.
                                </h2>
                            </div>
                        </div>
                    </React.Fragment>
                )
            case 1:
                return(
                    <React.Fragment>
                        <h2 className="title"> Indique o seu curso </h2>
                        <h2 className="sub-title"> Agora, indique qual o seu curso. </h2>
                        <div className="divOptions">

                        </div>
                    </React.Fragment>
                )
        }
    }

    return(
        <div className="main">
            {getStep()}
        </div>
    )
}

export default Adopt;
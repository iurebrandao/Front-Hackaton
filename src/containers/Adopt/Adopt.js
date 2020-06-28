import React from 'react';
import './Adopt.css';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';


const Adopt = (props) => {
    const [step, setStep] = React.useState(0);
    const areas = [
        { label: 'Eng. De Software', value: 'Eng. De Software' },
        { label: 'Artes', value: 'Artes' },
        { label: 'Filosofia', value: 'Filosofia' },
    ];
    const Tag = styled(({ label, onDelete, ...props }) => (
        <div {...props}>
            <span>{label}</span>
            <CloseIcon onClick={onDelete} />
        </div>
    ))

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
                        <h2 className="title"> Áreas de Interesse </h2>
                        <h2 className="sub-title"> Indique em quais disciplinas você gostaria de ajudar o seu aluno!  </h2>
                        <div className="divOptions">
                            <Autocomplete
                                multiple
                                id="tags-standard"
                                options={areas}
                                getOptionLabel={(option) => option.label}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        variant="standard"
                                        label="Áreas"
                                        placeholder="Digite aqui as áreas desejadas"
                                    />
                                )}
                            />
                            <div className="divButton">
                                <Button size="large" variant="contained" className="button">
                                    Avançar
                                </Button>
                            </div>

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
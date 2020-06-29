import React from 'react';
import './Adopt.css';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import user from "../../assets/img/user.png";
import CardConnection from "../../components/CardConnection/CardConnection";


const Adopt = (props) => {
    const [step, setStep] = React.useState(0);
    const areas = [
        { label: 'Eng. De Software', value: 'Eng. De Software' },
        { label: 'Artes', value: 'Artes' },
        { label: 'Filosofia', value: 'Filosofia' },
    ];

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
                                    Ajudar com Material e Mentoria
                                </h2>
                                <h2 className="subtitleOption">
                                    Gostaria de ajudar fornecendo livros, artigos <br/> e quaisquer outros materiais que
                                    possam auxiliar no estudo do aluno, bem como auxiliá-lo no entendimento da matéria e afins.
                                </h2>
                            </div>
                            <div className="divCar" onClick={() => setStep(1)}>
                                <h2 className="titleOption">
                                    Ajudar com atividades do cotidiano acadêmico
                                </h2>
                                <h2 className="subtitleOption">
                                    Gostaria de fornecer caronas, ser guia do campus e
                                    quaisquer outros tipos de auxílios da rotina acadêmica.
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
                                <Button size="large" variant="contained" className="button" onClick={() => setStep(2)}>
                                    Avançar
                                </Button>
                            </div>

                        </div>
                    </React.Fragment>
                )
            case 2:
                return(
                    <React.Fragment>
                        <h2 className="title"> Conheça seu Aluno </h2>
                        <div className="divOptionsUser">
                            <div className="divImage">
                                <img className="image" src={user}/>
                            </div>
                            <div className="divTextImage">
                                <h2 className="titleName">David</h2>
                                <h2 className="textUser">19 anos</h2>
                                <h2 className="textUser">Engenharia Mecatrônica</h2>
                                <h2 className="textUser">Engenharia de Software e Software Básico</h2>
                            </div>
                            <div className="divButton">
                                <Button size="large" variant="contained" className="button" onClick={() => setStep(3)}>
                                    Conversar com David
                                </Button>
                            </div>
                        </div>
                    </React.Fragment>
                )
            case 3:
                return(
                    <React.Fragment>
                        <h2 className="title"> Suas conexões </h2>
                        <div className="divConnections">
                            <CardConnection image={user} name={'David'} age={19} />
                            <CardConnection image={user} name={'Cleiton'} age={23} />
                            <CardConnection image={user} name={'Jailson'} age={30} />
                            <CardConnection image={user} name={'Queilson'} age={47} />
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
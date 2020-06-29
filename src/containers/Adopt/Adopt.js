import React, {useEffect, useState} from 'react';
import './Adopt.css';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import userImg from "../../assets/img/user.png";
import CardConnection from "../../components/CardConnection/CardConnection";
import axios from "../../axios";
import Cookies from "js-cookie";
import CircularProgress from '@material-ui/core/CircularProgress';


const Adopt = (props) => {
    let {step, setStep} = props;
    const [areas, setAreas] = useState('adopt');
    const [loadingConnection, setLoadingConnection] = useState(false);
    const [loadingStudent, setLoadingStudent] = useState(false);
    const [loadingButtonAdopt, setLoadingButtonAdopt] = useState(false);
    const [connections, setConnections] = useState([]);
    const [user, setUser] = useState({
        name: 'David',
        age: 19,
        course: 'Engenharia'
    });

    useEffect(() =>{
        setAreas([
            { label: 'Eng. De Software', value: 'Eng. De Software' },
            { label: 'Artes', value: 'Artes' },
            { label: 'Filosofia', value: 'Filosofia' },
        ]);

        axios.GetAreas()
            .then((response) => {
                let areas = response.data.areas;
            })
            .catch((error) => {
                console.log(error);
            });
    },[]);

    useEffect(() =>{
        if(step === 2){
            axios.GetMatchUser()
                .then((response) => {
                    let connectios = response.data.connectios;
                    setConnections(connectios);
                    setLoadingStudent(false);
                })
                .catch((error) => {
                    setLoadingStudent(false);
                    console.log('error in match',error);
                });
        }
        else if(step === 3){
            axios.GetConnections()
                .then((response) => {
                    let connectios = response.data.connectios;
                    setConnections(connectios);
                    setLoadingConnection(false);
                })
                .catch((error) => {
                    setLoadingConnection(false);
                    console.log('error in connection',error);
                });
        }
    }, [step]);

    const adoptStudent = () =>{
        setLoadingButtonAdopt(true);
        axios.AdoptStudent()
            .then((response) => {
                let connectios = response.data.connectios;
                setConnections(connectios);
                setLoadingButtonAdopt(false);
                setStep(3);
            })
            .catch((error) => {
                setLoadingButtonAdopt(false);
                setStep(3);
                console.log('error in adopt',error);
            });
    }

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
                                <Button size="large" variant="contained" className="button"
                                        onClick={() => setStep(2)}>
                                    Avançar
                                </Button>
                            </div>

                        </div>
                    </React.Fragment>
                )
            case 2:
                return(
                    loadingStudent ? (<CircularProgress/>) :
                        (<React.Fragment>
                                <h2 className="title"> Conheça seu Aluno </h2>
                                <div className="divOptionsUser">
                                    <div className="divImage">
                                        <img className="image" src={userImg}/>
                                    </div>
                                    <div className="divTextImage">
                                        <h2 className="titleName">{user.name}</h2>
                                        <h2 className="textUser">{user.age} anos</h2>
                                        <h2 className="textUser">{user.course}</h2>
                                        <h2 className="textUser">Engenharia de Software e Software Básico</h2>
                                    </div>
                                    <div className="divButton">
                                        <Button size="large" variant="contained" className={loadingButtonAdopt ? "buttonLoading": "button"}
                                                onClick={() => adoptStudent()} disabled={loadingButtonAdopt}>
                                            Conversar com David
                                            {loadingButtonAdopt && <CircularProgress size={24} className="buttonProgress" />}
                                        </Button>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                )
            case 3:
                return(
                    <React.Fragment>
                        <h2 className="title"> Suas conexões </h2>
                        <div className="divConnections">
                            {loadingConnection ? (<CircularProgress/>): (
                                connections.map((user, index) =>{
                                    return(
                                        <CardConnection image={user.url} name={user.name} age={user.age} rating={5}/>
                                    )
                                })
                            ) }
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
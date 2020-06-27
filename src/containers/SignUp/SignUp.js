import React, { Component } from "react";
import classes from './SignUp.css';
import { Button, Form, Input } from 'element-react';
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";

class SignUp extends Component {
    state = {
        loadingSignUp: false,
        sucessSignUp: false,
        form: {
            email: '',
            password: '',
        },
        rules: {
            email: [
                { required: true, message: "Por favor, digite seu email", trigger: 'change' }
            ],
            password: [
                { required: true, message: "Por favor, digite sua senha", trigger: 'change' },
            ],
        }
    };

    componentDidMount = () => {
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSubmit(e);
        }
    };

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ loadingSignUp: true });


        this.refs.form.validate((valid) => {
            if (valid) {
                this.setState({ sucessSignUp: true });
            } else {
                this.setState({ loadingSignUp: false });
            }
        });
    }

    render() {
        return (

            <div class="div-home-page full-page">

                <MenuSuperior></MenuSuperior>


                <div >

                    <h1 class="title-home-page title-color">Cadastro</h1>


                    <div class="text-form-area">

                        <Form id="teste" htmlFor="email" className={classes.allForm} ref="form" model={this.state.form} rules={this.state.rules}>
                            <Form.Item prop="email" labelWidth="0px">
                                <Input className="inputs-sing-up" placeholder={"Email"} type="text" value={this.state.form.email} onChange={this.onChange.bind(this, 'email')} onKeyPress={this.handleKeyPress} />
                            </Form.Item>
                            <Form.Item prop="password" labelWidth="0px">
                                <Input className="inputs-sing-up" placeholder={"Senha"} type="password" value={this.state.form.password} onChange={this.onChange.bind(this, 'password')} onKeyPress={this.handleKeyPress} />
                            </Form.Item>
                        </Form>

                        <Button color="primary" loading={this.state.loadingSignUp} onClick={(e) => this.handleSubmit(e)}>Cadastrar</Button>

                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;




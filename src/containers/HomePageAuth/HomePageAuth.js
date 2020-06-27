import React, { Component } from "react";

class HomePageAuth extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        return (
            <div class="div-home-page full-page">

                <div class="info">
                    <h3 onClick={(e) => this.routeTo("about")} class="info-text float-right">Sobre</h3>
                    <h3 onClick={(e) => this.routeTo("logout")} class="info-text float-right">Sair</h3>
                </div>

                <div class="main-area">
                    <h1 class="title-home-page title-color">HomePageAuth</h1>
                    <div class="barra-azul"></div>
                </div>
            </div>
        );
    }
}

export default HomePageAuth;
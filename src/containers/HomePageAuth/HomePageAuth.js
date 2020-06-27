import React, { Component } from "react";
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";
import PaginaInicial from "../../components/PaginaInicial/PaginaInicial";

class HomePageAuth extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        return (
            <div class="div-home-page full-page">
                <MenuSuperior></MenuSuperior>
            </div>
        );
    }
}

export default HomePageAuth;
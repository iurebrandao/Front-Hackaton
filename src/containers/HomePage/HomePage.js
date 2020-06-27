import React, { Component } from "react";
// import { NavLink } from 'react-router-dom';
import MenuSuperior from "../../components/MenuSuperior/MenuSuperior";
import PaginaInicial from "../../components/PaginaInicial/PaginaInicial";

class HomePage extends Component {

    routeTo = (destiny) => {
        this.props.history.push({
            pathname: '/' + destiny,
        });
    }

    render() {
        return (
            <div class="div-home-page full-page">
                <MenuSuperior></MenuSuperior>
                <PaginaInicial></PaginaInicial>
            </div>
        );
    }
}

export default HomePage;
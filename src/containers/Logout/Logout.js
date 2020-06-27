import React, { Component } from "react";
import loading from '../../assets/gif/loading.svg'
import Cookies from "js-cookie";
import classes from './Logout.css';

class Logout extends Component {

    componentDidMount = () => {
        Cookies.remove('tk');

        setTimeout(function(){ 
            window.location.reload()
         }, 1500);
    }

    render() {
        return (
            <div class="div-page-lout-loading">
                <img class="image-loading" alt="loading" src={loading}></img>
            </div>
        );
    }
}

export default Logout;
import React from "react";
import './CardConnection.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    large: {
        width: '100%',
        height: '100%',
    },
}));

const CardConnection = (props) =>{
    let {image, name, age} = props;
    const classes = useStyles();

    return(
        <div className="cardConnection">
            <div className="divImage">
                <Avatar alt="Remy Sharp" src={image} className={classes.large} />
            </div>
            <div className="divInfo">
                <h2 className="titleCardName">{name}</h2>
                <h2 className="subTitleCard">{age} anos</h2>
                <Button size="medium" variant="contained" className="buttonCard">
                    Conversar com {name}
                </Button>
            </div>
        </div>
    )
}

export default CardConnection;


import React from "react";

import { Card } from "../Cards/CardSm";
import { Button } from "./Shared";

import classes from './Shared.css';

const  Modal = (props) => { 
  return (
    <div>
        <div className={classes.backdrop}>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button>OK</Button>
                </footer>
            </Card>
        </div>
    </div>
    );
};

export default Modal;
import React, { Fragment } from "react";
import Nav from "../Nav/Nav";

const Hoc = props => {
    return (
        <Fragment>
            <Nav />
            {props.children}
        </Fragment>
    );
};

export default Hoc;

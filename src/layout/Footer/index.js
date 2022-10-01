import React from "react";
import './style.css'

export function Footer() {


    return (
        <>
            <div className="footer">Contact Me |
                <ul className="contactList">
                    <li>Email : <a href="mailto: brad.neve@gmail.com">brad.neve@gmail.com</a></li>
                    <li>LinkedIn : <a href="https://www.linkedin.com/in/bradley-neve/" target={'blank'}>Bradley Neve</a></li>
                    <li>GitHub : <a href="https://github.com/bradneve" target={'blank'}>bradneve</a></li>
                </ul>
            </div>
        </>


    );
}

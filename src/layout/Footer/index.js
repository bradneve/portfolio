
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import './style.css'

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export function Footer() {


    return (
        <>
            <div className="footer">
            <Typography variant="h6" align="center" gutterBottom>
                        Contact Me:
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                     <a href="mailto: brad.neve@gmail.com">brad.neve@gmail.com</a>
                    LinkedIn : <a href="https://www.linkedin.com/in/bradley-neve/" target={'blank'}>Bradley Neve</a>
                    GitHub : <a href="https://github.com/bradneve" target={'blank'}>bradneve</a>
                    </Typography>
                    <Copyright />
            </div>
        </>

    );
}

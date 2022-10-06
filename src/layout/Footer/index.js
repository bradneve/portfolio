
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
                    <li>
                    <i class="fa fa-envelope" style={{color: '#cbd3e0', fontSize: '25px', padding: '5px'}}></i> <a href="mailto: brad.neve@gmail.com">brad.neve@gmail.com</a>
                    </li>
                    <li>
                    <i class="fa fa-linkedin" style={{color: '#cbd3e0', fontSize: '25px', padding: '5px'}}></i><a href="https://www.linkedin.com/in/bradley-neve/" target={'blank'}>Bradley Neve</a>
                    </li>
                    <li>
                    <i class="fa fa-github" style={{color: '#cbd3e0', fontSize: '25px', padding: '5px'}}></i> <a href="https://github.com/bradneve" target={'blank'}>bradneve</a>
                    </li>
                    </Typography>
                    <Copyright />
            </div>
        </>

    );
}

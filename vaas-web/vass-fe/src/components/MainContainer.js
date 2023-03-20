import React from 'react';
import {useState} from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginComponent from './Login/LoginComponent.js';
import Home from './Home/Home.js';

export default function MainContainer() {

    const [user, setUser] = useState({authorized: false});
    
    return (
	<React.Fragment>
	    <CssBaseline />
	    <Container style={{display: 'flex', justifyContent: 'center'}}>
		{ !user.authorized ?
		  (<LoginComponent setUser={setUser} />)
		  : (<Home user={user} setUser={setUser}/>) }
	    </Container>
	</React.Fragment>
    );
}

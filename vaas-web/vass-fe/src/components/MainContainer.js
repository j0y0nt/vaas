import React from 'react';
import {useState} from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginComponent from './Login/LoginComponent.js';

import VaasAppBar from './AppBar/VaasAppBar.js';
import {Outlet, useLocation } from 'react-router-dom';

export default function MainContainer() {

    const [user, setUser] = useState({authorized: false});
    const { pathname } = useLocation();
    
    return (
	<React.Fragment>
	    <CssBaseline />
	    <Container style={{
			   display: 'flex',
			   justifyContent: 'center',
			   flexDirection: 'column'
		       }}>
		<VaasAppBar user={user} setUser={setUser} />
		{ pathname === "/" &&
		  (<LoginComponent user={user} setUser={setUser} />)
		}
		
		<Outlet />
	    </Container>
	</React.Fragment>
    );
}

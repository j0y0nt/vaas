import Container from '@mui/material/Container';
import {Outlet} from 'react-router-dom';
import VspDashboard from '../Vsp/VspDashboard.js';
import { useLocation } from 'react-router-dom';

export default function Home() {
    const { state } = useLocation();
    console.log(state.user);
    
    return (
	    <Container>
	    <Outlet />
	</Container>
    );
}

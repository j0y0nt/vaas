import Container from '@mui/material/Container';
import {Outlet} from 'react-router-dom';
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

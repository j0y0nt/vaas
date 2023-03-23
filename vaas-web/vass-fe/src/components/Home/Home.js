import Container from '@mui/material/Container';
import {Outlet} from 'react-router-dom';

export default function Home({user, setUser}) {
    
    return (
	    <Container>
	    { user && (
		    <>
		    <Outlet />
		    </>
	    )}
	</Container>
    );
}

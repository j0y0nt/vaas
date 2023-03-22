import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Outlet} from 'react-router-dom';

export default function Home({user, setUser}) {
    
    return (
	    <Container>
	    { user && (
		<>
		    <Typography variant="h5" gutterBottom>
		    I am home. Hello {user.name}!
		</Typography>
		    <Outlet />
		    </>
	    )}
	</Container>
    );
}

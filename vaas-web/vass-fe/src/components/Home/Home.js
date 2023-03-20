import Container from '@mui/material/Container';
import VaasAppBar from '../../components/AppBar/VaasAppBar.js';
import Typography from '@mui/material/Typography';

export default function Home({user, setUser}) {
    
    return (
	    <Container>
	    <VaasAppBar user={user} setUser={setUser} />
	    
	    <Typography variant="h5" gutterBottom>
            I am home. Hello {user.name}!
	</Typography>
	</Container>
    );
}

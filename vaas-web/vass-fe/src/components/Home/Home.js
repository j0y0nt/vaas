import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import {Outlet} from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

export default function Home({user, setUser}) {
    
    return (
	    <Container>
	    { user && (
		    <>
		    <Box
		sx={{
		    display: 'flex',
		    flexWrap: 'wrap',
		    '& > :not(style)': {
			m: 1,
			width: 256,
			height: 64,
		    },
		}}
		    >
		    <Paper elevation={3}
		style={{
		    backgroundColor: '#2a356b',
		    color: '#ffffff',
		    display: 'flex',
		    justifyContent: 'center',
		    alignItems: 'center',
		}}>
		    <Typography variant="h6" gutterBottom>
		    Hello {user.name}!
		</Typography>
		    </Paper>
		    </Box>
		    
		    <Outlet />
		    </>
	    )}
	</Container>
    );
}

import {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function LoginComponent({setUser}){
    const [signup, setSignup] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    function handleLogin() {
	if(username !== '' && username.length > 0 &&
	   password !== '' && password.length > 0) {
	    setUser(state => {
		const user = Object.assign({}, state);
		user['authorized'] = true;
		user['name'] = username;
		return user;
	    });
	    navigate("/home", {replace: true});
	}
    }
    
    return (
	    <Container style={{margin: '5px',padding: '10px', width: '500px'}}>
	    <Box style={{display:'flex', flexDirection: 'column', alignItems: 'center'}}>
	    <Avatar>
	    <LockOutlinedIcon />
	    </Avatar>
	    <Typography variant="h5" gutterBottom>
            { signup? 'Signup' : 'Login' }
	</Typography>
	    
	    <form>
	    <Grid container spacing={2}>
            <Grid item xs={12}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField fullWidth  id="outlined-basic" label="Email"
	defaultValue={username}
	variant="outlined" onChange={e => setUsername(e.target.value)}/>
	    </FormControl>
	    </Box>
            </Grid>
	    
            <Grid item xs={12}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField id="outlined-basic" label="Password" defaultValue={password}
	type="password" variant="outlined" onChange={e => setPassword(e.target.value)}/>
	    </FormControl>
	    </Box>
            </Grid>

	{ signup && (
	       <Grid item xs={12}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField id="outlined-basic" label="Confirm Password" variant="outlined" />
	    </FormControl>
	    </Box>
            </Grid>
		
	)    
	}
	{ !signup && (
	    <>
	    <Grid item xs={6}>
	    <Box style={{width: '100%'}}>
	    <FormControl style={{width: '100%'}}>
		<Button variant="contained" onClick={e => handleLogin()}>Login</Button>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item xs={6}>
	    <Box style={{width: '100%'}}>
	    <FormControl style={{width: '100%'}}>
	    <Button variant="contained" onClick={e => setSignup(signup => true)}>SIGNUP</Button>
	    </FormControl>
	    </Box>
		</Grid>
		</>
	)}
	
	{ signup && (
	    <>
	    <Grid item xs={6}>
	    <Box style={{width: '100%'}}>
	    <FormControl style={{width: '100%'}}>
	    <Button variant="contained" onClick={e => setSignup(signup => false)}>Cancel</Button>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item xs={6}>
	    <Box style={{width: '100%'}}>
	    <FormControl style={{width: '100%'}}>
	    <Button variant="contained">Register</Button>
	    </FormControl>
	    </Box>
		</Grid>
		</>
	)}
	    </Grid>
	    </form>
	</Box>
	</Container>
    );
}

import {useState} from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';

export default function LoginComponent({user, setUser}){
    const [signup, setSignup] = useState(false);
    
    const navigate = useNavigate();

    const validate = values => {

	const errors = {};
	
	if (!values.email) {
	    errors.email = 'Required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
	    errors.email = 'Invalid email address';
	}
	
	if (!values.password) {
	    errors.password = 'Password is required';
	} else if (values.password.length < 8) {
	    errors.password = 'Must be 8 characters or more';
	}
	return errors;
    };

    const formik = useFormik({
	
	initialValues: {
	    email: '',
	    password: ''
	},
	validate,
	onSubmit: values => handleLogin(values),
    });
    
    function handleLogin(userInfo) {
	
	setUser(state => {
	    const user = Object.assign({}, state);
	    user['authorized'] = true;
	    user['email'] = userInfo.email;
	    return user;
	});
	navigate("/home", {replace: true});
    }
    
    return (
	    <Container style={{margin: '5px',padding: '10px', width: '500px'}}>
	    
	    <Box style={{display:'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px'}}>
	    <Avatar>
	    <LockOutlinedIcon />
	    </Avatar>
	    <Typography variant="h5" gutterBottom>
            { signup? 'Signup' : 'Login' }
	</Typography>
	    
	    <form onSubmit={formik.handleSubmit}>
	    <Grid container spacing={2}>
            <Grid item xs={12}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    
	    <TextField fullWidth  id="outlined-email" label="Email"
	type="email" required  name="email"
	onChange={formik.handleChange} value={formik.values.email}
	variant="outlined" />
	    
	{formik.errors.email ?
	 <FormHelperText error id="my-helper-text">
	 {formik.errors.email}
	 </FormHelperText>
	 : null}
	</FormControl>
	    </Box>
            </Grid>
	    
            <Grid item xs={12}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField id="outlined-pswd" label="Password"
	onChange={formik.handleChange}
	name="password"
        value={formik.values.password}
	type="password" required variant="outlined" />
	    {formik.errors.password ?
	 <FormHelperText error id="my-helper-text">
	 {formik.errors.password}
	 </FormHelperText>
	 : null}
	    </FormControl>
	    </Box>
            </Grid>

	{ signup && (
	       <Grid item xs={12}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
		<TextField id="outlined-cpswd" label="Confirm Password"
	    type="password" variant="outlined" />
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
		<Button variant="contained" type="submit"
	    >Login</Button>
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
		<Button variant="contained" type="submit"
	    onClick={e => setSignup(signup => false)}>Cancel</Button>
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

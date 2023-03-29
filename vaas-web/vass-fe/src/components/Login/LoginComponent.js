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
import { client } from '../../Api.js';
import Alert from '@mui/material/Alert';

export default function LoginComponent({user, setUser}){
    const [, setSignup] = useState(false);
    const [error, setError] = useState(false);
    const [errMsg, setErrorMessage] = useState('');
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
	client.post('/users/auth', userInfo)
	    .then(function (response) {

		setUser(state => {
		    const user = response.data;
		    //console.log(response.data);
		    navigate("/home", {state: {user: user}}, {replace: true});
		    return user;
		});

	    })
	    .catch(function (error) {
		setUser(state => {
		    const user = Object.assign({}, state);
		    user['authorized'] = false;
		    user['email'] = userInfo.email;
		    return user;
		});
		if(error.code === 'ECONNABORTED') {
		    setErrorMessage(errMsg => "We're having difficulty connecting to our server. Please try again or try again later if error continues.");
		}
		setError(error => true);
		
		navigate("/", {replace: true});
	    });
	
    }

    function handleSignup(e) {
	setSignup(signup => !signup);
	navigate('signup', {replacE: true});
    }
    
    return (
	    <Container
	style={{margin: '5px',padding: '10px', width: '500px'}}>
	    <Box
	style={{display:'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px'}}>
	    <Avatar>
	    <LockOutlinedIcon />
	    </Avatar>
	    <Typography variant="h5" gutterBottom>
            Login
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
	    { error && (
	    <Grid item xs={12}>
	    <Box style={{width: '100%'}}>
            <Alert variant="outlined" severity="error">
		    {errMsg}
	</Alert>
	    </Box>
            </Grid>
	    )}
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
	    <Button variant="contained" onClick={e => handleSignup(e) }>SIGNUP</Button>
	    </FormControl>
	    </Box>
	    </Grid>
	    </>
	    </Grid>
	    </form>
	    </Box>
	    </Container>
    );
}

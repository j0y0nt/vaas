import {useState} from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

export default function UserProfile() {

    const [userinfo, setUserInfo] = useState({
	firstname: '',
	middlename: '',
	lastname: '',
	prefix: '',
	suffix: '',
	gender: '',
	primaryContact: '',
	secondaryContact: '',
    });
    
    return (
	    <Container style={{margin: '5px',padding: '10px'}}>
	    
	    <Box style={{display:'flex', flexDirection: 'column',
			 alignItems: 'center', paddingTop: '20px'}}>
	    <Typography variant="h5">
	    Welcome user!
	</Typography>
	    </Box>

	    <Box style={{display:'flex',  alignItems: 'center', paddingTop: '20px'}}>

	    <form>

	    <Grid container spacing={2}>

	    <Grid item sm={12} md={4} xs={12}> 
	    <Box style={{width: '100%', display: 'flex', flex: 1}}>
            <FormControl style={{width: '100%'}}>
	    <TextField  id="outlined-prefix" label="Prefix"
	defaultValue={userinfo.firstname}
	variant="outlined"
	onChange={e => {
	    setUserInfo({
		...userinfo,
		prefix: e.target.value
	    });}}
	    />
	    </FormControl>
	    </Box>
            </Grid>
	    <Grid item sm={4} md={8} />
	    
	    <Grid item sm={4} md={4} xs={12}>
	    <Box style={{width: 'inherit'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField fullwidth  id="outlined-fn" label="Firstname"
	defaultValue={userinfo.firstname}
	variant="outlined" onChange={e => {
	    setUserInfo({
		...userinfo,
		firstname: e.target.value
	    });
	}}/>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item md={4} md={4} xs={12}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField  id="outlined-mn" label="Middlename"
	defaultValue={userinfo.firstname}
	variant="outlined" onChange={e => {
	    setUserInfo({
		...userinfo,
		middlename: e.target.value
	    });
	}}/>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item xs={12} md={4}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField  id="outlined-ln" label="Lastname"
	defaultValue={userinfo.firstname}
	variant="outlined" onChange={e => {
	    setUserInfo({
		...userinfo,
		lastname: e.target.value
	    });
	}}/>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item xs={12} md={4}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField  id="outlined-sfx" label="Suffix"
	defaultValue={userinfo.suffix}
	variant="outlined" onChange={e => {
	    setUserInfo({
		...userinfo,
		suffix: e.target.value
	    });
	}}/>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item xs={12} md={3}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField  id="outlined-gender" label="Gender"
	defaultValue={userinfo.gender}
	variant="outlined" onChange={e => {
	    setUserInfo({
		...userinfo,
		gender: e.target.value
	    });
	}}/>
	    </FormControl>
	    </Box>
            </Grid>
	    <Grid item sm={0} md={12} />

	    <Grid item xs={12} md={4}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField  id="outlined-prm" label="Primary"
	defaultValue={userinfo.primaryContact}
	variant="outlined" onChange={e => {
	    setUserInfo({
		...userinfo,
		primaryContact: e.target.value
	    });}}/>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item xs={12} md={4}>
	    <Box style={{width: '100%'}}>
            <FormControl style={{width: '100%'}}>
	    <TextField id="outlined-sndry" label="Secondary"
	defaultValue={userinfo.secondaryContact}
	variant="outlined" onChange={e => {
	    setUserInfo({
		...userinfo,
		secondaryContact: e.target.value
	    });
	}}/>
	    </FormControl>
	    </Box>
            </Grid>

	    <Grid item xs={12} md={12}>
	    <Box>
            <FormControl>
	    <Button variant="contained">Register</Button>
	</FormControl>
	    </Box>
            </Grid>

	</Grid>
	    </form>
	    </Box>
	    </Container>
    );
}

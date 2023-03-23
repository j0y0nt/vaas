import {useState} from 'react';
//import { useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { VaasTextField } from '../../components/common/VaasComponents.js';
import { client } from '../../Api.js';

export default function UserProfile() {
    
    const [userinfo, setUserInfo] = useState({
	first_name: '',
	middle_name: '',
	last_name: '',
	prefix: '',
	suffix: '',
	gender: '',
	primary_contact: '',
	secondary_contact: '',
    });
    console.log(userinfo);
    
    function updateUserInfo(e) {
	 client.post('/users/info', userinfo)
	    .then(function (response) {
		console.log(response);
	    })
	    .catch(function (error) {
		console.log(error);
	    });
    }

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
	    <VaasTextField field="prefix" label="Prefix" obj={userinfo}
	updater={setUserInfo} />
            </Grid>
	    <Grid item sm={4} md={8} />
	    
	    <Grid item sm={4} md={4} xs={12}>
	    <VaasTextField field="first_name" label="Firstname" obj={userinfo}
	updater={setUserInfo} />
	    </Grid>

	    <Grid item md={4} xs={12}>
	    <VaasTextField field="middle_name" label="Middlename" obj={userinfo}
	updater={setUserInfo} />
	    </Grid>

	    <Grid item xs={12} md={4}>
	    <VaasTextField field="last_name" label="Lastname" obj={userinfo}
	updater={setUserInfo} />
	    </Grid>

	    <Grid item xs={12} md={4}>
	    <VaasTextField field="suffix" label="Suffix" obj={userinfo}
	updater={setUserInfo} />
	    
            </Grid>

	    <Grid item xs={12} md={3}>
	    <VaasTextField field="gender" label="Gender" obj={userinfo}
	updater={setUserInfo} />
            </Grid>
	    
	    <Grid item sm={0} md={12} />

	    <Grid item xs={12} md={4}>
	    <VaasTextField field="primary_contact" label="Primary Contact No." obj={userinfo}
	updater={setUserInfo} />
            </Grid>

	    <Grid item xs={12} md={4}>
	    <VaasTextField field="secondary_contact" label="Secondary Contact No."
	obj={userinfo} updater={setUserInfo} />
            </Grid>

	    <Grid item xs={12} md={12}>
	    <Box>
            <FormControl>
	    <Button variant="contained" onClick={e =>updateUserInfo(e)} >Save</Button>
	</FormControl>
	    </Box>
            </Grid>

	</Grid>
	    </form>
	    </Box>
	    </Container>
    );
}

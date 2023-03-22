import {useState} from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { VaasTextField } from '../../components/common/VaasComponents.js';

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
    console.log(userinfo);
    
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
	    <VaasTextField field="firstname" label="Firstname" obj={userinfo}
	updater={setUserInfo} />
	    </Grid>

	    <Grid item md={4} xs={12}>
	    <VaasTextField field="middlename" label="Middlename" obj={userinfo}
	updater={setUserInfo} />
	    </Grid>

	    <Grid item xs={12} md={4}>
	    <VaasTextField field="lastname" label="Lastname" obj={userinfo}
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
	    <VaasTextField field="primaryContact" label="Primary Contact No." obj={userinfo}
	updater={setUserInfo} />
            </Grid>

	    <Grid item xs={12} md={4}>
	    <VaasTextField field="secondaryContact" label="Secondary Contact No."
	obj={userinfo} updater={setUserInfo} />
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

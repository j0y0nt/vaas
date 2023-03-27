import {useState} from 'react';
import { useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Button from '@mui/material/Button';
import { VassFormikTextField , VassFormikSelectField }from '../../components/common/VaasComponents.js';
import { client } from '../../Api.js';
import { useFormik } from 'formik';

export default function UserProfile() {
    const userProfile = {
	first_name: '',
	middle_name: '',
	last_name: '',
	prefix: '',
	suffix: '',
	gender: '',
	primary_contact: '',
	secondary_contact: '',
    };

    const [userInfo, setUserInfo] = useState(userProfile);

    const prefixes =  [
	{
	    value: 'Mr',
	    label: 'Mr',
	},
	{
	    value: 'Mrs',
	    label: 'Mrs',
	},
	{
	    value: 'Miss',
	    label: 'Miss',
	},
	{
	    value: 'Mx',
	    label: 'Mx',
	},
	{
	    value: 'Dr',
	    label: 'Dr',
	},

    ];


    const genders = [
	{
	    value: 'M',
	    label: 'Male',
	},
	{
	    value: 'F',
	    label: 'Female',
	},
	{
	    value: 'O',
	    label: 'Other',
	},
    ];

    const validate = values => {
	
	const errors = {};
	
	if (!values.first_name) {
	    errors.first_name = 'First name is required.';
	} else if (values.first_name.length > 40) {
	    errors.first_name = 'Must be 40 characters or less';	    
	}

	if (!values.last_name) {
	    errors.last_name = 'Required';
	} else if (values.last_name.length > 40) {
	    errors.last_name = 'Must be 40 characters or less';    
	}

	if (!values.primary_contact) {
	    errors.primary_contact = 'Required';
	} else if (values.primary_contact.length > 20) {
	    errors.last_name = 'Must be 20 characters or less';    
	}

	return errors;

    };
    
    const formik = useFormik({
	enableReinitialize: true,
	initialValues: userInfo,
	validate,
	onSubmit: values => updateUserInfo(values),
    });
    
    useEffect(() => {
	let ignore = false;
	setUserInfo(userProfile);
	client.get('/users/info/1')
	    .then(function (response) {
		if (!ignore) {
		    setUserInfo(response.data);
		}
	    })
	    .catch(function (error) {
		console.log(error);
	    });
	return () => {
	    ignore = true;
	}
    }, []);
    
    function updateUserInfo(userData) {
	client.put('/users/info/1', userData)
	    .then(function (response) {
		setUserInfo(userProfile);
		setUserInfo(response.data);
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

	    <form onSubmit={formik.handleSubmit}>

	    <Grid container spacing={2}>
	    
	    <Grid item sm={12} md={4} xs={12}>	    
	    <VassFormikSelectField field="prefix" label="Prefix"
	onChangeHandler={formik.handleChange} value={formik.values.prefix}
	options={prefixes}/>
            </Grid>
	    <Grid item sm={4} md={8} />
	    
	    <Grid item sm={4} md={4} xs={12}>
	    
	<VassFormikTextField fullWidth  field="first_name" label="Firstname"
	onChangeHandler={formik.handleChange} value={formik.values.first_name}
	required={true}
	/>

	{formik.errors.first_name  ?
	    <FormHelperText error id="my-helper-text">
	    {formik.errors.first_name}
	</FormHelperText>
	    : null}
    
	    </Grid>

	    <Grid item md={4} xs={12}>
	    <VassFormikTextField fullWidth  field="middle_name" label="Middlename"
	onChangeHandler={formik.handleChange} value={formik.values.middle_name}
	    />
	    </Grid>

	    <Grid item xs={12} md={4}>
	    <VassFormikTextField fullWidth  field="last_name" label="Lastname"
	required={true}
	onChangeHandler={formik.handleChange} value={formik.values.last_name}
	    />
	    {formik.errors.last_name  ?
	     <FormHelperText error id="my-helper-text">
	     {formik.errors.last_name}
	     </FormHelperText>
	     :null}
	    </Grid>

	    <Grid item xs={12} md={4}>
	    <VassFormikTextField fullWidth  field="suffix" label="Suffix"
	onChangeHandler={formik.handleChange} value={formik.values.suffix}
	/>	    
            </Grid>

	    <Grid item xs={12} md={3}>
	    <VassFormikSelectField fullWidth  field="gender" label="Gender"
	onChangeHandler={formik.handleChange} value={formik.values.gender}
	options={genders}
	/>
            </Grid>
	    
	    <Grid item sm={0} md={12} />

	    <Grid item xs={12} md={4}>
	    <VassFormikTextField fullWidth  field="primary_contact" required={true} label="Primary Contact No."
	onChangeHandler={formik.handleChange} value={formik.values.primary_contact}
	    />
	    {formik.errors.primary_contact  ?
	     <FormHelperText error id="my-helper-text">
	     {formik.errors.primary_contact}
	     </FormHelperText>
	     :null}
            </Grid>

	    <Grid item xs={12} md={4}>
	    <VassFormikTextField fullWidth  field="secondary_contact" label="Secondary Contact No."
	onChangeHandler={formik.handleChange} value={formik.values.secondary_contact}
	/>
            </Grid>

	    <Grid item xs={12} md={12}>
	    <Box>
            <FormControl>
	    <Button variant="contained" type="submit" >Save</Button>
	</FormControl>
	    </Box>
            </Grid>

	</Grid>
	    </form>
	    </Box>
	    </Container>
    );
}

import './UserProfile.css';
import {useState} from 'react';
import { useEffect } from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { client } from '../../Api.js';
import { useLocation } from 'react-router-dom';
import { UserInfoPanel }  from './UserInfoPanel.js';
import { UserInfoForm } from './UserInfoForm.js';

export default function UserProfile() {
    const [edit, setEdit] = useState(false);
    const { state } = useLocation();
    //console.log(state);
    const [userId, ] = useState(state[0].user.id);

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
        
    useEffect(() => {
	let ignore = false;
	//setUserInfo(userProfile);
	client.get('/users/info/' + userId)
	    .then(function (response) {

		if (!ignore && response.data.length !== 0) {
		    setUserInfo(response.data);
		}
	    })
	    .catch(function (error) {
		// request failed. Inform user.
		console.log(error);
	    });
	return () => {
	    ignore = true;
	}
    }, [userId]);
    
    return (
	    <Container style={{margin: '5px',padding: '10px'}}>
	    <Box style={{display:'flex', flexDirection: 'row', marginBottom: '20px',
			 justifyContent: 'space-between', paddingTop: '10px'}}>
	    <Typography variant="h5">
	    Welcome {state[0].user.username}.
	    </Typography>

	    <Button variant="contained" type="submit" onClick={() => {setEdit(edit => !edit)}}>
	    {edit ? "Cancel" : "Edit"}
	</Button>
	    </Box>
	    { edit ?
	      (
		      <UserInfoForm userInfo={userInfo} setUserInfo={setUserInfo}
		   />
              )
	      :
	      (
		      <UserInfoPanel userInfo={userInfo} />
	      )
	    }
	    
	    </Container>
    );
}

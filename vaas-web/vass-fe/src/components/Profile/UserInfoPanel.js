import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

export function UserInfoPanel({userInfo}) {
    
    const genderMap = new Map([['M', 'Male'], ['F', 'Female'], ['O', 'Other']]);
   
    return (
	    <Box>
	    <Paper style={{backgroundColor: '#ede8f7'}}>
	    <div className="UserInfoDiv">
	    <div>Name </div>
	    <div>{userInfo.prefix} {userInfo.first_name} {userInfo.middle_name} {userInfo.last_name} {userInfo.suffix}
	</div>
	    </div>
	    <Divider />
	    <div className="UserInfoDiv">
	    <div>
	    Gender
	</div>
	    <div>
	    {genderMap.get(userInfo.gender)}
	</div> 
	    </div>
	    <Divider />
	    <div className="UserInfoDiv">
	    <div>
	    Primary Contact
	</div> <div>
	    {userInfo.primary_contact}
	</div>
	    </div>
	    <Divider />
	    <div className="UserInfoDiv">
	    <div>
	    Secondary Contact
	</div>
	    <div>
	    {userInfo.secondary_contact}
	</div>
	    </div>
	    </Paper>
	    </Box>
    );
}

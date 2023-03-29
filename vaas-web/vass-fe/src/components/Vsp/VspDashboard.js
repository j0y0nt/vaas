import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import VspVehicles from '../Vsp/VspVehicles.js';
import VspBookings from '../Vsp/VspBookings.js';
import VspEarnings from '../Vsp/VspEarnings.js';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useOutletContext } from 'react-router-dom';
import Paper from '@mui/material/Paper';

export default function VspDashboard() {
    const [user] = useOutletContext();
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
	setValue(newValue);
    };

    function VspTabs() {

	return (
	    <>
		<Box style={{paddingTop: '10px'}}>
		    <Paper style={{height: 60, width: 100, display: 'flex',
				   alignItems: 'center', 
				   justifyContent: 'center', marginX: 5}}>Hi, {user.username}
		    </Paper>
		</Box>
	    <TabContext value={value}>
		<Box
		    sx={{ borderBottom: 1, borderColor: 'divider' }}>
		    <TabList
			onChange={handleChange} aria-label="lab API tabs example">
			<Tab label="Vehicles" value="1" />
			<Tab label="Bookings" value="2" />
			<Tab label="Earnings" value="3" />
		    </TabList>
		</Box>
		<TabPanel value="1">
		    <VspVehicles />
		</TabPanel>
		<TabPanel value="2">
		    <VspBookings />
		</TabPanel>
		<TabPanel value="3">
		    <VspEarnings />
		</TabPanel>
	    </TabContext>
	    </>
	);
    }
    
    return (
	    <Container>
		<Box
		    sx={{ width: '100%' }}>
		    <VspTabs />
		</Box>
	    </Container>
    );
}

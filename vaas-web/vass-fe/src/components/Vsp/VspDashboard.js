import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function VspDashboard() {

    const [value, setValue] = React.useState('vehicles');

    const handleChange = (event, newValue) => {
	setValue(newValue);
    };
    
    return (
	    <Container>
	    <Box sx={{ width: '100%' }}>
	    <Tabs
        value={value}
        onChange={handleChange}
        aria-label="VSP utilities"
	    >
            <Tab value="vehicles" label="Vehicles" />
            <Tab value="bookings" label="Bookings" />
            <Tab value="earnings" label="Earnings" />
	    </Tabs>
	    </Box>
	    </Container>
    );
}

import {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

export const VaasTextField = ({field, label, obj, updater, defaultValue}) => {
    
    return (
	<Box style={{width: '100%', display: 'flex', flex: 1}}>
            <FormControl style={{width: '100%'}}>
	    <TextField  name={field} id={'outlined-' + field} label={label}
	value={obj[field]}
	variant="outlined"
	onChange={e => {
	    const fieldName = e.target.name;
	    updater({
		...obj,
		[fieldName]: e.target.value
	    });}}
	    />
	    </FormControl>
	    </Box>
    )
}

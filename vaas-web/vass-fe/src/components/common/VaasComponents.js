import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';

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

export const VassFormikTextField = ({field, label, value, required, onChangeHandler}) => {
    
    return (
	    <Box style={{width: '100%', display: 'flex', flex: 1}}>
            <FormControl style={{width: '100%'}}>
	    <TextField fullWidth  id={'outlined-' + field} label={label}
	type="text" name={field} required={required}
	onChange={onChangeHandler} value={value}
	variant="outlined" />
	    </FormControl>
	    </Box>
    )
}

export const VassFormikSelectField = ({field, label, value, required, onChangeHandler, options}) => {
    
    return (
	    <Box style={{width: '100%', display: 'flex', flex: 1}}>
            <FormControl style={{width: '100%'}}>
	    <TextField fullWidth  id={'outlined-' + field} label={label}
	type="text" name={field} required={required} select
	onChange={onChangeHandler} 
	SelectProps={{
            value: value
          }}
	variant="outlined">
	    {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
	    </TextField>
	    </FormControl>
	    </Box>
    )
}

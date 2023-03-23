import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useNavigate } from "react-router-dom";
import { Link as RouterLink} from 'react-router-dom';

export default function VaasAppBar({user, setUser}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

   
    const handleMenu = (event) => {
	setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
	setAnchorEl(null);
    };
    
    const handleLogout = () => {
	setUser(state => {
	    return {authorized: false}
	});
	handleClose();
	navigate("/", {replace: true});
    };

    return (
	<Box sx={{ flexGrow: 1 }}>
	    <AppBar position="static">
		<Toolbar>
		    <IconButton
			size="large"
			edge="start"
			color="inherit"
			aria-label="menu"
			sx={{ mr: 2 }}
		    >
			<MenuIcon />
		    </IconButton>
		    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
			Vaas
		    </Typography>
		    {user && user.authorized && (
			<div>
			    <IconButton
				size="large"
				aria-label="account of current user"
				aria-controls="menu-appbar"
				aria-haspopup="true"
				onClick={handleMenu}
				color="inherit"
			    >
				<AccountCircle />
			    </IconButton>
			    <Menu
				id="menu-appbar"
				anchorEl={anchorEl}
				anchorOrigin={{
				    vertical: 'top',
				    horizontal: 'right',
				}}
				keepMounted
				transformOrigin={{
				    vertical: 'top',
				    horizontal: 'right',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
			    >
				<MenuItem onClick={handleClose}
					  component={RouterLink} to="/profile" >
				    Profile
				</MenuItem>
				<MenuItem onClick={handleLogout}>Logout</MenuItem>
			    </Menu>
			</div>
		    )}
		</Toolbar>
	    </AppBar>
	</Box>
    );
}

import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { client } from '../../Api.js';

export default function VspVehicles() {
    
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
	let ignore = false;
	setVehicles([]);
	client.get('/vehicles/')
	    .then(function (response) {
		if (!ignore) {
		    setVehicles(response.data);
		}
	    })
	    .catch(function (error) {
		console.log(error);
	    });
	return () => {
	    ignore = true;
	}
    }, []);

    const columns = [
	{ id: 'brand', label: 'Brand', minWidth: 100 },
	{ id: 'model', label: 'Model', minWidth: 100 },
	{
	    id: 'rn',
	    label: 'RN',
	    minWidth: 100,
	    align: 'right',
	    format: (value) => value.toLocaleString('en-US'),
	},
	{
	    id: 'distance',
	    label: 'Distance',
	    minWidth: 100,
	    align: 'right',
	    format: (value) => value.toFixed(2),
	},
    ];
    
    function VehicleTable() {
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(10);
	
	const handleChangePage = (event, newPage) => {
	    setPage(newPage);
	};
	
	const handleChangeRowsPerPage = (event) => {
	    setRowsPerPage(+event.target.value);
	    setPage(0);
	};
	
	return (
	    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
		<TableContainer sx={{ maxHeight: 440 }}>
		    <Table stickyHeader aria-label="vehicle table">
			<TableHead>
			    <TableRow>
				{columns.map((column) => (
				    <TableCell
					key={column.id}
					align={column.align}
					style={{ minWidth: column.minWidth }}
				    >
					{column.label}
				    </TableCell>
				))}
			    </TableRow>
			</TableHead>
			<TableBody>
			    {vehicles
			     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
			     .map((row) => {
				 return (
				     <TableRow hover role="checkbox" tabIndex={-1} key={row.rn}>
					 {columns.map((column) => {
					     const value = row[column.id];
					     return (
						 <TableCell key={column.id} align={column.align}>
						     {column.format && typeof value === 'number'
						      ? column.format(value)
						      : value}
						 </TableCell>
					     );
					 })}
				     </TableRow>
				 );
			     })}
			</TableBody>
		    </Table>
		</TableContainer>
		<TablePagination
		    rowsPerPageOptions={[10, 25, 100]}
		    component="div"
		    count={vehicles.length}
		    rowsPerPage={rowsPerPage}
		    page={page}
		    onPageChange={handleChangePage}
		    onRowsPerPageChange={handleChangeRowsPerPage}
		/>
	    </Paper>
	);
    }

    return (
	<VehicleTable />
    );
}



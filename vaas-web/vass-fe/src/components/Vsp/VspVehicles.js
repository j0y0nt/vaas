import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function VspVehicles() {

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
    
    function createData(brand, model, rn, distance) {
	return { brand, model, rn, distance};
    }

    const rows = [
	createData('Tata', 'Indica', 'TA IND 1354', 7263),
	createData('Tata', 'Safari', 'TA SFR 0365', 6961),
	createData('Maruti', 'Alto', 'MA ALT 3973', 1340),
	createData('Maruti', 'WagonR', 'MA WGR 7434', 98335),
	createData('Maruti', 'Swift', 'MA SFT 2103', 9970),
	createData('Maruti', 'Dezire', 'MA DZR 5400', 7024),
	createData('Hyundai', 'Grand i10', 'HY I10 9200', 5758),
	createData('Hyundai', 'i20', 'HY I20 7000', 70273),
	createData('Hyundai', 'Verna', 'HY VRN 7691', 1950),
	createData('Hyundai', 'Tucson', 'HY TSN 7020', 3973),
	createData('Honda', 'City', 'HND CTY 2022', 6719),
	createData('Honda', 'Amaze', 'HND AMZ 5757', 2495),
	createData('Honda', 'WR-V', 'HND WRV 3744', 17046),
	createData('Toyota', 'Glanza', 'TYT GLN 2417', 9368),
	createData('Toyota', 'Fortuner', 'TYT FRT 7125', 85767),
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
			    {rows
			     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
			     .map((row) => {
				 return (
				     <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
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
		    count={rows.length}
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



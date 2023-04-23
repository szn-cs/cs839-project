import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function MyApp() {
    let leaders = [{"name":"Matthew","value":25},{"name":"Joe","value":55}, {"name":"Bob","value":1}]
    const compareByValue = (a, b) => {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      } else {
        return 0;
      }
    };
    leaders.sort(compareByValue);
    return (
        <div>
          <Button variant="contained">Hello World</Button>

        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="right">Total Tokens Bought</TableCell>

                  </TableRow>
                </TableHead>
                <TableBody>
                  {leaders.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.value}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
import * as React from 'react'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Web3 from 'web3'
import { updateLeaderboardData, getSampleUsers } from './dao.js'

export default function MyApp() {
    const ROWLIMIT = 10

    const compareByValue = (a, b) => {
        if (a.value > b.value) {
            return -1
        } else if (a.value < b.value) {
            return 1
        } else {
            return 0
        }
    }

    //    console.log(Dao())
    //    console.log(Dao2())
    ////    console.log(getSampleUsers())
    //     let leaders = [{"name":"Matthew","message":"I'm the best", "value":25},
    //        {"name":"Joe","message":"I'm the best","value":55},
    //        {"name":"Bob","message":"I'm the best","value":1}]

    let leaders = getSampleUsers()
    leaders.sort(compareByValue)
    return (
        <div>
            <TableContainer
                component={Paper}
                sx={{
                    margin: 5,
                    width: 'auto',
                }}
            >
                <Table
                    sx={{
                        minWidth: 650,
                    }}
                    aria-label="simple table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Message</TableCell>
                            <TableCell align="right">
                                Total Tokens Bought
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {leaders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{
                                    '&:last-child td, &:last-child th': {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.message}
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button
                sx={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: 5,
                }}
                variant="contained"
            >
                Refresh
            </Button>
        </div>
    )
}

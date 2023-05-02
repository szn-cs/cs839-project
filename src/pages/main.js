import React, { useEffect, useState, useRef, useCallback } from 'react'
import Button from '@mui/material/Button'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin'
import { contract } from '../config.js'
import Link from '@mui/material/Link'

import Web3 from 'web3'

import * as dao from '../api/dao.js'

export default function MyApp() {
    const ROWLIMIT = 10

    const [leaders, setLeaders] = useState([])
    let [contractAddress, setContractAddress] = useState([])
    const [isSending, setIsSending] = useState(false)
    const isMounted = useRef(true)

    const fetchData = () => {
        dao.getLeaders().then((list) => {
            list.sort(compareByValue)
            setLeaders(list)
        })

        dao.test()
    }

    useEffect(() => {
        fetchData()
        setContractAddress(contract.address)
        isMounted.current = true
    }, [])

    const sendRequest = useCallback(async () => {
        console.log('Refetching !')
        // don't send again while we are sending
        if (isSending) return
        // update state
        setIsSending(true)

        await dao.getLeaders().then((list) => {
            list.sort(compareByValue)
            setLeaders(list)
        })

        await dao.test()

        // once the request is sent, update state again
        if (isMounted.current)
            // only update if we are still mounted
            setIsSending(false)
    }, [isSending]) // update the callback if the state changes

    const compareByValue = (a, b) => {
        if (a.value > b.value) {
            return 1
        } else if (a.value < b.value) {
            return -1
        } else {
            return 0
        }
    }

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar variant="regular">
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <CurrencyBitcoinIcon fontSize="large" />
                        </IconButton>
                        <Typography
                            variant="h6"
                            color="inherit"
                            component="div"
                        >
                            crypto-board-project.web.app
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
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
                    aria-label="Leaderboard table"
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
                                    <Link
                                        href={
                                            'https://testnet.snowtrace.io/address/' +
                                            row.name
                                        }
                                        variant="body1"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        {row.name}
                                    </Link>
                                </TableCell>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    sx={{
                                        width: '50%',
                                    }}
                                >
                                    <Typography
                                        variant="h5"
                                        gutterBottom
                                        sx={{
                                            textAlign: 'left',
                                            fontFamily: [
                                                'Helvetica Neue',
                                                'Segoe UI Symbol',
                                            ],
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {row.message}
                                    </Typography>
                                </TableCell>
                                <TableCell align="right">{row.value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{
                        textAlign: 'center',
                        fontStyle: 'italic',
                        fontFamily: ['Roboto', 'Segoe UI Symbol'],
                    }}
                >
                    Connected to contract{' '}
                    <Link
                        href={
                            'https://testnet.snowtrace.io/address/' +
                            contractAddress
                        }
                        variant="body3"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        {contractAddress}
                    </Link>
                </Typography>
            </TableContainer>
            <Button
                sx={{
                    display: 'block',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: 5,
                }}
                variant="contained"
                disabled={isSending}
                onClick={sendRequest}
            >
                Refresh
            </Button>
        </div>
    )
}

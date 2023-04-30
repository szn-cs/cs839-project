import * as React from 'react';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Web3 from 'web3';
import {updateLeaderboardData, getSampleUsers} from "./dao.js";


/* firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqlWGbIbIkYxRl7SeJQWcUtIT53kSpPhA",
  authDomain: "crypto-board-project.firebaseapp.com",
  projectId: "crypto-board-project",
  storageBucket: "crypto-board-project.appspot.com",
  messagingSenderId: "673364528653",
  appId: "1:673364528653:web:28db8f1bc765b1f45f0f44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/

export default function MyApp() {
    const ROWLIMIT = 10


    const compareByValue = (a, b) => {
      if (a.value > b.value) {
        return -1;
      } else if (a.value < b.value) {
        return 1;
      } else {
        return 0;
      }
    };
//    console.log(Dao())
//    console.log(Dao2())
////    console.log(getSampleUsers())
//     let leaders = [{"name":"Matthew","message":"I'm the best", "value":25},
//        {"name":"Joe","message":"I'm the best","value":55},
//        {"name":"Bob","message":"I'm the best","value":1}]
    let leaders = getSampleUsers()
    leaders.sort(compareByValue);
    return (
        <div>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell >Message</TableCell>
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
                      <TableCell component="th" scope="row">
                        {row.message}
                      </TableCell>
                      <TableCell align="right">{row.value}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
            </Table>
        </TableContainer>
        <Button variant="contained">Refresh</Button>
        </div>
    );
}
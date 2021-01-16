import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import UserAvatar from './UserAvatar';
import StatusPill from './StatusPill';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, email, gender, status) {
  return { name, email, gender, status };
}

const rows = [
  createData('Frozen yoghurt', 'a@gmail.com', 'male', 24),
  createData('Ice cream sandwich', 'b@gmail.com', 'male', 37),
  createData('Ice cream 1', 'b@gmail.com', 'male', 37),
  createData('Ice cream 2', 'b@gmail.com', 'male', 37),
  createData('Ice cream 3', 'b@gmail.com', 'male', 37),
  createData('Ice cream 4', 'b@gmail.com', 'male', 37),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  mb: {
    marginBottom: 20,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.mb} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Gender</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                <UserAvatar src="" alt="user-avatar" data={row} />
              </StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">{row.gender}</StyledTableCell>
              <StyledTableCell align="center">
                <StatusPill content="active" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

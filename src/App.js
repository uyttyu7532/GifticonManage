import React, { Component} from 'react';
import './App.css';
import Gifticon from './components/Gifticon';
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 1,
    overflowX: "auto"
  },
  table:{
    minWidth: 1080
  }
})


const gifticons = [{
  'id' : 1,
  'name' : '스타벅스',
  'exp_date' : '20200820',
  'used' : 'false',
  'barcode_img' : 'https://placeimg.com/64/64/animals/1'
},
{
  'id' : 2,
  'name' : '할리스',
  'exp_date' : '20200819',
  'used' : 'true',
  'barcode_img' : 'https://placeimg.com/64/64/animals/2'
},
{
  'id' : 3,
  'name' : '커피빈',
  'exp_date' : '20200818',
  'used' : 'true',
  'barcode_img' : 'https://placeimg.com/64/64/animals/3'
}]

class App extends Component {
  render() {
      const { classes } = this.props;
      return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>번호</TableCell>
                <TableCell>기프티콘 사진</TableCell>
                <TableCell>제목</TableCell>
                <TableCell>유효기간</TableCell>
                <TableCell>사용 여부</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
            gifticons.map(g => {
              return(
                <Gifticon
                key = {g.id}
                id = {g.id}
                barcode_img = {g.barcode_img}
                name = {g.name}
                exp_date = {g.exp_date}
                used = {g.used}
              />
              );
          })
        }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
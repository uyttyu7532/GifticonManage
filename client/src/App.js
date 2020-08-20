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


class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({gifticons: res}))
      .catch(err => console.log(err))
  }

  callApi = async () => {
    const response = await fetch('/api/gifticons');
    const body = await response.json();
    return body;
  }

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
            {this.state.gifticons ? 
            this.state.gifticons.map(g => {
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
        :""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
import React, { Component } from 'react';
import './Home.css';
import { Link, HashRouter } from "react-router-dom";
import Gifticon from './components/Gifticon';
import GifticonAdd from './components/GifticonAdd';
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';


const styles = theme => ({
  root: {
    width: '100%',
    // minWidth: 980,
  },
  menu: {
    marginTop: 15,
    marginBottom: 15,
    display: 'flex',
    justifyContent: 'center'
  },
  table:{
    width: '100%'
  },
  TableHead: {

  },
  progress: {
    margin: 'theme.spacing(2)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: 'white'
  },
  title: {
    marginTop: 25,
    marginBottom: 25,
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
})


class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      gifticons: '',
      completed: 0,
      searchKeyword: ""
    }
  }

  // state 초기화
  stateRefresh = () => {
    this.setState({
      gifticons: '',
      completed: 0,
      searchKeyword: ""
    });
    this.callApi() // 고객 데이터 불러오기
      .then(res => this.setState({ gifticons: res })) // 받아서 state로 설정 (서버에서 받은 res가  gifticons가 됨)
      .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ gifticons: res })) // 받아서 state로 설정 (서버에서 받은 res가  gifticons가 됨)
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('http://ec2-15-164-50-1.ap-northeast-2.compute.amazonaws.com/api/gifticons'); // 접속하고자 하는 api주소
    const body = await response.json(); // 목록이 json 형태로 출력
    return body;
  }

  progress = () => {
    const { completed } = this.state; // this.state.completed를 completed로 접근할 수 있게 해준다.
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 })
  }

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  }

  render() {
    const filteredComponenets = (data) => {
      data = data.filter((g) => {
        return g.name.indexOf(this.state.searchKeyword) > -1;
      });
      return data.map((g) => {
        return <Gifticon
          key={g.id}
          stateRefresh={this.stateRefresh}
          id={g.id}
          barcode_img={g.barcode_img}
          name={g.name}
          exp_date={g.exp_date}
          used={g.used}
        />
      });
    }
    const { classes } = this.props;
    const cellList = ["사진", "제목", "유효기간", "사용여부", "설정"];
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <HashRouter>
              <Link to={{
                pathname: `/`
              }}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                >
                  <HomeIcon />
                </IconButton>
              </Link>
            </HashRouter>

            <Typography className={classes.title} variant="h6" noWrap>
              기프티콘 관리
          </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase 
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                name="searchKeyword"
                value={this.state.searchKeyword}
                onChange={this.handleValueChange}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Toolbar>
        </AppBar>
        <div className={classes.menu}>
          <GifticonAdd stateRefresh={this.stateRefresh} />
        </div>
        <Paper>
          <Table className={classes.table}>
            <TableHead >
              <TableRow>
                {cellList.map(c => {
                  return <TableCell key={c} className={classes.TableHead}>{c}</TableCell>
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.gifticons ?
                filteredComponenets(this.state.gifticons) :
                <TableRow>
                  <TableCell colSpan="5" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
                  </TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
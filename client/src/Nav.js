import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, HashRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    title: {
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

class Nav extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static" >
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
                                <MenuIcon />
                            </IconButton>
                        </Link>
                    </HashRouter>

                    <Typography className={classes.title} variant="h6" noWrap>
                        기프티콘 관리
          </Typography>
                </Toolbar>
            </AppBar>
        )
    }
}
export default withStyles(styles)(Nav);
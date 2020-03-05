import React from "react";
import "./Header.scss";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ({history, handleDrawerToggleEvent}) => {
  const classes = useStyles();
  const handleDrawerToggle = () => {
    handleDrawerToggleEvent();
  };
  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            React-Syncfusion Test App
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>  
    </div>
  );
};

export default withRouter(Header);

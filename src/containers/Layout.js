import React, { Suspense } from "react";
import Loading from "../components/Loading";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "../routes";
import Header from "./Header";

import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const Layout = ({container}) => {
  const classes = useStyles(); 
  const history = useHistory();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const moveRoute= (newRoute, e)=> {
    history.push(newRoute);
    e.stopPropagation();
  }
  
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button onClick={($event)=>moveRoute('/scheduler', $event)}>
          <ListItemIcon><ScheduleIcon /></ListItemIcon>
          <ListItemText primary={"Scheduler"} />
        </ListItem>
        <ListItem button onClick={($event)=>moveRoute('/table', $event)}>
          <ListItemIcon><ListAltIcon /></ListItemIcon>
          <ListItemText primary={"Table"} />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div className="app">
      <Header handleDrawerToggleEvent={handleDrawerToggle}/>
      <div className="app-body">
        <nav className={classes.drawer} aria-label="mailbox folders">
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <Suspense fallback={<Loading />}>
            <Switch>
              {routes.map((route, idx) => {
                return route.component ? (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={props => <route.component {...props} />}
                  />
                ) : (
                  <div>Could not find page!</div>
                );
              })}
              <Redirect from="/" to="/home" />
            </Switch>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default Layout;

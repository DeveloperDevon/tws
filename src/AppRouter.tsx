import React from 'react'
import {
  AppBar,
  Avatar,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import * as Pages from './pages'

const routes = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'Our Story' },
  { path: '/contact-us', label: 'Contact Us' },
]

const AppRouter = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <Router>
      <AppBar
        position="static"
        style={{
          backgroundColor: 'white',
          color: 'lightblue',
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            aria-label="menu"
            style={{ color: '#8e8e8e' }}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            style={{ width: '100%', paddingRight: 48, textAlign: 'center' }}
          >
            <div style={{ height: '50px' }}>
              <img src="/img/logo.png" style={{ height: '100%' }} />
            </div>
          </Typography>
          <SwipeableDrawer
            anchor="left"
            open={menuOpen}
            onOpen={() => setMenuOpen(true)}
            onClose={() => setMenuOpen(false)}
          >
            <Avatar
              src="/img/logo2.png"
              style={{
                padding: '10px 20px',
                width: '100px',
                height: '100px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
            <List style={{ width: '50vw' }}>
              {routes.map((route, index) => (
                <ListItem key={index}>
                  <Link
                    to={route.path}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      textDecoration: 'none',
                      padding: 5,
                      color: '#8e8e8e',
                    }}
                  >
                    {route.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </SwipeableDrawer>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route path="/about">
          <Pages.AboutPage />
        </Route>
        <Route path="/contact-us">
          <Pages.ContactPage />
        </Route>
        <Route path="/services">
          <Pages.ServicesPage />
        </Route>
        <Route path="/">
          <Pages.HomePage />
        </Route>
      </Switch>
    </Router>
  )
}

export default AppRouter

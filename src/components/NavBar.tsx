import { useState } from 'react'
import {
  AppBar,
  Avatar,
  Grid,
  IconButton,
  List,
  ListItem,
  SwipeableDrawer,
  Toolbar,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link, NavLink, useHistory } from 'react-router-dom'

const routes = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/about', label: 'Our Story' },
  { path: '/testimonials', label: 'Testimonials' },
  { path: '/contact-us', label: 'Contact Us' },
]

const DesktopNavBar: React.FC = () => {
  const history = useHistory()
  return (
    <AppBar position="static" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Grid
          container
          justify="space-between"
          alignContent="flex-end"
          alignItems="flex-end"
        >
          <Grid item xs={3}>
            <Avatar
              src="/img/logo2.png"
              onClick={() => history.push('/')}
              style={{
                padding: '10px 20px',
                width: '125px',
                height: '125px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid container style={{ paddingBottom: 15 }}>
              {routes.map((route) => (
                <Grid item key={route.path} xs={2}>
                  <NavLink
                    exact
                    to={route.path}
                    activeStyle={{
                      color: 'lightblue',
                      fontWeight: 'bolder',
                    }}
                    style={{ color: 'black', textDecoration: 'none' }}
                  >
                    <Typography variant="body1">{route.label}</Typography>
                  </NavLink>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

const MobileNavBar: React.FC = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const history = useHistory()
  return (
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
            <img
              src="/img/logo.png"
              style={{ height: '100%' }}
              onClick={() => history.push('/')}
            />
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
            onClick={() => {
              history.push('/')
              setMenuOpen(false)
            }}
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
  )
}

export const NavBar: React.FC = () => {
  const isDesktop = useMediaQuery('(max-width: 768px)')
  return isDesktop ? <MobileNavBar /> : <DesktopNavBar />
}

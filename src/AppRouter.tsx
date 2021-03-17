import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Container } from '@material-ui/core'
import { Footer, NavBar } from './components'
import * as Pages from './pages'

const AppRouter = () => {
  return (
    <Router>
      <NavBar />

      <Container maxWidth="md">
        <Switch>
          <Route path="/about">
            <Pages.AboutPage />
          </Route>
          <Route path="/contact-us">
            <Pages.ContactPage />
          </Route>
          <Route path="/testimonials">
            <Pages.TestimonialsPage />
          </Route>
          <Route path="/services">
            <Pages.ServicesPage />
          </Route>
          <Route path="/">
            <Pages.HomePage />
          </Route>
        </Switch>
      </Container>

      <Footer />
    </Router>
  )
}

export default AppRouter

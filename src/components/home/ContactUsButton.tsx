import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const ContactUsButton: React.FC = () => {
  return (
    <Grid container justify="center" style={{ margin: '15px 0px 15px 0px' }}>
      <Grid item>
        <Link to="/contact-us" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            style={{ color: 'white', backgroundColor: 'lightblue' }}
          >
            Contact Us Today
          </Button>
        </Link>
      </Grid>
    </Grid>
  )
}

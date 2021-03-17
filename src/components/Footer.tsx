import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import { Divider, Grid, IconButton, Typography } from '@material-ui/core'

export const Footer: React.FC = () => {
  return (
    <>
      <Divider style={{ bottom: 0, width: '100%' }} />
      <Grid container justify="center">
        <Grid item>
          <IconButton
            onClick={() =>
              window.open(
                'https://www.facebook.com/TheWholeShebang.xyz',
                '_blank'
              )
            }
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              window.open(
                'https://www.instagram.com/thewholeshebang.xyz/',
                '_blank'
              )
            }
          >
            <InstagramIcon />
          </IconButton>
        </Grid>
      </Grid>
      <Typography
        variant="body1"
        style={{ padding: '0px 15px 10px 15px', textAlign: 'center' }}
      >
        Roseville, CA | (916) 759-1124 | info@thewholeshebang.xyz
      </Typography>
    </>
  )
}

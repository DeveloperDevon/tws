import { Grid, Typography } from '@material-ui/core'

export const VirtualOrganizingRates: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '15px 0px', fontWeight: 'bold' }}
      >
        Our Virtual Organizing Packages and Rates
      </Typography>
      <Grid item xs={12}>
        <Typography variant="body1">
          <span style={{ fontSize: 30, color: 'lightblue' }}>X</span>{' '}
          <span style={{ color: 'lightblue', fontWeight: 'bold' }}>
            Small Spaces
          </span>{' '}
          ~ $75 per space ~ This works best for smaller spaces, such as a
          pantry, linen closet, play space, bathroom, kitchen cupboards &amp;
          drawers. These spaces can be completed in a shorter timeframe and are
          perfect for the “Do it Yourselfer” who just needs a bit of direction
          &amp; accountability.{' '}
          <span style={{ fontStyle: 'italic' }}>
            (This package includes One hour of our time broken down into the
            timeframes that work best for you and your project)
          </span>
        </Typography>
        <Typography variant="body1">
          <span style={{ fontSize: 30, color: 'lightblue' }}>Y</span>
          <span style={{ color: 'lightblue', fontWeight: 'bold' }}>
            Complete Room
          </span>{' '}
          ~ $125 per room ~ Do you have a compete room or more that you need
          help getting Organized? This may be your kitchen, bedroom, office,
          playroom or family room.{' '}
          <span style={{ fontStyle: 'italic' }}>
            (This package includes Two hours of our time broken down into the
            timeframes that work best for you and your project)
          </span>
        </Typography>
        <Typography variant="body1">
          <span style={{ fontSize: 30, color: 'lightblue' }}>Z</span>
          <span style={{ color: 'lightblue', fontWeight: 'bold' }}>
            {' '}
            A’ La Carte
          </span>{' '}
          ~ $50 per session ~ Do you need to add extra time for LIVE video chat
          coaching for your project? No problem, just add an A’ La Carte session
          for the extra help that you need to get it done. These sessions are 45
          minutes and can be added to either of the packages above, as needed.
        </Typography>
      </Grid>
    </Grid>
  )
}

import { Grid, Typography } from '@material-ui/core'

export const SeasonalMaintenance: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '15px 0px', fontWeight: 'bold' }}
      >
        Seasonal Maintenance
      </Typography>
      <Grid item xs={12}>
        <img src="/img/seasonal_maintenance.jpg" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          Need to rotate your Spring/Summer wardrobe in and store your
          Fall/Winter clothes. We are there for you. Need help getting your
          holiday or seasonal decorations out? Let us help you! Spring Cleaning
          project, yep, that too.
        </Typography>
      </Grid>
    </Grid>
  )
}

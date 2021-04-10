import { Grid, Typography } from '@material-ui/core'

export const Maintenance: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '15px 0px', fontWeight: 'bold' }}
      >
        Maintenance
      </Typography>
      <Grid item xs={12}>
        <img src="/img/maintenance.jpg" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          To help keep you organized, we offer an ongoing maintenance program.
          Organized habits aren’t formed overnight and we are here to help you
          when things start to get a bit out of hand. Schedule us to refresh
          your areas when this happens.
        </Typography>
      </Grid>
    </Grid>
  )
}

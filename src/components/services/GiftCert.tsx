import { Grid, Typography } from '@material-ui/core'

export const GiftCert: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '25px 0px', fontWeight: 'bold' }}
      >
        The Whole Shebang Gift Certificates
      </Typography>
      <Grid item xs={12}>
        <img src="/img/gift_cert.png" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          Give the gift of Organizing to someone special today. We offer{' '}
          <span style={{ color: 'lightblue' }}>Gift Certificates</span> for all
          of our Services. Contact us for more details.
        </Typography>
      </Grid>
    </Grid>
  )
}

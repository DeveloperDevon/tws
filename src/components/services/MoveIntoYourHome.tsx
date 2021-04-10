import { Grid, Typography } from '@material-ui/core'

export const MoveIntoYourHome: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '15px 0px', fontWeight: 'bold' }}
      >
        Moving into Your New Home
      </Typography>
      <Grid item xs={12}>
        <img src="/img/sss.jpg" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          Let The Whole Shebang make the transition into your new home an easy,
          organized process! We love to create organized spaces from the very
          beginning. In a way, that will make total sense to you and make
          everything easy to find.
        </Typography>
      </Grid>
    </Grid>
  )
}

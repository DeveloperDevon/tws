import { Grid, Typography } from '@material-ui/core'

export const PrepYourMove: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '15px 0px', fontWeight: 'bold' }}
      >
        Preparation for Your Move
      </Typography>
      <Grid item xs={12}>
        <img src="/img/prep.jpg" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          Moving is never easy and can be so overwhelming. Let The Whole Shebang
          help you get organized and packed for your move. By doing this before
          you move, you are assured of an easy, organized unpacking in your new
          home.
        </Typography>
      </Grid>
    </Grid>
  )
}

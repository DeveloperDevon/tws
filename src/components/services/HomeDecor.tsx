import { Grid, Typography } from '@material-ui/core'

export const HomeDecor: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '15px 0px', fontWeight: 'bold' }}
      >
        Home Décor
      </Typography>
      <Grid item xs={12}>
        <img src="/img/decor.jpg" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          Do you have a box of pictures that you would like to have in frames on
          the wall but don’t know where to start? We would love to help you add
          that touch of HOME, whether it be paint, pictures, candles, signs and
          or more to help your HOME represent your family and personality.
        </Typography>
      </Grid>
    </Grid>
  )
}

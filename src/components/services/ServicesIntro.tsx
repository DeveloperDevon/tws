import { Grid, Typography } from '@material-ui/core'

export const ServicesIntro: React.FC = () => {
  return (
    <>
      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ textAlign: 'center', marginTop: 15, fontWeight: 'bold' }}
        >
          Services
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          Do you have a project that seems too overwhelming to even start? Do
          you have a project that is half done because it is too overwhelming to
          finish? Let us do it for you! Maybe it is your laundry room, kitchen,
          bathroom, pantry, garage, junk drawer or The Whole Shebang! We
          completely understand that each client needs a personal and unique
          touch to their space and we pride ourselves in bringing that to you in
          a non-judgmental, stress free environment. We will make the process
          quick and easy while we do the dirty work for you! Let us make your
          life easy and less complicated with organization. We offer many
          different types of services so that together we can customize the
          right fit for you, your home and your budget. Checkout our services
          below:
        </Typography>
      </Grid>
    </>
  )
}

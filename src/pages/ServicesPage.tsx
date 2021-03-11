import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const ServicesPage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6" style={{ textAlign: 'center', marginTop: 15 }}>
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
      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ textAlign: 'center', margin: '15px 0px' }}
        >
          Preparation for Your Move
        </Typography>
        <Grid item xs={12}>
          <img src="/img/prep.jpg" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" style={{ padding: 15 }}>
            Moving is never easy and can be so overwhelming. Let The Whole
            Shebang help you get organized and packed for your move. By doing
            this before you move, you are assured of an easy, organized
            unpacking in your new home.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ textAlign: 'center', margin: '15px 0px' }}
        >
          Moving into Your New Home
        </Typography>
        <Grid item xs={12}>
          <img src="/img/sss.jpg" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" style={{ padding: 15 }}>
            Let The Whole Shebang make the transition into your new home an
            easy, organized process! We love to create organized spaces from the
            very beginning. In a way, that will make total sense to you and make
            everything easy to find.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ textAlign: 'center', margin: '15px 0px' }}
        >
          Home Décor
        </Typography>
        <Grid item xs={12}>
          <img src="/img/decor.jpg" style={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" style={{ padding: 15 }}>
            Do you have a box of pictures that you would like to have in frames
            on the wall but don’t know where to start? We would love to help you
            add that touch of HOME, whether it be paint, pictures, candles,
            signs and or more to help your HOME represent your family and
            personality.
          </Typography>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ textAlign: 'center', margin: '15px 0px' }}
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

      <Grid item xs={12}>
        <Typography
          variant="h6"
          style={{ textAlign: 'center', margin: '15px 0px' }}
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
            holiday or seasonal decorations out? Let us help you! Spring
            Cleaning project, yep, that too.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

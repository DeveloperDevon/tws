import React from 'react'
import { Grid, Typography } from '@material-ui/core'

export const AboutPage = () => {
  return (
    <div>
      <Grid container justify="center">
        <Grid item xs={12}>
          <Typography
            variant="h6"
            style={{ textAlign: 'center', margin: '15px 0px' }}
          >
            Our Story
          </Typography>
        </Grid>
        <Grid item style={{ width: '100%' }}>
          <div
            style={{
              backgroundImage: 'url(/img/girls3.jpg',
              maxWidth: 270,
              height: 270,
              width: '100%',
              backgroundSize: 'cover',
              opacity: 0.8,
              borderRadius: 25,
              margin: '15px auto 15px auto',
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="body1"
            style={{ textAlign: 'center', fontSize: 14 }}
          >
            Krista & Shelli
          </Typography>
        </Grid>
        <Grid
          item
          style={{ backgroundColor: 'lightblue', padding: 15, color: 'white' }}
        >
          <Typography variant="body1">
            Due to the persuasion and encouragement of Aunt Janine, in August
            2015, Krista decided to launch Domesticated Diva, which offered Home
            Decor and Organization Services. With that decision, came the
            opportunity to do a presentation for the Home Decor group in Sun
            City, Roseville. The presentation generated 16 consultations and
            from there on Domesticated Diva thrived solely by word of mouth.
            Over the last five and a half years, Krista has been blessed with
            numerous organization projects, estate sales, home decor projects
            and now maintenance clients, that have truly turned into family.
            Over the years she expressed her dream to be able to offer her
            services on a larger scale and reach more clients but did not know
            where to start. Shelli (the one Krista learned everything from) and
            who has been there throughout the Domesticated Diva business said
            “lets do it!” Shelli not only works on organization projects but
            also runs the checkout stand at estate sales, helps with donation
            runs, sets up and organizes displays and most importantly takes care
            of all of the social media “for sale” items. Over the last decade
            Shelli has taken several classes, mastering the social media side.
            Everything you will see online from The Whole Shebang logo, to the
            website (with the help of Devon) and Social Media posts are all
            created by her.
          </Typography>
        </Grid>
        <Grid item style={{ padding: 15 }}>
          <Typography variant="body1">
            Together one of Shelli and Krista’s favorite things to do is a
            project, whether it be big or small, they enjoy working together.
            Honestly organizing has always come natural to them and it is
            something they truly have fun doing. The end results are extremely
            rewarding and there is nothing better than seeing a great before and
            after space. With that said, Shelli and Krista are happy and beyond
            excited to merge all of their talents together and bring you The
            Whole Shebang!! Three Generations of Organization (introducing
            Kaylee soon).
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}

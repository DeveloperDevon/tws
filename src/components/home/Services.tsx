import { Typography } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export const Services: React.FC = () => {
  const history = useHistory()
  return (
    <div style={{ padding: 15 }}>
      <Typography
        variant="h6"
        style={{ fontWeight: 'bold' }}
        onClick={() => history.push('/services')}
      >
        Services
      </Typography>
      <Typography variant="body1">
        When you look around your home do you feel overwhelmed and have no idea
        where to start? Whether you have a small space, room or want the Whole
        Shebang, we are here to help you! We offer many different types of
        services so together we can customize the right fit for you, your home
        and your budget. Checkout some of our services below:
      </Typography>
      <Typography variant="body1" style={{ marginTop: 10, fontWeight: 'bold' }}>
        Sort ~ Simplify ~ Store
      </Typography>
      <Typography variant="body1">
        For any area of your home, garage, office, playroom… Our goal is to
        create a clean and organized space for you along with a system that will
        help your space stay that way!
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Preparation for Selling Your Home
      </Typography>
      <Typography variant="body1">
        We will help you get your home ready to sell by helping you{' '}
        <span style={{ fontStyle: 'italic' }}>Sort ~ Simplify ~ Store</span>{' '}
        your things to make Staging Your Home quick &amp; easy.
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Preparation for Your Move
      </Typography>
      <Typography variant="body1">
        Moving is never easy and can be so overwhelming. Let The Whole Shebang
        help you get organized and packed for your move. By doing this before
        you move, you are assured of an easy, organized unpacking in your new
        home.
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Moving into Your New Home
      </Typography>
      <Typography variant="body1">
        Let the Whole Shebang make the transition into your new home an easy,
        organized process! We love to create organized spaces from the very
        beginning. In a way, that will make total sense to you and make
        everything easy to find.
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Home Décor
      </Typography>
      <Typography variant="body1">
        Do you have a box of pictures that you would like to have in frames on
        the wall but don’t know where to start? We would love to help you add
        that touch of HOME, whether it be paint, pictures, candles, signs and or
        more to help your HOME represent your family and personality.
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Maintenance
      </Typography>
      <Typography variant="body1">
        To help keep you organized, we offer an ongoing maintenance program.
        Organized habits aren’t formed overnight and we are here to help you
        when things start to get a bit out of hand. Schedule us to refresh your
        areas when this happens.
      </Typography>
      <Typography variant="body1" style={{ fontWeight: 'bold' }}>
        Seasonal Maintenance
      </Typography>
      <Typography variant="body1">
        Need to rotate your Spring/Summer wardrobe in and store your Fall/Winter
        clothes. We are there for you. Need help getting your holiday or season
        decorations out? Let us help you!
      </Typography>
    </div>
  )
}

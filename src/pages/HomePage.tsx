import {
  Button,
  Grid,
  GridList,
  GridListTile,
  Typography,
  useMediaQuery,
} from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Link } from 'react-router-dom'
import { CarouselShowcase, GridListShowcase } from '../components'

export const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      <div>
        <Typography variant="body1" style={{ padding: 15 }}>
          Welcome to{' '}
          <span style={{ color: 'lightblue' }}>The Whole Shebang!</span> Where
          we offer affordable and attainable organization for the everyday
          person.
        </Typography>
        {isMobile ? <CarouselShowcase /> : <GridListShowcase />}
        <div
          style={{ padding: 15, backgroundColor: 'lightblue', color: 'white' }}
        >
          <Typography variant="body1">
            We are three generations of organization! One of our favorite things
            to do together is a project. Whether it is big or small, we enjoy
            working together. Honestly organizing has always come natural to us
            and it is something we truly have fun doing. The end results are
            extremely rewarding and there is nothing better than seeing a great
            before and after space. We specialize in creating functional spaces
            by de-cluttering and organizing them. We help you utilize the space
            you have in a more functional way by working with you as you sort
            through your things. We will ask you questions to help you purge
            what is not needed or wanted anymore, help you plan your space and
            then help you find an organization system that will work perfect for
            you.
          </Typography>
        </div>
        <div style={{ padding: 15 }}>
          <Typography variant="h6">
            Getting started with us is as easy as...
          </Typography>
          <Typography variant="body1">
            <span style={{ fontSize: 30, color: 'lightblue' }}>X</span> Schedule
            your FREE in home consultation. Our time together will be 100% non-
            judge-mental and stress FREE.
          </Typography>
          <Typography variant="body1">
            <span style={{ fontSize: 30, color: 'lightblue' }}>Y</span> Storage
            Solutions are personal and we will find the best storage solution
            that is perfect for you, your space and most importantly, your
            budget.
          </Typography>
          <Typography variant="body1">
            <span style={{ fontSize: 30, color: 'lightblue' }}>Z</span> We will
            prepare a customized quote for the spaces you need help with.
          </Typography>
        </div>
        <div
          style={{ padding: 15, backgroundColor: 'lightblue', color: 'white' }}
        >
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body1">
            The Whole Shebang was created by a mother and daughter team.
            Recently we added another daughter to our team making us Three
            Generations of Organization!
          </Typography>
          <div
            style={{
              backgroundImage: 'url(/img/girls2.png',
              height: 270,
              backgroundSize: 'cover',
              opacity: 0.8,
              borderRadius: 25,
              margin: '15px 0px 15px 0px',
            }}
          />
          <Typography>
            We understand that each of our client’s need a personal and unique
            touch to their space and we pride ourselves in bringing that to you
            in a non judgmental, stress free, environment. We will make the
            process quick &amp; easy for you, while we will do the dirty work!
            <br />
            <br />
            Do you have a project that seems too overwhelming to even start? Do
            you have a project that is half done, because it is too overwhelming
            to finish? Let us do it for you! Maybe it’s your laundry room,
            kitchen, bathroom, office, pantry, garage, junk drawer or The Whole
            Shebang. Let us make your life easy and less complicated by
            organizing. As mother &amp; daughters one of our favorite things to
            do together is a project. Whether it is big or small, we enjoy
            working together.
            <br />
            <br />
            As mother &amp; daughters one of our favorite things to do together
            is a project. Whether it is big or small, we enjoy working together.
            <br />
            <br />
            We often found ourselves decorating our friend’s houses or
            rearranging their closets and pantries, just for the fun of it.
            Never did we imagine we could turn a hobby into a profession with
            the encouragement from our family friends.
            <br />
            <br />
            Honestly organizing has always come natural to us and it is
            something we truly have fun doing. The end results are extremely
            rewarding and there is nothing better than seeing a great “before”
            and “after” area.
          </Typography>
        </div>
        <div style={{ padding: 15 }}>
          <Typography variant="h6">Services</Typography>
          <Typography variant="body1">
            When you look around your home do you feel overwhelmed and have no
            idea where to start? Whether you have a small space, room or want
            the Whole Shebang, we are here to help you! We offer many different
            types of services so together we can customize the right fit for
            you, your home and your budget. Checkout some of our services below:
          </Typography>
          <Typography
            variant="body1"
            style={{ marginTop: 10, fontWeight: 'bold' }}
          >
            Sort ~ Simplify ~ Store
          </Typography>
          <Typography variant="body1">
            For any area of your home, garage, office, playroom… Our goal is to
            create a clean and organized space for you along with a system that
            will help your space stay that way!
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
            Moving is never easy and can be so overwhelming. Let The Whole
            Shebang help you get organized and packed for your move. By doing
            this before you move, you are assured of an easy, organized
            unpacking in your new home.
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Moving into Your New Home
          </Typography>
          <Typography variant="body1">
            Let the Whole Shebang make the transition into your new home an
            easy, organized process! We love to create organized spaces from the
            very beginning. In a way, that will make total sense to you and make
            everything easy to find.
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Home Décor
          </Typography>
          <Typography variant="body1">
            Do you have a box of pictures that you would like to have in frames
            on the wall but don’t know where to start? We would love to help you
            add that touch of HOME, whether it be paint, pictures, candles,
            signs and or more to help your HOME represent your family and
            personality.
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Maintenance
          </Typography>
          <Typography variant="body1">
            To help keep you organized, we offer an ongoing maintenance program.
            Organized habits aren’t formed overnight and we are here to help you
            when things start to get a bit out of hand. Schedule us to refresh
            your areas when this happens.
          </Typography>
          <Typography variant="body1" style={{ fontWeight: 'bold' }}>
            Seasonal Maintenance
          </Typography>
          <Typography variant="body1">
            Need to rotate your Spring/Summer wardrobe in and store your
            Fall/Winter clothes. We are there for you. Need help getting your
            holiday or season decorations out? Let us help you!
          </Typography>
        </div>
      </div>
      <Grid container justify="center" style={{ margin: '15px 0px 15px 0px' }}>
        <Grid item>
          <Link to="/contact-us" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              style={{ color: 'white', backgroundColor: 'lightblue' }}
            >
              Contact Us Today
            </Button>
          </Link>
        </Grid>
      </Grid>
      <div
        style={{ backgroundColor: 'lightblue', color: 'white', padding: 15 }}
      >
        <Typography variant="h6">Packages</Typography>
        <Typography variant="body1">
          We have 3 packages to fit everyone&#39;s budget.
        </Typography>
        <ol style={{ padding: '0px 15px' }}>
          <li>
            <Typography variant="body1">
              Time &amp; Energy ~ We will use what you have to create organized
              spaces.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Organizing on a Budget ~ We will use economical organizers to
              create very functional and organized spaces.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Picture Perfect ~ We will use top of the line storage and
              organizing products to create beautifully, organized spaces.
            </Typography>
          </li>
        </ol>
      </div>
    </>
  )
}

import { Typography } from '@material-ui/core'
import { Testimonial } from './Testimonial'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote'

const TESTIMONIALS = [
  {
    review: (
      <Typography variant="body1">
        <FormatQuoteIcon
          style={{ transform: 'scaleX(-1)', color: 'lightblue' }}
        />
        Krista helped me organize my kitchen Baker’s rack, to display all the
        items that are sentimental to me. She also worked hard to organize my
        bookcases, helping me identify items to be tossed and donated. <br />
        The rest of the items she placed in a logical and creative way. She has
        a lot of energy, works hard and isn’t afraid to get dirty. She is
        careful to do things well. She even hung pictures for me and created a
        beautiful wall I love. <br />
        Thanks, Krista, can’t wait for you to do more for me in the near future.{' '}
        <FormatQuoteIcon style={{ color: 'lightblue' }} />
      </Typography>
    ),
    reviewer: 'Arlene ~ Roseville',
  },
  {
    review: (
      <Typography variant="body1">
        <FormatQuoteIcon
          style={{ transform: 'scaleX(-1)', color: 'lightblue' }}
        />
        I recently hired Krista to help me with organizing my daughters house,
        She has a two year old son and is pregnant with her second. Her laundry
        room is in the garage and was full of cobwebs and shelves that were
        filthy, with piles everywhere. <br />
        As Krista tackled this project she just went for it and wiped off the
        spider webs and cleaned all of the shelves. She pulled everything out of
        the room and lined the shelves, swept and mopped the floor. She quickly
        had everything reorganized. She painted a few of the ugly shelves as
        well. <br />
        When my daughter’s husband came home he said in a loud voice, “OH MY
        GOSH, WOW! WHO DID THIS?” Krista went on to organize the big pile of
        things left in the garage as well as clean out three other cupboards.{' '}
        <br />
        I plan to have her back to work on organizing the kitchen and bedroom
        closets. To also help with organizing a space for the new baby. She is
        so worth every penny and is happy to return to help with maintaining
        your home. She is so patient and fun to work with. She has great ideas
        too. <br />
        If you want your life to be easier and more organized, you should
        definitely give Krista a call.
        <FormatQuoteIcon style={{ color: 'lightblue' }} />
      </Typography>
    ),
    reviewer: 'Janine ~ Grass Valley',
  },
  {
    review: (
      <Typography variant="body1">
        <FormatQuoteIcon
          style={{ transform: 'scaleX(-1)', color: 'lightblue' }}
        />
        Oh, I have so many talents and skill sets in life but organization is
        not one of them. I am convinced that organization is a way your brain is
        wired or "lack of" as well. Mine tends to be "lack of". Shelli and
        Krista came in for a couple days and gave some peace to my chaos. While
        they were sorting and organizing they came across a check I had lost and
        didn't even notice. I quickly learned that my lack of organization was
        actually costing me time, money, and peace of mind. Their services have
        paid for itself over and over again. I highly recommend them for their
        organizational services but I assure you will also gain a new found
        friend!
        <FormatQuoteIcon style={{ color: 'lightblue' }} />
      </Typography>
    ),
    reviewer: 'Marcella ~ Carmichael',
  },
  {
    review: (
      <Typography variant="body1">
        <FormatQuoteIcon
          style={{ transform: 'scaleX(-1)', color: 'lightblue' }}
        />
        Krista has been such a valuable resource for my real estate clients
        making a move. Krista helps organize, pack, downsize (sell/donate/get
        rid of) and then can help get set up on the other end! Krista’s
        energetic and positive spirit helps make the moving transition so much
        easier and stress free! I highly recommend Krista!
        <FormatQuoteIcon style={{ color: 'lightblue' }} />
      </Typography>
    ),
    reviewer: 'Stacey ~ Rocklin, CA Realtor',
  },
  {
    review: (
      <Typography variant="body1">
        <FormatQuoteIcon
          style={{ transform: 'scaleX(-1)', color: 'lightblue' }}
        />
        Krista has been doing bi-weekly home maintenance for us for over two
        years. She is very reliable and trustworthy. We eagerly anticipate her
        visits, as she has become a dear and thoughtful friend. When the day
        comes that we need to move into something smaller, it’s a real comfort
        to know that we have someone who will be able to help us with that major
        undertaking.
        <FormatQuoteIcon style={{ color: 'lightblue' }} />
      </Typography>
    ),
    reviewer: 'Helen, Sun City Lincoln Hills',
  },
]

export const Testimonials: React.FC = () => {
  return (
    <>
      {TESTIMONIALS.map((t, i) => (
        <Testimonial key={i} review={t.review} reviewer={t.reviewer} />
      ))}
    </>
  )
}

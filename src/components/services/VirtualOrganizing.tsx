import { Grid, List, Typography } from '@material-ui/core'
import { Item } from '../common'

export const VirtualOrganizing: React.FC = () => {
  return (
    <Grid item xs={12}>
      <Typography
        variant="h6"
        style={{ textAlign: 'center', margin: '15px 0px', fontWeight: 'bold' }}
      >
        Virtual Organizing
      </Typography>
      <Grid item xs={12}>
        <img src="/img/virtual_organizing.png" style={{ width: '100%' }} />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="body1" style={{ padding: 15 }}>
          We love listening to our customers and their feedback. We appreciate
          you all so much!!! With that being said, it is because of your
          requests that we are excited to introduce you to our Virtual
          Organizing Services!
        </Typography>
        <Typography variant="body1" style={{ padding: 15 }}>
          We know life can be chaotic and stressful. We want you to know we are
          here to help you regain control of your spaces. We are finding many of
          our clients just need someone to tell them where to start, what to buy
          and how to keep the motivation going. Would you like to learn how to
          organize your home with some professional help by your side, every
          step of the way?
        </Typography>
        <Typography variant="body1" style={{ padding: 15 }}>
          By working with us through virtual sessions, your projects can be
          completed in shorter sessions, over a longer time frame.
        </Typography>
        <Typography variant="body1" style={{ padding: 15 }}>
          Virtual Organizing is done through phone calls, emails, texts, or
          video chats and is a way for us to assist your organizing needs no
          matter where you live or how busy your schedule is! You will receive
          the same time, attention, coaching and motivation as our in-person
          clients, but through the use of technology.
        </Typography>
        <Typography variant="body1" style={{ padding: 15, fontWeight: 'bold' }}>
          Virtual Organizing will work well for you if:
        </Typography>
        <List>
          <Item content="You&#39;re motivated and committed to reach your organizing goals." />
          <Item content="You&#39;re comfortable using technology on your phone, tablet, or computer." />
          <Item content="You&#39;re able to do the work, but you need someone to check in with you frequently for accountability." />
          <Item content="You are busy and don&#39;t have time for in-person organizing sessions so you want to get organized on your own time schedule." />
          <Item content="You love customized, personal advice for your home &amp; budget." />
          <Item content="You live outside the Roseville, CA area but want help to get organized by The Whole Shebang!" />
        </List>
        <Typography variant="body1" style={{ padding: 15 }}>
          Virtual Organizing packages include unlimited correspondence
          throughout the project for coaching, support and feedback too! Our
          goal is to see you through your project in a timely manner.
        </Typography>
        <Typography
          variant="body1"
          style={{ padding: 15, fontWeight: 'bold', color: '#b3e5fc' }}
        >
          YOU WILL RECEIVE…
        </Typography>
        <List>
          <Item
            title="A FREE discovery phone call"
            content="to make sure this process is a good fit for you, so you don’t waste time and money on a process that’s not going to work for you."
          />
          <Item
            title="Step-by-step guidance from a professional home organizer"
            content="so you don’t feel alone and overwhelmed, you get advice along the way and we break down the process into manageable steps just for you."
          />
          <Item
            title="A Follow up email"
            content="to remind you of next steps and keep you accountable so you continue to make progress toward your inspiring living space."
          />
          <Item
            title="Flexible scheduling options"
            content="so you get to choose how often you want to schedule additional virtual organizing sessions, whether it is daily, weekly or monthly."
          />
        </List>
        <Typography
          variant="body1"
          style={{ padding: 15, fontWeight: 'bold', color: '#b3e5fc' }}
        >
          YOU WILL LEARN TO...
        </Typography>
        <List>
          <Item
            title="De-clutter and sort"
            content="to make your decision-making process quicker and easier to make choices on what you want to keep, discard or donate."
          />
          <Item
            title="Create Organization"
            content="to set up functional zones, where everything has a designated place to be stored, so that your daily routines are stress-free and easy."
          />
          <Item
            title="Optimize your space"
            content="with organizing containers and systems that support your daily routines."
          />
          <Item
            title="Break down projects"
            content="strategically into more manageable bite-size tasks that aren’t overwhelming."
          />
          <Item
            title="Increase your confidence"
            content="with the organizing skills and experience you gain."
          />
        </List>
      </Grid>
    </Grid>
  )
}

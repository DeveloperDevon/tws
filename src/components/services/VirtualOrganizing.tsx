import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const Item: React.FC = ({ children }) => {
  return (
    <ListItem>
      <ListItemIcon>
        <SendIcon fontSize="small" color="primary" />
      </ListItemIcon>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  )
}

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
          <Item>
            You&#39;re motivated and committed to reach your organizing goals.
          </Item>
          <Item>
            You&#39;re comfortable using technology on your phone, tablet, or
            computer.
          </Item>
          <Item>
            You&#39;re able to do the work, but you need someone to check in
            with you frequently for accountability.
          </Item>
          <Item>
            You are busy and don&#39;t have time for in-person organizing
            sessions so you want to get organized on your own time schedule.
          </Item>
          <Item>
            You love customized, personal advice for your home &amp; budget.
          </Item>
          <Item>
            You live outside the Roseville, CA area but want help to get
            organized by The Whole Shebang!
          </Item>
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
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>
                A FREE discovery phone call
              </span>{' '}
              to make sure this process is a good fit for you, so you don’t
              waste time and money on a process that’s not going to work for
              you.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>
                Step-by-step guidance from a professional home organizer
              </span>{' '}
              so you don’t feel alone and overwhelmed, you get advice along the
              way and we break down the process into manageable steps just for
              you.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>A Follow up email</span> to
              remind you of next steps and keep you accountable so you continue
              to make progress toward your inspiring living space.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>
                Flexible scheduling options
              </span>{' '}
              so you get to choose how often you want to schedule additional
              virtual organizing sessions, whether it is daily, weekly or
              monthly.
            </ListItemText>
          </ListItem>
        </List>

        <Typography
          variant="body1"
          style={{ padding: 15, fontWeight: 'bold', color: '#b3e5fc' }}
        >
          YOU WILL LEARN TO...
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>De-clutter and sort</span> to
              make your decision-making process quicker and easier to make
              choices on what you want to keep, discard or donate.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>Create Organization</span> to
              set up functional zones, where everything has a designated place
              to be stored, so that your daily routines are stress-free and
              easy.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>Optimize your space</span>{' '}
              with organizing containers and systems that support your daily
              routines.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>Break down projects</span>{' '}
              strategically into more manageable bite-size tasks that aren’t
              overwhelming.
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <SendIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText>
              <span style={{ fontWeight: 'bold' }}>
                Increase your confidence
              </span>{' '}
              with the organizing skills and experience you gain.
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  )
}

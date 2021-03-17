import { useState } from 'react'
import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@material-ui/core'
import emailjs from 'emailjs-com'
import { EmailConfirmationDialog } from '../components/EmailConfirmationDialog'
import { Spinner } from '../components/Spinner'

export const ContactPage = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const USER_ID = 'user_uYoO6LaM6kFSy9INHIbUP'
  // const ACCESS_TOKEN = '26b3971a16bce2a89f73572260f98a14'
  const SERVICE_ID = 'service_5eukz0r'
  const TEMPLATE_ID = 'template_mhk4tma'

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target)
    setSubmitting(true)

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text)
        setDialogOpen(true)
        setSubmitting(false)
      },
      (error) => {
        setSubmitting(false)
        console.log(error.text)
      }
    )
  }

  return (
    <Container>
      <EmailConfirmationDialog
        setDialogOpen={setDialogOpen}
        open={dialogOpen}
      />
      <Spinner open={submitting} />
      <Typography variant="h6" style={{ textAlign: 'center', margin: 15 }}>
        Contact Us Today
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="name"
              type="text"
              label="Full Name"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="email"
              type="email"
              label="Email Address"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="phone"
              type="phone"
              label="Phone Number"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="address"
              label="Street Address"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="city"
              label="City"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              name="state"
              label="State"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              variant="outlined"
              name="zip"
              label="Zip Code"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="message"
              label="Message"
              style={{ width: '100%' }}
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12} style={{ margin: '15px 0px' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={submitting}
              style={{
                width: '100%',
              }}
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  )
}

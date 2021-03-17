import { Typography } from '@material-ui/core'
import { Testimonials } from '../components'

export const TestimonialsPage: React.FC = () => {
  return (
    <div>
      <Typography variant="h6" style={{ textAlign: 'center', marginTop: 10 }}>
        Testimonials
      </Typography>
      <Testimonials />
    </div>
  )
}

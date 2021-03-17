import { Card, Typography, TypographyTypeMap } from '@material-ui/core'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'

interface TestimonialProps {
  review: any
  reviewer: string
}

export const Testimonial: React.FC<TestimonialProps> = ({
  review,
  reviewer,
}) => {
  return (
    <Card style={{ margin: 15, padding: 15 }}>
      {review}
      <Typography
        variant="body1"
        style={{ fontWeight: 'bold', marginTop: 30, float: 'right' }}
      >
        {reviewer}
      </Typography>
    </Card>
  )
}

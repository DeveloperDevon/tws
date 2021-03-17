import { Grid } from '@material-ui/core'

interface CarouselItemProps {
  imgSrc: string
}

export const CarouselItem: React.FC<CarouselItemProps> = ({ imgSrc }) => (
  <Grid
    container
    direction="column"
    alignItems="center"
    justify="center"
    style={{ height: '100%', backgroundColor: 'lightgrey' }}
  >
    <Grid item>
      <img src={imgSrc} />
    </Grid>
  </Grid>
)

import { Carousel } from 'react-responsive-carousel'
import { CarouselItem } from '../components'

export const CarouselShowcase = () => {
  return (
    <Carousel showArrows showThumbs={false} showStatus={false}>
      <CarouselItem imgSrc="/img/showcase1.jpg" />
      <CarouselItem imgSrc="/img/showcase2.jpg" />
      <CarouselItem imgSrc="/img/showcase3.jpg" />
      <CarouselItem imgSrc="/img/showcase4.jpg" />
      <CarouselItem imgSrc="/img/showcase5.jpg" />
    </Carousel>
  )
}

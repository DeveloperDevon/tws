import { useMediaQuery } from '@material-ui/core'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

import {
  ContactUsButton,
  CarouselShowcase,
  GettingStarted,
  GridListShowcase,
  Packages,
  Services,
  ThreeGens,
  Welcome,
} from '../components'

export const HomePage = () => {
  const isMobile = useMediaQuery('(max-width: 600px)')
  return (
    <>
      <Welcome />
      {isMobile ? <CarouselShowcase /> : <GridListShowcase />}
      <ThreeGens />
      <GettingStarted />
      <Packages />
      <Services />
      <ContactUsButton />
    </>
  )
}

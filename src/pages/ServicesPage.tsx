import { Grid } from '@material-ui/core'
import {
  GiftCert,
  HomeDecor,
  Maintenance,
  MoveIntoYourHome,
  PrepYourMove,
  SeasonalMaintenance,
  ServicesIntro,
  VirtualOrganizing,
  VirtualOrganizingRates,
} from '../components'

export const ServicesPage = () => {
  return (
    <Grid container>
      <ServicesIntro />
      <PrepYourMove />
      <MoveIntoYourHome />
      <HomeDecor />
      <Maintenance />
      <SeasonalMaintenance />
      <VirtualOrganizing />
      <VirtualOrganizingRates />
      <GiftCert />
    </Grid>
  )
}

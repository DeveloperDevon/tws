import { GridList, GridListTile } from '@material-ui/core'

export const GridListShowcase = () => {
  return (
    <GridList cellHeight={320} cols={4}>
      <GridListTile cols={2}>
        <img src="/img/showcase1.jpg" alt="img1" />
      </GridListTile>
      <GridListTile cols={2}>
        <img src="/img/showcase2.jpg" alt="img1" />
      </GridListTile>
      <GridListTile cols={1}>
        <img src="/img/showcase3.jpg" alt="img1" />
      </GridListTile>
      <GridListTile cols={2}>
        <img src="/img/garage.jpeg" alt="img1" />
      </GridListTile>
      <GridListTile cols={1}>
        <img src="/img/showcase4.jpg" alt="img1" />
      </GridListTile>
    </GridList>
  )
}

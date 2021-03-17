import { Grid, CircularProgress, Backdrop } from '@material-ui/core'

interface Props {
  open: boolean
}

export const Spinner: React.FC<Props> = ({ open }) => (
  <Backdrop style={{ zIndex: 100 }} open={open}>
    <CircularProgress />
  </Backdrop>
)

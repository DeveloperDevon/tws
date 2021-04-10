import { Typography } from '@material-ui/core'

export const GettingStarted: React.FC = () => {
  return (
    <div style={{ padding: 15 }}>
      <Typography variant="h6" style={{ fontWeight: 'bold' }}>
        Getting started with us is as easy as...
      </Typography>
      <Typography variant="body1">
        <span style={{ fontSize: 30, color: 'lightblue' }}>X</span> Schedule
        your FREE in home consultation. Our time together will be 100% non-
        judge-mental and stress FREE.
      </Typography>
      <Typography variant="body1">
        <span style={{ fontSize: 30, color: 'lightblue' }}>Y</span> Storage
        Solutions are personal and we will find the best storage solution that
        is perfect for you, your space and most importantly, your budget.
      </Typography>
      <Typography variant="body1">
        <span style={{ fontSize: 30, color: 'lightblue' }}>Z</span> We will
        prepare a customized quote for the spaces you need help with.
      </Typography>
    </div>
  )
}

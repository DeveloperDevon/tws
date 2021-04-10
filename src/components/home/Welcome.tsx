import { Typography } from '@material-ui/core'

export const Welcome: React.FC = () => {
  return (
    <Typography variant="h6" style={{ padding: 15, fontFamily: 'bellota' }}>
      Welcome to{' '}
      <span style={{ color: 'lightblue', fontWeight: 'bold' }}>
        The Whole Shebang!
      </span>{' '}
      Where we offer affordable and attainable organization for the everyday
      person.
    </Typography>
  )
}

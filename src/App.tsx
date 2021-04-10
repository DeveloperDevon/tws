import React from 'react'
import AppRouter from './AppRouter'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import lightblue from '@material-ui/core/colors/lightBlue'
import grey from '@material-ui/core/colors/grey'

const App: React.FC = () => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: 'bellota',
    },
    palette: {
      primary: {
        main: lightblue[100],
        contrastText: grey[50],
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App

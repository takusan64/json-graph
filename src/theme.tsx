import { createMuiTheme } from '@material-ui/core/styles'
import { red, grey, green } from '@material-ui/core/colors'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: green[400],
    },
    secondary: {
      main: "#E1A87A"
    },
    error: {
      main: red["500"],
      light: red["300"],
      dark: red["900"],
    },
    background: {
      default: grey[100]
    }
  },
  typography: {
    button: {
        textTransform: "none"
    },
    fontSize: 14
  },
  overrides: {
    MuiTypography: {
      root: {
        wordWrap: "break-word"
      }
   },
  },
  props: {
    MuiTextField: {
        variant: "outlined"
    }
  }
})

export default theme
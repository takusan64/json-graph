// The MIT License (MIT)
// Copyright (c) 2015 recharts
// https://github.com/recharts/recharts/blob/master/LICENSE

import ReactDOM from 'react-dom'
import App from './App'
import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)

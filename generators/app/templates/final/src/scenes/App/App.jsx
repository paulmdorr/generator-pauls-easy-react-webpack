import React, { Component } from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import style from './styles.css'

injectTapEventPlugin()

class App extends Component {
  render () {
    return <MuiThemeProvider>
      <div>App goes here!</div>
    </MuiThemeProvider>
  }
}

render(<App/>, document.getElementById('app'))

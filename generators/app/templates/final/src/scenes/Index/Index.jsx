import React, { Component } from 'react'
import { render } from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import style from './style.css'

injectTapEventPlugin()

class Index extends Component {
  render () {
    return <MuiThemeProvider>
      <div>Index goes here!</div>
    </MuiThemeProvider>
  }
}

render(<Index/>, document.getElementById('index'))

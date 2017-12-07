import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class <%= name %> extends Component {
  render() {
    return (
      <div>
        Your component content here
      </div>
    )
  }
}

<%= name %>.propTypes = {
  exampleProp: PropTypes.string
}

export default <%= name %>

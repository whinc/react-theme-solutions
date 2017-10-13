import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {themeble} from './none-ui'

class MyButton extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static defaultProps = {
    title: ''
  }

  render () {
    const {title} = this.props
    const {
      fontFamily,
      borderRadius,
      palette: {
        primaryColor,
        textColor
      }
    } = this.props.theme
    return <button style={{backgroundColor: primaryColor, color: textColor, fontFamily, borderRadius}}>{title}</button>
  }
}

export default themeble()(MyButton)

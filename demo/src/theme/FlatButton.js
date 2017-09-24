import React, {Component} from 'react'
import PropTypes from 'prop-types'

class FlatButton extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  static contextTypes = {
    theme: PropTypes.object.isRequired
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
    } = this.context.theme
    return <button style={{backgroundColor: primaryColor, color: textColor, fontFamily, borderRadius}}>{title}</button>
  }
}

export default FlatButton
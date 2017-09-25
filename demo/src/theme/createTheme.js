import LightTheme from './PresetThemes/LightTheme'
import merge from 'lodash.merge'

/**
 * Create a new theme object base on default theme and input theme
 * 
 * @export
 * @param {object} theme 
 * @param {object} more 
 * @returns {object}
 */
export default function createTheme (theme = {}, ...more) {
  return merge({}, LightTheme, theme, ...more)
}
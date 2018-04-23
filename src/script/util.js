/**
 *
 * @param {String} value
 * @param {Array} arr
 * @return {Boolean}
 */
export function oneOf (value, arr) {
  return arr.indexOf(value) > -1
}

export function getStyle (element, styleName) {
  if (!element || !styleName) return null

  try {
    const computed = document.defaultView.getComputedStyle(element, '')
    return element.style[styleName] || computed ? computed[styleName] : null
  } catch (e) {
    return element.style[styleName]
  }
}

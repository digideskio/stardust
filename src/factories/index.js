import createFactory from './createFactory'

import Image from '../elements/Image/Image'
import Icon from '../elements/Icon/Icon'

/**
 * Returns an Image element from an image src, Image element, or props object.
 * @type {function}
 * @param {string|ReactElement|object} val The value to render.
 * @param {object} [props = {}] Optional additional props.
 * @returns {ReactElement|undefined}
 */
export const createImage = createFactory(Image, value => ({ src: value }))

/**
 * Returns an Icon element from an icon name, Icon element, or props object.
 * @type {function}
 * @param {string|ReactElement|object} val The value to render.
 * @param {object} [props = {}] Optional additional props.
 * @returns {ReactElement|undefined}
 */
export const createIcon = createFactory(Icon, value => ({ name: value }))

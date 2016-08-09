import React, { PropTypes } from 'react'
import classNames from 'classnames'
import META from '../../utils/Meta'
import { getUnhandledProps } from '../../utils/propUtils'

function ModalDescription(props) {
  const { children, className } = props

  const classes = classNames(
    className,
    'description'
  )

  const rest = getUnhandledProps(ModalDescription, props)

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  )
}

ModalDescription._meta = {
  name: 'ModalDescription',
  type: META.type.module,
  parent: 'Modal',
}

ModalDescription.propTypes = {
  /** Primary content */
  children: PropTypes.any,

  /** Classes to add to the className */
  className: PropTypes.string,
}

export default ModalDescription

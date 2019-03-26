import React from "react";
import PropTypes from "prop-types";
import classnames from 'classnames'



const ItineararyBody = props => {

  const bgClass = classnames(
    'nmt-16',
    'mb-16',
    'bg-white',
    'bbr-4',
    'p-32',
    props.className
  )

  return (
    <div className={bgClass}>
      {props.children}
    </div>
  )
};

ItineararyBody.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

ItineararyBody.defaultProps = {
  className: ''
};

export default React.memo(ItineararyBody);
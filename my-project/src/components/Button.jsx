import PropTypes from "prop-types"

const Button = ({onClick, disabled, icon, className}) => {
  return (
    <button 
        onClick={onClick}
        className={`${className}`}
        disabled={disabled}
    >
        {icon}
    </button>

  )
}

Button.propTypes={
    onClick: PropTypes.func.isRequired, // Function prop
    children: PropTypes.node.isRequired, // React node prop
    icon: PropTypes.any,
    className: PropTypes.string,          // String prop (optional)
    disabled: PropTypes.bool               // Boolean prop (optional)
}
export default Button

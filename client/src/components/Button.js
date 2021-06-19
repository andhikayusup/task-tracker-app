import PropTypes from 'prop-types'

const Button = ({color, title, onClick}) => {
    return <button onClick={onClick} style={{ backgroundColor: color}} className='btn'> {title} </button>
}

Button.defaultProps = {
    title: 'Task Tracker'
}

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button

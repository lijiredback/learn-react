import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ServiceItem extends Component {
    constructor(props) {
        super(props)
        this.handleItem = this.handleItem.bind(this)
    }

    componentWillReceiveProps() {
        console.log('componentWillReceiveProps --- 执行了');
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.item !== this.props.item
    }

    render() {
        console.log('render子 --- 执行了');
        return (
            <li onClick={ this.handleItem }>
                { this.props.num } - { this.props.item }
            </li>
        )
    }

    handleItem() {
        this.props.deleteItem(this.props.index)
    }
}

ServiceItem.propTypes = {
    num: PropTypes.number.isRequired,
    item: PropTypes.string,
    index: PropTypes.number,
    deleteItem: PropTypes.func
}

ServiceItem.defaultProps = {
    num: 22
}

export default ServiceItem
import React, { Component, Fragment } from 'react'
import ServiceItem from './ServiceItem'


class Service extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            serviceList: ['哈哈', '嘻嘻', '呵呵']
        }
        this.deleteServiceItem = this.deleteServiceItem.bind(this)
    }
    render() {
        return (
            <Fragment>
                <div>
                    <input 
                        value={this.state.inputValue} 
                        onChange={this.changeValue.bind(this)} 
                        ref={ input => this.input = input }/>
                    <button onClick={this.addItem.bind(this)}>增加</button>
                </div>
                <ul ref={ ul => this.ul = ul }>
                    {
                        this.state.serviceList.map((item, index) => {
                            return (
                                <ServiceItem 
                                    key={ index }
                                    item={ item }
                                    index = { index }
                                    deleteItem = { this.deleteServiceItem }
                                />
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }

    changeValue(e) {
        console.log(e);
        this.setState({
            // inputValue: e.target.value
            inputValue: this.input.value
        })
    }

    addItem() {
        this.setState({
            serviceList: [...this.state.serviceList, this.state.inputValue],
            inputValue: ''
        }, () => {
            let lisLength = this.ul.querySelectorAll('li').length;
            console.log(`li的个数是${lisLength}`)
        })
    }

    deleteServiceItem(index) {
        console.log(index);
        let list = this.state.serviceList;
        list.splice(index, 1);
        this.setState({
            serviceList: list
        })
    }
}

export default Service
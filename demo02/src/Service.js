import React, { Component, Fragment } from 'react'
import './Service.css'

class Service extends Component {
    constructor(props) {
        // 调用父级方法，也就是 Component 中的方法
        super(props)
        // 所有的数据写在 state 中
        this.state = {
            inputValue: '',
            serviceList: ['宫保鸡丁', '鱼香肉丝']
        }
    }


    render() {
        return (
            <Fragment>
                <div>
                    <input className="input" value={ this.state.inputValue } onChange={this.changeValue.bind(this)}/>
                    <button onClick={ this.addToList.bind(this) }>添加</button>
                </div>
                <ul>
                    { this.state.serviceList.map((item, index) => {
                        return (
                        <li 
                            key={ index } 
                            onClick={ this.deleteItem.bind(this, index) }
                            dangerouslySetInnerHTML={ { __html: item } }
                        >
                        </li>)
                    }) }
                </ul>
            </Fragment>
        )
    }

    changeValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    addToList(e) {
        this.setState({
            serviceList: [...this.state.serviceList, this.state.inputValue ],
            inputValue: ''
        })
    }

    deleteItem(index) {
        const list = this.state.serviceList;
        list.splice(index, 1);
        this.setState({
            serviceList: list,
        })
    }
}

export default Service;
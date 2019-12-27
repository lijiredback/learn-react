import React, { Component } from 'react'
import './style.css'

class Animate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: true
        }
        this.toToggle = this.toToggle.bind(this)
    }
    render() {
        return (
            <div className="container">
                <div className={ this.state.isShow ? 'show' : 'hide'}>来个动画试试</div>
                <button onClick={ this.toToggle }>显示/隐藏</button>
            </div>
        )
    }

    toToggle() {
        console.log(12);
        this.setState({
            isShow: !this.state.isShow
        })
    }
}

export default Animate
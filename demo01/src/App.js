import React, { Component } from 'react'

class App extends Component {
    render() {
        // jxs and hello world
        return(
            <ul>
                <li>{ false ? 'welcome react' : 'hello react' }</li>
                <li>2</li>
            </ul>
        )
    }
}

export default App
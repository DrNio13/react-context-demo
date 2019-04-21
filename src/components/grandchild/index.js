import React from 'react'
import './index.css'

// GrandChildComponent receives context from parent as props
class GrandChildComponent extends React.Component {
    
    // enable this and app theme will be light as soon as GrandChildComponent rendered
    // context can be used in lifecycle hooks or inside other function calls
    
    // componentDidMount() {
    //     this.props.toggleTheme()
    // }

    render() {
        return (
            <div id='grand-child'>
                <h4>GrandChild Component</h4>
                <pre>shared theme {this.props.theme}</pre>
                <button onClick={this.props.toggleTheme}>toggleTheme</button>
            </div>
        )
    }
}

export default GrandChildComponent
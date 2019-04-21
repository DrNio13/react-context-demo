import React from 'react'
import GrandChildComponent from '../grandchild';
import './index.css'
import ThemeContext from '../../AppContext';

// In this component we see two ways of how to consume context in this component - use your preferred way
// ChildComponent will be exported with context ( context can be used in lifecycle hooks or inside other function calls )
// GrandChildComponent will receive context as props inside the render method ( context can be used in lifecycle hooks or inside other function calls )

class ChildComponent extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        // do something
        window.alert(this.props.theme)

        // then call context method
        this.props.toggleTheme()
    }

    render() {
        return (
            <div id='child'>
                <h4>Child Component</h4>
                <pre>shared theme: {this.props.theme}</pre>
                <button onClick={this.props.toggleTheme}>toggleTheme</button>

                {/* call context method from another function */}
                <button onClick={this.handleClick}>do something and call toggleTheme</button>

                {/* another way to use context in the render method */}
                <div>
                    <ThemeContext.Consumer>
                        {({ theme, toggleTheme }) => (
                            <GrandChildComponent theme={theme} toggleTheme={toggleTheme} />
                        )}
                    </ThemeContext.Consumer>
                </div>

            </div>
        )
    }
}

// Use any of the following ways

// kudos to Brian Holt https://frontendmasters.com/teachers/brian-holt/
// https://frontendmasters.com/courses/complete-react-v4/using-context-in-lifecycle-methods/
// export named function for better debugging

// export default function ChildComponentWithContext(props) {
//     return (
//         <ThemeContext.Consumer>
//             {({ theme, toggleTheme }) => (
//                 <ChildComponent {...props} theme={theme} toggleTheme={toggleTheme} />
//             )}
//         </ThemeContext.Consumer>
//     )
// }


// HOC-like style
export default class ChildComponentWithContext extends React.Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {({ theme, toggleTheme }) => (
                    
                    // we have to use this.props since we are inside a component
                    <ChildComponent {...this.props} theme={theme} toggleTheme={toggleTheme} />

                )}
            </ThemeContext.Consumer>
        )
    }
}
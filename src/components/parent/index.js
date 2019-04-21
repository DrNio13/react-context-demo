import React from 'react'
import './index.css'
import ThemeContext from '../../AppContext';

class ParentComponent extends React.Component {
    
    render() {
        return (
            <div id='parent'>
            
                {/* one way to use context in a component is to use the Consumer inside the render method */}
                {/* context can be used only inside the render method with this technique  */}
        
                <ThemeContext.Consumer>
                    {/* deconstruct context object properties */}
                    {({ theme, toggleTheme }) => (
                        // we have to return one element ( react context rule )
                        <div>
                            <h2>Parent Component</h2>
                            <pre>shared theme {theme}</pre>
                            <button onClick={toggleTheme}>toggleTheme</button>
                        </div>
                    )}
                </ThemeContext.Consumer>

                {this.props.children}
            </div>
        )
    }
}

export default ParentComponent
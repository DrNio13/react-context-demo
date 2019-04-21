import React from 'react'
import './index.css'

export default class IntroComponent extends React.Component {
    render() {
        return (
            <header id='intro'>
                <article>
                    <h1>React Context demo</h1>
                    <pre>React version {React.version}</pre>
                </article>
            </header>
        )
    }
}
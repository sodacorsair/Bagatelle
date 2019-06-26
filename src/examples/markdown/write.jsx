import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

const markdown = `
# This is a header\n\nAnd this is a paragraph
`

class Write extends Component {

    state = {
        markdownText: markdown,
    }

    handleClick(temp) {
        this.setState({ markdownText: temp.value })
    }

    render() {
        return (
            <div>
                <h1>write</h1>
                <ReactMarkdown
                    source={this.state.markdownText}
                >
                </ReactMarkdown>
                <button onClick={() => this.handleClick(this.temp)}>
                    submit
                </button>
                <textarea id="editor" ref={(input) => {this.temp = input}} />

                {this.state.markdownText && (
                    <div
                        className="article-detail"
                    />
                )}
            </div>
        )
    }
}

export default Write;
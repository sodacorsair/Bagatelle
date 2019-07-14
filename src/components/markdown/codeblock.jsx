import SyntaxHighlighter from 'react-syntax-highlighter';
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const React = require('react')

class CodeBlock extends React.Component {
    render() {
        const { value } = this.props;
    
        return (
          <SyntaxHighlighter language="" style={github}>
            {value}
          </SyntaxHighlighter>
        );
      }
}

export default CodeBlock;
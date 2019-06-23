import React, { Component, lazy, Suspense } from 'react';
import Loadable from 'react-loadable';

export const asyncComponent = importComponent => 
    class AsyncComponent extends Component {
        constructor(props) {
            super(props);
            this.state = { component: null }
        }

        async componentDidMount() {
            const { default: component } = await importComponent();
            this.setState({ Component })
        }

        render() {
            const RenderComponent = this.state.component;
            return RenderComponent ? 
                <RenderComponent {...this.props} /> : <div>loading...</div>
        }
    }

export const lazyLoad = importComponent =>
    Loadable({
        loader: importComponent,
        loading: <div>loading...</div>
    })

export default WrappedComponent => 
    class extends Component {
        render()  {
            return (
                <Suspense fallack={<div>Loading...</div>}>
                    <WrappedComponent {...this.props} />
                </Suspense>
            )
        }
    }
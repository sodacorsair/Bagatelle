import React, { Component } from 'react';
import '@/App.less';
import { connect } from 'react-redux';
import { Button } from 'antd';
import { addCount } from '@/redux/demo/actionCreators';
import { actionCreators } from './redux/demo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Button type='primary'>antd button</Button>
          {this.props.count}
        <Button type='primary'onClick={this.props.addCount}>
          Click
        </Button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  count: state.demo.count,
})

const mapDispatchToProps = (dispatch) => ({
  addCount() {
    dispatch(actionCreators.addCount());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

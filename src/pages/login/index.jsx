import React, { Component } from 'react';
import { connect } from 'react-redux'

class Login extends Component {
  render() {
    return (
      <div>{this.props.text}</div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.login.text
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
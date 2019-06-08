import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Wrapper
} from "./style"

class Login extends Component {
  render() {
    return (
        <Wrapper></Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  text: state.login.text
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
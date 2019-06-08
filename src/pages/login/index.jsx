import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Wrapper,
  Content,
  Logo,
  InputStyle,
  Button,
  LinkContent,
} from "./style"
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import {actionCreator} from './store'


class Login extends Component {
  render() {
    return (
        <Wrapper>
         <Content>
           <Logo></Logo>
            <InputStyle>
              <Input
               placeholder=" 手机号"
               maxLength={11}
               onChange={ (e)=> { this.props.onChangeUsername(e) }}
              />
            </InputStyle>
            <InputStyle>
              <Input.Password placeholder=" 密码" onChange={ (e)=> { this.props.onChangePassword(e) }}/>
            </InputStyle>
            
            <LinkContent>
              <Link to="/" >注册</Link>
              <Link to="/" >忘记了密码?</Link>
            </LinkContent>
          <Button onClick={ () => (this.props.login(this.props.username, this.props.password))}>按钮</Button>
         </Content>
        </Wrapper>

    );
  }
 
}

const mapStateToProps = state => ({
    username: state.login.username,
    password: state.login.password,
    token: state.login.token,
})

const mapDispatchToProps = dispatch => ({
  login(username, password) {
    console.log(username)
    console.log(password)
    dispatch(actionCreator.loginAsynAction(username, password))
  },
  onChangeUsername(e) {
    dispatch(actionCreator.onUsernameChangeAction(e.target.value))
  },
  onChangePassword(e) {
    dispatch(actionCreator.onPasswordChangeAction(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
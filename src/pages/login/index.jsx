import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Button,
  Content,
  InputStyle,
  LinkContent,
  Logo,
  Wrapper
} from "./style"
import {Input} from 'antd';
import {Link} from 'react-router-dom';
import {actionCreator} from './store'

const { Password } = Input;

class Login extends Component {
  render() {
    const {username, password} = this.props;
    return (
      <Wrapper>
        <Content>
          <Logo/>
          <InputStyle style={{marginBottom: '26px'}}>
            <Input
              placeholder="手机号"
              maxLength={11}
              onChange={(e) => this.props.onChangeUsername(e)}
            />
          </InputStyle>
          <InputStyle style={{marginBottom: '20px'}}>
            <Password
              placeholder="密码"
              onChange={(e) => {this.props.onChangePassword(e)}}/>
          </InputStyle>
          <LinkContent>
            <Link to="/register/">
              <span style={{color: '#5269DA'}}>快速注册</span>
            </Link>
            <Link to="/">
              <span style={{color: '#717171'}}>忘记了密码？</span>
            </Link>
          </LinkContent>
          <Button onClick={() => (
            this.props.login(username, password)
          )}>登录</Button>
        </Content>
      </Wrapper>
    );
  }

}

const mapStateToProps = state => ({
  username: state.login.username,
  password: state.login.password,
  token: state.login.token
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

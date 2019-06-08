import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Wrapper,
  Content,
  Logo,
  InputStyle,
  Button,
} from "./style"
import { Input } from 'antd';
import {actionCreator} from './store';


class Register extends Component {
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
            
          <Button onClick={ () => (this.props.login(this.props.username, this.props.password))}>按钮</Button>
         </Content>
        </Wrapper>

    );
  }
 
}

const mapStateToProps = state => ({
    username: state.register.username,
    password: state.register.password,
    phone: state.register.phone,
    vcode: state.register.vcode,
    token: state.register.token,
})

const mapDispatchToProps = dispatch => ({
  register(username, password, vcode, phone) {
    dispatch(actionCreator.registerAsynAction(username, password, vcode, phone))
  },
  onChangeUsername(e) {
    dispatch(actionCreator.onUsernameChangeAction(e.target.value))
  },
  onChangePassword(e) {
    dispatch(actionCreator.onPasswordChangeAction(e.target.value))
  },
  onChangePhone(e) {
    dispatch(actionCreator.onPhoneChangeAction(e.target.value))
  },
  onChangeVcode(e) {
    dispatch(actionCreator.onVerifyChangeAction(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
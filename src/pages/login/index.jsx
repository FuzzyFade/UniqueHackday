import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Wrapper,
  Content,
  Logo,
  InputStyle,
} from "./style"
import { Input } from 'antd';



class Login extends Component {
  render() {
    return (
        <Wrapper>
         <Content>
           <Logo></Logo>
            <InputStyle>
              <Input
               placeholder="  手机号"
               maxLength={11}
              />
            </InputStyle>
            <InputStyle>
              <Input.Password placeholder="  密码" />
            </InputStyle>
            
         </Content>
        </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  text: state.login.text
})

const mapDispatchToProps = dispatch => ({
  
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)
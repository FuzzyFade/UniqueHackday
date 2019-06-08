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
              />
            </InputStyle>
            <InputStyle>
              <Input.Password placeholder=" 密码" />
            </InputStyle>
            
            <LinkContent>
              <Link to="/" >注册</Link>
              <Link to="/" >忘记了密码?</Link>
            </LinkContent>
          <Button>按钮</Button>
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
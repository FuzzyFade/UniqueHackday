import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Wrapper,
  Content,
  Logo,
  InputStyle,
  Btn,
  PwdInput,
  SmallBtn,
  LinkContent,
} from "./style"
import { Input, Button } from 'antd';
// import { Link } from 'react-router-dom';
import {actionCreator} from './store';
import { post } from '../../lib/common'
import axios from 'axios'
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {isShow: true}
    this.getVcode = this.getVcode.bind(this)
  }
  render() {
    return (
        <Wrapper>
         <Content>
           <Logo></Logo>
           { this.state.isShow ? (
             <div >
             <InputStyle>
                <Input
                 placeholder=" 仅支持大陆手机号"
                 maxLength={11}
                 onChange={ (e)=> { this.props.onChangePhone(e) }}
                />
              </InputStyle>
              <PwdInput>
                <Input.Password placeholder=" 6位验证码"  onChange={ (e)=> { this.props.onChangeVcode(e) }}/>
                <SmallBtn onClick={ () => this.getVcode(this.props.phone) }>
                  获取验证码
                </SmallBtn>
              </PwdInput>
              <Btn onClick={ () => {this.setState({isShow: false})} }>下一页</Btn>
             </div>
            ) : (
              <div>
                <InputStyle>
                <Input
                 placeholder=" 昵称"
                 onChange={ (e)=> { this.props.onChangeUsername(e) }}
                />
                </InputStyle>
                <InputStyle>
                <Input
                 placeholder=" 密码"
                 onChange={ (e)=> { this.props.onChangePassword(e) }}
                />
                </InputStyle>
                <InputStyle>
                <Input
                 placeholder=" 确认密码"
                />
                </InputStyle>
                <Btn onClick={ () => {this.props.register(this.props.username, this.props.password, this.props.vcode, this.props.phone)}}>按钮</Btn>
              </div>
            )
           }
            
         </Content>
        </Wrapper>

    );
  }
  async getVcode(phone) {
    console.log("phone", phone)
    let  data = {"phone": phone }
    let url = 'https://star.exql.top/api/user/msg'
    let ret = await new Promise(resolve => {
    axios({
      method: 'post',
      url,
      data,
    })
    .then(res => resolve(res.data))
  })
  .then(ret => ret)
     return ret
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
    console.log("username",username, "vcode",vcode)
    dispatch(actionCreator.registerAsynAction(username, password, vcode, phone))
  },
  onChangeUsername(e) {
    // console.log("onChangeUsername")
    dispatch(actionCreator.onUsernameChangeAction(e.target.value))
  },
  onChangePassword(e) {
    dispatch(actionCreator.onPasswordChangeAction(e.target.value))
  },
  onChangePhone(e) {
    dispatch(actionCreator.onPhoneChangeAction(e.target.value))
  },
  onChangeVcode(e) {
    console.log("onChangeVcode",e.target.value)
    dispatch(actionCreator.onVerifyChangeAction(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)
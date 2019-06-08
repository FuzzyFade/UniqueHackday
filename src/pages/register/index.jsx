import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Wrapper,
  Content,
  Logo,
  InputStyle,
  SmallBtn,
  Button,
  Text,
  ConfirmCode
} from "./style"
import { Input, message } from 'antd';
import { actionCreator} from './store';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
const {Password} = Input
// import {Info} from './info'

function Info(props) {
  return (
  <div>
    <h1>你错了！！！</h1>
  </div>
  )
}
class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {isShow: true, temp: ''}
    this.getVcode = this.getVcode.bind(this)
    this.verifyPassword = this.verifyPassword.bind(this)
  }

  render() {
    return (
      <Wrapper>
        <Content>
          <Logo/>
          {this.state.isShow ? (
            <div>
              <InputStyle style={{marginBottom: '26px'}}>
                <Input
                  placeholder="仅支持大陆手机号"
                  maxLength={11}
                  onChange={(e) => {
                    this.props.onChangePhone(e)
                  }}
                />
              </InputStyle>
              <ConfirmCode>
                <Input
                  style={{width: '171px', marginRight:'10px'}}
                  placeholder="6位验证码"
                  onChange={(e) => {
                  this.props.onChangeVcode(e)
                }}/>
                <SmallBtn
                  style={{width: '107px', borderColor: '#C1C1C1'}}
                  onClick={() => this.getVcode(this.props.phone)}
                >
                  <Text>获取验证码</Text>
                </SmallBtn>
              </ConfirmCode>
              <Button onClick={() => {
                this.setState({isShow: false})
              }}>下一页</Button>
            </div>
          ) : (
            <div>
              <InputStyle style={{marginBottom: '26px'}}>
                <Input
                  placeholder="昵称"
                  onChange={(e) => {
                    this.props.onChangeUsername(e)
                  }}
                />
              </InputStyle>
              <InputStyle style={{marginBottom: '26px'}}>
                <Password
                  placeholder="密码"
                  onChange={(e) => {
                    this.props.onChangePassword(e)
                  }}
                />
              </InputStyle>
              <InputStyle style={{marginBottom: '10px'}}>
                <Password
                  placeholder="确认密码"
                  onChange={(e) => {
                    this.verifyPassword(e)
                  }}
                />
                </InputStyle>
                <Button onClick={ () => {this.props.register(
                  this.props.username,
                  this.props.password,
                  this.props.vcode,
                  this.props.phone,
                  this.state.temp
                )}}>注册</Button>
              </div>
            )
           }

         </Content>
         {this.props.token && <Redirect to="/home/"></Redirect>}
         {this.props.status && <Info></Info>}
        </Wrapper>

    );
  }

  async getVcode(phone) {
    console.log("phone", phone)
    let data = {"phone": phone}
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

  verifyPassword(e) {
    console.log("temp", e.target.value)
    this.setState({temp: e.target.value})
  }

}

const mapStateToProps = state => ({
  username: state.register.username,
  password: state.register.password,
  phone: state.register.phone,
  vcode: state.register.vcode,
  token: state.register.token,
  status: state.register.status,
})

const mapDispatchToProps = dispatch => ({
  register(username, password, vcode, phone, temp) {
    console.log("username", username, "vcode", vcode)
    if (temp !== password) {
      message.info("两次密码不一致")
    }
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
    console.log("onChangeVcode", e.target.value)
    dispatch(actionCreator.onVerifyChangeAction(e.target.value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)

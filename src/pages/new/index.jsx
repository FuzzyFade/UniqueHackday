import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Warpper,
  Header,
  HeaderTitle,
  TextTitle,
  HeaderLeft,
  HeaderRight,
  TextDesc
} from './style'
import {
  Link, Redirect
} from 'react-router-dom'
import { Icon, message, Modal, Button} from 'antd'
import axios from 'axios';

class New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textTitle: '',
      textDesc: '',
      visible: false,
      isfinished: false,
      isPublic: false
    }
    this.publish = this.publish.bind(this)
    this.handleCancel = this.handleCancel.bind(this)
    this.handleOk = this.handleOk.bind(this)
  }
  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Link to="/home/">
              <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            </Link>
            <HeaderTitle>打火石</HeaderTitle>
          </HeaderLeft>
          <HeaderRight onClick={ () => {this.showModal()}}>发布</HeaderRight>
        </Header>
        <Link to="/associate/">
          <Button style={{
            position: 'absolute',
            right: 12,
            top: 112}}
          >联想</Button>
        </Link>
        <TextTitle onChange={ (e)=> {this.setState({textTitle: e.target.value}) }}>
        </TextTitle>
        <TextDesc onChange={ (e) => {this.setState({textDesc: e.target.value})}}>
        </TextDesc>
        <Modal
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          cancelText="不公开"
          okText="公开"
        >
          <p>是否选择公开？</p>
        </Modal>
        {this.state.isfinished && <Redirect to="/home/"></Redirect>}
      </Warpper>
    );
  }

  handleCancel() {
    this.setState({
      visible: false
    })
    this.publish()
  }

  handleOk() {
    this.setState({
      visible: false
    })
    this.publish()
  }

  showModal() {
    this.setState({
      visible: true
    })
  }

  async publish() {
    let data = {"title": this.state.textTitle, "content": this.state.textDesc, "is_publish": this.state.isPublic}
    let url = 'https://star.exql.top//api/idea/crud'
    await new Promise(
      resolve => {
        axios({
          method: 'post',
          data,
          url,
          headers: {'Authorization': `Stars ${this.props.token}`}
        }).then(
          ()=> {
            message.info("发布成功")
            this.setState({
              isfinished: true
            })
          }
        ).catch( ()=> {message.info("发布失败")})
      }
    )
  }
}

const mapDispatchToProps = dispatch => ({

})

const mapStateToProps = state => ({
  token: state.login.token
})

export default connect(mapStateToProps, mapDispatchToProps)(New)

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
  Link
} from 'react-router-dom'
import { Icon, message } from 'antd'
import axios from 'axios';

class New extends Component {
  constructor(props) {
    super(props)
    this.state = {textTitle: '', textDesc: ''}
    this.publish = this.publish.bind(this)
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
          <HeaderRight onClick={ () => {this.publish()}}>发布</HeaderRight>
        </Header>
        <TextTitle onChange={ (e)=> {this.setState({textTitle: e.target.value}) }}>
        </TextTitle>
        <TextDesc onChange={ (e) => {this.setState({textDesc: e.target.value})}}>
        </TextDesc>
      </Warpper>
    );
  }
  async publish() {
    let data = {"title": this.state.textTitle, "content": this.state.textDesc}
    let url = 'https://star.exql.top//api/idea/crud'
    let ret = await new Promise(
      resolve => {
        axios({
          method: 'post',
          data,
          url,
          headers: {'Authorization': `Stars ${this.props.token}`}
        }).then(
          ()=> {message.info("发布成功")}
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

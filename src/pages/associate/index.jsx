import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  Warpper,
  Header,
  HeaderLeft,
  HeaderTitle,
  Blanket,
  BubbleBox,
  ItemBubble,
  LabelInput,
  AssociateBtn
} from './style'
import { Icon, message } from 'antd'
import axios from 'axios';

class Associate extends Component {
  constructor(props) {
    super(props)
    this.state = {word: '你好'}
    this.getAssociate = this.getAssociate.bind(this)
  }
  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Icon type="left" style={{ fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            <HeaderTitle>联想</HeaderTitle>
          </HeaderLeft>
        </Header>
        <Blanket>
          <LabelInput onChange={(e)=> {this.setState({word: e.target.value})}}></LabelInput>
          <AssociateBtn onClick={()=> {this.getAssociate()}}>联想</AssociateBtn>
        </Blanket>
      </Warpper>
    );
  }
  async getAssociate() {
    let params = {"word": this.state.word}
    let url = 'https://star.exql.top/api/idea/associate'
    let ret = await new Promise(
      resolve => {
        axios({
          method: 'get',
          params,
          url,
          headers: {'Authorization': `Stars ${this.props.token}`}
        }).then(
          ()=> {message.info("联想成功")}
        ).catch( ()=> {message.info("联想失败")})
      }
    )
  }
}

const mapStateToProps = state => ({
  token: state.login.token
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Associate)
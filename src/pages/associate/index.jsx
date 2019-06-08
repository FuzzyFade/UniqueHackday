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

function ItemList(props) {
  const data = props.data
  // console.log(props)
  // let data = ["你是谁你是谁你是爱玩屎的阿拉蕾", "你是谁的白衣少年什么歌", "你是谁你是谁", "你是谁为了谁是什么歌", "你是谁韩剧", "你是谁歌词", "你是谁的英文", "你是谁实验"]
  // if (props) {
  //    data = props.data
  // }
  const lists = data.map((item)=> <ItemBubble>{item}</ItemBubble>)
  return(
    <div>
      {lists} 
    </div>
  )
}
class Associate extends Component {
  constructor(props) {
    super(props)
    this.state = {word: '你好', ret: ["你是谁你是谁你是爱玩屎的阿拉蕾", "你是谁的白衣少年什么歌", "你是谁你是谁", "你是谁为了谁是什么歌", "你是谁韩剧", "你是谁歌词", "你是谁的英文", "你是谁实验"]}
    this.getAssociate = this.getAssociate.bind(this)
  }
  componentDidMount() {
    this.getAssociate()
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
          <ItemList data={this.state.ret}></ItemList>
          {/* <ItemBubble>联想起32</ItemBubble>
          <ItemBubble>联想起23</ItemBubble>
          <ItemBubble>联想起5345</ItemBubble> */}
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
          (res)=> {message.info("联想成功") ;this.setState({ret:res.data })}
        ).catch( ()=> {message.info("联想失败")})
      }
    )
    console.log("data", ret)
  }
}

const mapStateToProps = state => ({
  token: state.login.token
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Associate)
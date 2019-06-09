import React, {Component} from 'react';
import {connect} from 'react-redux'
import {AssociateBtn, Blanket, Header, HeaderLeft, HeaderTitle, ItemBubble, LabelInput, Warpper} from './style'
import {Icon, message} from 'antd'
import axios from 'axios';

class Associate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      ret: []
    };
    this.getAssociate = this.getAssociate.bind(this)
  }

  associateSuccess(res) {
    this.setState({ret: [...res.data.data]});
    message.info("联想成功")
  }

  render() {
    return (
      <Warpper>
        <Header>
          <HeaderLeft>
            <Icon type="left" style={{fontSize: '24px', color: '#fff', marginLeft: '16px'}}/>
            <HeaderTitle>联想</HeaderTitle>
          </HeaderLeft>
        </Header>
        <Blanket>
          <LabelInput onChange={(e) => {
            this.setState({word: e.target.value})
          }} value={this.state.word}/>
          {
            this.state.ret.map(
              (item, index) =>
                <ItemBubble
                  key={index}
                  onClick={() => this.setState({word: item})}
                >
                  {item}
                </ItemBubble>)
          }
          <AssociateBtn onClick={() => {
            this.getAssociate()
          }}>联想</AssociateBtn>
        </Blanket>
      </Warpper>
    );
  }

  async getAssociate() {
    let params = {"word": this.state.word};
    let url = 'https://star.exql.top/api/idea/associate';
    let ret = await new Promise(
      resolve => {
        axios({
          method: 'get',
          params,
          url,
          headers: {'Authorization': `Stars ${this.props.token}`}
        })
          .then(res => this.associateSuccess(res))
          .catch(() => message.info("联想失败"))
      }
    )
  }
}

const mapStateToProps = state => ({
  token: state.login.token
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Associate)

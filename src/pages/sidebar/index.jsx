import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Avatar, Circle, Name, Navigation, TopLayOut, TopContent, User, Wrapper} from './style'
import {Icon} from 'antd'

class SideBar extends Component {
  render() {
    const {username} = this.props;
    return (
      <Wrapper>
        <TopLayOut>
          <TopContent>
            <Navigation>
              <Icon type="left" style={{color: `#fff`, fontSize: `22px`, marginLeft: `8px`}}/>
            </Navigation>
            <User>
              <Avatar/>
              <Name>
                {username}
              </Name>
            </User>
          </TopContent>
          <Circle/>
        </TopLayOut>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  text: state.sidebar.text,
  username: state.sidebar.username
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)

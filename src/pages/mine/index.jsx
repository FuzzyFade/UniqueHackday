import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  Avatar,
  CardContainer,
  CardItem,
  CardText,
  Circle,
  ItemContainer,
  Line,
  MainContent,
  MomNumber,
  Name,
  Navigation,
  Num,
  SonNumber,
  TopContent,
  TopLayOut,
  UserContainer,
  UserLayOut,
  Wrapper
} from './style'
import {Card, Icon} from 'antd'
import 'antd/dist/antd.css';

class Mine extends Component {
  render() {
    const {username} = this.props;
    return (
      <Wrapper>
        <TopLayOut>
          <TopContent>
            <Navigation>
              <Icon type="left" style={{color: `#fff`, fontSize: `22px`, marginLeft: `8px`}}/>
            </Navigation>
            <UserLayOut>
              <UserContainer>
                <Avatar/>
                <Name>
                  {username}
                </Name>
              </UserContainer>
              <ItemContainer>
                <SonNumber>3</SonNumber>
                <Line> / </Line>
                <MomNumber>30</MomNumber>
              </ItemContainer>
            </UserLayOut>
          </TopContent>
          <Circle/>
        </TopLayOut>
        <MainContent>
          <Card style={{width: 300,borderRadius: '10px'}}>
            <CardContainer>
              <CardItem>
                <Icon type="bulb" style={{fontSize: `33px`}} theme="twoTone"/>
                <CardText>ideas</CardText>
                <Num>13</Num>
              </CardItem>
              <CardItem>
                <Icon type="star" style={{fontSize: `33px`}} theme="twoTone"/>
                <CardText>stars</CardText>
                <Num>33</Num>
              </CardItem>
              <CardItem>
                <Icon type="like" style={{fontSize: `33px`}} theme="twoTone"/>
                <CardText>关注</CardText>
                <Num>17</Num>
              </CardItem>
              <CardItem>
                <Icon type="heart" style={{fontSize: `33px`}} theme="twoTone"/>
                <CardText>粉丝</CardText>
                <Num>21</Num>
              </CardItem>
            </CardContainer>
          </Card>
        </MainContent>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  text: state.mine.text,
  username: state.mine.username
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Mine)

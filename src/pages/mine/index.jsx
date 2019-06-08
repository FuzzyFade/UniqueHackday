import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
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
  TopLayOut,
  TopNav,
  UserContainer,
  UserContent,
  UserLayOut,
  Wrapper
} from './style'
import {Avatar, Card, Icon} from 'antd'
import 'antd/dist/antd.css';

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueY: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({valueY: window.scrollY});
  }

  render() {
    const {username, avatar} = this.props;
    const {valueY} = this.state;
    return (
      <Wrapper>
        <TopNav style={{display: valueY <= 210 && 'none'}}>
          <Icon type="left" style={{color: `#fff`, fontSize: `22px`, margin: `0 8px`}}/>
          <Name>{username}</Name>
          <div style={{width: 38, height: 22}}/>
        </TopNav>
        <TopLayOut style={{display: valueY > 210 && 'none'}}>
          <UserContent placeTop={valueY}>
            <UserLayOut>
              <UserContainer>
                <Avatar
                  src={"https://exqlnet-note.oss-cn-shenzhen.aliyuncs.com/star/" + avatar + ".png"}
                  size={96}
                  style={{
                    margin: '8px',
                    border: '2px solid #ccd7e7',
                    borderRadius: '100px'
                  }}/>
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
            <Circle na={(210 - valueY) / 210}/>
          </UserContent>
          <Navigation>
            <Icon type="left" style={{color: `#fff`, fontSize: `22px`, marginLeft: `8px`}}/>
          </Navigation>
        </TopLayOut>
        <MainContent>
          <Card style={{marginTop: 300, width: 300, borderRadius: '10px', marginBottom: '15px'}}>
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
          <Card style={{width: 300, borderRadius: '10px', marginBottom: '15px'}}>
            <div style={{height: 1000}}>
            </div>
          </Card>
        </MainContent>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  text: state.mine.text,
  username: state.mine.username,
  avatar: state.mine.avatar
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Mine)

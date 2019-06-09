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
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import {actionCreator} from "./store";

class Mine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueY: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    this.props.postList(this.props.token);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({valueY: window.scrollY});
  }

  render() {
    const {username, head_pic} = this.props;
    const {idea, star, follower, followed, finish} = this.props;
    const {valueY} = this.state;
    return (
      <Wrapper>
        <TopNav style={{display: valueY <= 210 && 'none'}}>
          <Link to="/home/">
            <Icon type="left" style={{color: `#fff`, fontSize: `22px`, margin: `0 8px`}}/>
          </Link>
          <Name>{username}</Name>
          <div style={{width: 38, height: 22}}/>
        </TopNav>
        <TopLayOut style={{display: valueY > 210 && 'none'}}>
          <UserContent placeTop={valueY}>
            <UserLayOut>
              <UserContainer>
                <Avatar
                  src={"https://exqlnet-note.oss-cn-shenzhen.aliyuncs.com/star/" + head_pic + ".png"}
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
                  <SonNumber>{finish}</SonNumber>
                  <Line>/</Line>
                  <MomNumber>{idea}</MomNumber>
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
                <Num>{idea}</Num>
              </CardItem>
              <Link to="/star/">
                <CardItem>
                  <Icon type="star" style={{fontSize: `33px`}} theme="twoTone"/>
                  <CardText>stars</CardText>
                  <Num>{star}</Num>
                </CardItem>
              </Link>
              <Link to="/following/">
                <CardItem>
                  <Icon type="like" style={{fontSize: `33px`}} theme="twoTone"/>
                  <CardText>关注</CardText>
                  <Num>{follower}</Num>
                </CardItem>
              </Link>
              <Link to="/follower/">
                <CardItem>
                  <Icon type="heart" style={{fontSize: `33px`}} theme="twoTone"/>
                  <CardText>粉丝</CardText>
                  <Num>{followed}</Num>
                </CardItem>
              </Link>
            </CardContainer>
          </Card>
          <Card style={{width: 300, borderRadius: '10px', marginBottom: '15px'}}>
            <div style={{height: 1000}}>
            </div>
          </Card>
        </MainContent>
        {/*{token === '' && <Redirect to="/" />}*/}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  username: state.mine.username,
  head_pic: state.mine.head_pic,
  token: state.login.token,
  idea: state.mine.idea,
  star: state.mine.star,
  follower: state.mine.follower,
  followed: state.mine.followed,
  finish: state.mine.finish,
});

const mapDispatchToProps = dispatch => ({
  postList(token) {
    dispatch(actionCreator.setListAction(token))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Mine)

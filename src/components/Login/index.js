import {Component} from 'react'

import {
  Bg,
  LoginBg,
  CardLogin,
  LoginImgCon,
  ImgLogin,
  LoginCon,
  WelHead,
  LoginForm,
  FormItem,
  LoginLabel,
  LoginInput,
  Select,
  LoginBtn,
  LoginError,
} from './styledComponents'
import Navbar from '../Navbar'
import RegisterContext from '../../context/RegisterContext'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Login extends Component {
  state = {
    username: '',
    inputTopic: topicsList[0].id,
    showError: false,
  }

  componentDidMount = () => {
    const {username, inputTopic} = this.state
    const topicObj = topicsList.find(each => each.id === inputTopic)
    this.onChangeTopic(topicObj.displayText)
    this.onChangeName(username)
  }

  onChangeUsername = event => {
    this.onChangeName(event.target.value)
    this.setState({username: event.target.value})
  }

  onChangeTopicIn = event => {
    const topicObj = topicsList.find(each => each.id === event.target.value)
    this.onChangeTopic(topicObj.displayText)
    this.setState({inputTopic: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username} = this.state

    if (username === '') {
      this.setState(prevState => ({
        showError: !prevState.showError,
      }))
    } else {
      this.onClickRegister()
      const {history} = this.props
      history.replace('/')
    }
  }

  render() {
    const {username, inputTopic, showError} = this.state

    return (
      <RegisterContext.Consumer>
        {value => {
          const {onClickRegister, onChangeTopic, onChangeName} = value
          this.onClickRegister = onClickRegister
          this.onChangeName = onChangeName
          this.onChangeTopic = onChangeTopic

          return (
            <Bg>
              <Navbar />
              <LoginBg>
                <CardLogin>
                  <LoginImgCon>
                    <ImgLogin
                      src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                      alt="website register"
                    />
                  </LoginImgCon>
                  <LoginCon>
                    <WelHead>Let us join</WelHead>
                    <LoginForm onSubmit={this.onSubmitForm}>
                      <FormItem>
                        <LoginLabel htmlFor="user-name">NAME</LoginLabel>
                        <br />
                        <LoginInput
                          placeholder="Your name"
                          type="text"
                          id="user-name"
                          value={username}
                          onChange={this.onChangeUsername}
                        />
                      </FormItem>
                      <FormItem>
                        <LoginLabel htmlFor="inputTopic">TOPICS</LoginLabel>
                        <br />
                        <Select
                          value={inputTopic}
                          onChange={this.onChangeTopicIn}
                        >
                          {topicsList.map(eachTopic => (
                            <option value={eachTopic.id} key={eachTopic.id}>
                              {eachTopic.displayText}
                            </option>
                          ))}
                        </Select>
                      </FormItem>
                      <LoginBtn type="submit">Register Now</LoginBtn>
                      {showError && (
                        <LoginError>Please enter your name</LoginError>
                      )}
                    </LoginForm>
                  </LoginCon>
                </CardLogin>
              </LoginBg>
            </Bg>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}

export default Login

import Navbar from '../Navbar'
import RegisterContext from '../../context/RegisterContext'

import {
  Bg,
  HomeBg,
  WelcomeCard,
  Head,
  Para,
  Button,
  GreetHead,
  GreetPara,
  CustomImg,
  CustomLink,
} from './styledComponents'

const Home = () => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, name, topic} = value

      return (
        <Bg>
          <Navbar />
          <HomeBg>
            {isRegistered ? (
              <WelcomeCard>
                <GreetHead>{`Hello ${name}`}</GreetHead>
                <GreetPara>{`Welcome to ${topic}`}</GreetPara>
              </WelcomeCard>
            ) : (
              <WelcomeCard>
                <Head>Welcome to Meetup</Head>
                <Para>Please register for the topic</Para>
                <CustomLink to="/register">
                  <Button type="button">Register</Button>
                </CustomLink>
              </WelcomeCard>
            )}
            <CustomImg
              src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
              alt="meetup"
            />
          </HomeBg>
        </Bg>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home

import {Component} from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import RegisterContext from './context/RegisterContext'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Home from './components/Home'

class App extends Component {
  state = {
    isRegistered: false,
    name: '',
    topic: '',
  }

  onClickRegister = () => {
    this.setState(prevState => ({
      isRegistered: !prevState.isRegistered,
    }))
  }

  onChangeName = name => {
    this.setState({name})
  }

  onChangeTopic = topic => {
    this.setState({topic})
  }

  render() {
    const {isRegistered, name, topic} = this.state

    return (
      <RegisterContext.Provider
        value={{
          isRegistered,
          name,
          topic,
          onClickRegister: this.onClickRegister,
          onChangeName: this.onChangeName,
          onChangeTopic: this.onChangeTopic,
        }}
      >
        <Switch>
          <Route exact path="/register" component={Login} />
          <Route exact path="/" component={Home} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </RegisterContext.Provider>
    )
  }
}

export default App

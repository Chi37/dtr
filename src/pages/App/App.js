import React, { Component } from "react";
import "./App";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../Login/SignupPage";
import LoginPage from "../Login/LoginPage";
import userService from "../../utils/userService";
import Container from "../../components/Container";
import { fetchWiki } from '../../utils/wiki';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      value: '',
      nodes: []
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

  async handleSearch(e) {
    e.preventDefault();
    let result = await (fetchWiki(this.state.value))
    this.handleState(result);
  }

  handleState = result => {
    console.log(result)
    let copyState = { ...this.state };
    copyState.nodes.push(result[0]); 
    console.log(copyState)
    this.setState(copyState)
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }


  /*--- Lifecycle Methods ---*/

  async componentDidMount() {
    // const scores = await scoresService.index();
    // this.setState({ scores });
  }

  render() {
    return (
      <div>
        <header className="header-footer">DTR</header>
        <Switch>
          <Route exact path="/" render={() => (
            <Container
              user={this.state.user}
              value={this.state.value}
              nodes={this.state.nodes}
              handleLogout={this.handleLogout}
              handleSearch={this.handleSearch}
              handleChange={this.handleChange}
            />)}
          />
          <Route exact path="/signup" render={({ history }) => (
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />)}
          />
          <Route exact path="/login" render={({ history }) => (
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />)}
          />
          {/* <Route exact path='/clusters' render={() => 
            userService.getUser() ? 
              <ClusterPage
                clusters = this.state.node
              />
            :
              <Redirect to='/login'/>
          }/> */}
        </Switch>
      </div>
    );
  }
}

export default App;

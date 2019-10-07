import React, { Component } from "react";
import "./App";
import { Route, Switch } from "react-router-dom";
import SignupPage from "../Login/SignupPage";
import LoginPage from "../Login/LoginPage";
import userService from "../../utils/userService";
import Container from "../../components/Container";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser()
    };
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  };

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
          <Route exact path='/' render={() =>
            <Container/>
          }/>
          <Route
            exact
            path="/signup"
            render={({ history }) => (
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />
          <Route
            exact
            path="/login"
            render={({ history }) => (
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            )}
          />


          {/* <Route exact path='/high-scores' render={() => 
            userService.getUser() ? 
              <HighScoresPage
                scores={this.state.scores}
                handleUpdateScores={this.handleUpdateScores}
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

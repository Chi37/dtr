import React, { Component } from "react";
import "./App.scss";
import NavBar from "../../components/NavBar";
import { Route, Switch, Redirect } from "react-router-dom";
import SignupPage from "../Login/SignupPage";
import LoginPage from "../Login/LoginPage";
import userService from "../../utils/userService";
import Container from "../../components/Container";
import { fetchWiki, scrapeWikiPage } from '../../utils/wiki';

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
  async handleButton(string) {
    let result = await (fetchWiki(string))
    this.handleState(result);
  }


  handleNodeClick = async (node) => {
    let nodes = await scrapeWikiPage(node);
    if (nodes.length) {
      nodes.map(e => {
        this.handleButton(e);
      });
    }
  }

  handleState = result => {
    let copyState = { ...this.state };
    copyState.nodes.push({
      name: result[0],
      link: result[3][0],
      snippet: result[2][0],
      leftChild: null,
      rightChild: null,
    });
    console.log(copyState)
    this.setState(copyState)
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <>
        <header>
          <NavBar user={this.state.user} handleLogout={this.handleLogout} />
        </header>
        <Switch>
          <div className='container'>
            <Route exact path="/" render={() => (
              userService.getUser() ?
                <Container
                  user={this.state.user}
                  value={this.state.value}
                  nodes={this.state.nodes}
                  handleLogout={this.handleLogout}
                  handleSearch={this.handleSearch}
                  handleChange={this.handleChange}
                  handleNodeClick={this.handleNodeClick}
                />
                :
                <Redirect to='/login' />)}
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
          </div>
        </Switch>
        <footer>Made by Chi
        <div> Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </footer>
      </>
    );
  }
}

export default App;

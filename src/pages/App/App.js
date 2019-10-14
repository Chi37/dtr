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
    this.handleResult(result)
    this.handleState(result);

  }
  async handleButton(string) {
    let result = await (fetchWiki(string))
    this.handleResult(result)
    this.handleState(result);
  }

  handleResult(result) {
    console.log(result)
    if (result[2][0].includes('refer to')) {
      console.log(result[2][1])
    }
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
              !userService.getUser() ?
                <SignupPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                /> :
                <Redirect to='/' />)}
            />
            <Route exact path="/login" render={({ history }) => (
              !userService.getUser() ?
                <LoginPage
                  history={history}
                  handleSignupOrLogin={this.handleSignupOrLogin}
                /> :
                <Redirect to='/' />)}
            />
          </div>
        </Switch>
        <footer>
        </footer>
      </>
    );
  }
}

export default App;
